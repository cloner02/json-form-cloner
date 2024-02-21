'use strict';
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/dist-webpack",
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: "ts-loader" }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['css-loader']
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
  }
};