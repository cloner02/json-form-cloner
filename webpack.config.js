'use strict';
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/dist-webpack",
        filename: "bundle.js",
        library: {
            name: '__',
            type: 'umd',
          },
        globalObject: 'this' // make the library compatible with both browser and node
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