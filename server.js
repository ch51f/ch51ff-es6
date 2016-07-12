var express = require('express'),
	path = require('path');

var isDev = process.env.NODE_ENV !== 'production';
var app = express();
var port = 5100;

app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;

if(isDev) {
	var webpack = require('webpack'),
		webpackDevMiddleware = require('webpack-dev-middleware'),
		webpackHotMiddleware = require('webpack-hot-middleware'),
		webpackDevConfig = require('./webpack.config.js');

	var compiler = webpack(webpackDevConfig);

	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackDevConfig.output.publicPath,
		noInfo: true,
		stats: {
			color: true
		}
	}));
	
	app.use(webpackHotMiddleware(compiler));

	app.get("/", function(req, res) {
		res.sendFile(path.resolve(__dirname, "index.html"))
	});

	// var reload = require('reload');
	// var http = require('http');

	// var server = http.createServer(app);
	// reload(server, app);

	// server.listen(port, function() {
	app.listen(port, function() {
		console.log("App (dev) is now running on port 5100!")
	})

} else {
	app.use(express.static(path.join(__dirname, 'public')));
	app.listen(port, function() {
		console.log('App (production) is now running on port 5100!');
	})
}