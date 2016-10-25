var express = require('express'),
	path = require('path');

var app = express();
var port = 18080;

app.locals.env = 'dev';
app.locals.reload = true;

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

app.get("/example", function(req, res) {
	res.sendFile(path.resolve(__dirname, "example/index.html"))
});

app.get("/number", function(req, res) {
	res.sendFile(path.resolve(__dirname, "example/index.html"))
});

app.get("/example/*", function(req, res) {
	res.sendFile(path.resolve(__dirname, "example/index.html"))
});

var reload = require('reload'),
	http = require('http');

var server = http.createServer(app);
reload(server, app);

server.listen(port, function() {
	console.log("Dev is now running on port 18080!")
})