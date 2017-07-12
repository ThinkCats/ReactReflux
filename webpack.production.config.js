var path = require('path');
var webpack = require('webpack');

var config = {
    entry: path.resolve(__dirname, 'src/main.jsx'),
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias : {
            'components': path.resolve(__dirname, './src/components'),
            'services': path.resolve(__dirname, './src/services')
        }
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            exclude: /node_modules/,
            loaders: ['babel-loader?presets[]=react,presets[]=es2015'],
        }, {
            test: /\.css$/, // Only .css files
            loaders: ['style-loader','css-loader']
        }]
    }
};

module.exports = config;