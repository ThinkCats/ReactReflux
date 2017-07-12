var path = require('path');

var config = {
    entry: path.resolve(__dirname, 'app/main.jsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            // exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/, // Only .css files
            loaders: ['style-loader','css-loader'] // Run both loaders
        }],
    }
};


module.exports = config;
