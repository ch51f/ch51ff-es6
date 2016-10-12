var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://fch.net.fangstar.net:18080/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';	

var devConfig = {
	entry: ['babel-polyfill', path.resolve(__dirname, 'number/main'), hotMiddlewareScript],
	// entry: path.resolve(__dirname, process.env.cd + '/main'),

	output: {
		filename: './bundle.js',
		path: path.resolve(__dirname, './public'),
		publicPath: publicPath
	},
	// devtool: 'eval-source-map',
	devtool: false,
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

	resolve: {
		extensions: ['', '.js', '.jsx', '.less', '.css'],
		alias: {
			'common': path.join(__dirname, 'common') 
		},
		externals: []
	},

	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	]
};

module.exports = devConfig;