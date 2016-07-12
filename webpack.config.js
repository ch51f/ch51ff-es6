var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/clinet?reload=true';	

var devConfig = {
	entry: {

	},
	// entry: path.resolve(__dirname, process.env.cd + '/main'),

	output: {
		filename: './[name]/bundle.js',
		path: path.resolve(__dirname, './public'),
		publicPath: publicPath
	},
	devtool: 'eval-source-map',
	module: {
		loaders: [{
			test: /\.(png|jpg)$/,
			loaders: 'url?limit=8192&context=client&name=[path][name].[ext]'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		}, {
			test: /\.js[x]?$/,
			exclude: /mode_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};

module.exports = devConfig;