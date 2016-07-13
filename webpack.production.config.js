// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

var productionConfig = [{
    entry: path.resolve(__dirname, 'example/main'),
    output: {
        filename: './bundle.js',
        path: path.resolve(__dirname, './public'),
        publicPath: "/"
    },
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
        // new ExtractTextPlugin('./[name]/index.css', {
        //     allChunks: true
        // })
        new uglifyJsPlugin({
            compress: {
                warnings: false 
            } 
        })
    ]
}];

module.exports = productionConfig;
