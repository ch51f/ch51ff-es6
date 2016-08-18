var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var productionConfig = [{
    entry: path.resolve(__dirname, 'example/main'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: "/"
    },
    module: {
        loaders: [{
            test: /\.(png|jpg)$/,
            loaders: 'url?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        }, {
            test: /\.less$/,
            loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
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
        alias: {
            'common': path.join(__dirname, 'common') 
        } 
    },
    plugins: [
        new uglifyJsPlugin({
            output: {
                comments: false,
            },
            compress: {
                warnings: false 
            } 
        }),
        new ExtractTextPlugin("bundle.css"),
        new webpack.BannerPlugin('This file is created by ch51ff')
    ]
}];

module.exports = productionConfig;
