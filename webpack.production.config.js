var path = require('path');
var webpack = require('webpack');

var config = {
    entry: path.resolve(__dirname, 'app/main.jsx'),
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
        }, {
            test: /\.css$/, // Only .css files
            loaders: ['style-loader','css-loader'] // Run both loaders
        }]
    }
};

module.exports = config;