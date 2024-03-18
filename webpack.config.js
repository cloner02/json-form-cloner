'use strict';
const webpack = require('webpack');
const path = require('path');

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
        extensions: [".ts", ".js"],
        alias: {
            "cForm": path.resolve(__dirname, "src/components/cform/cform"),
            "FormController": path.resolve(__dirname, "src/controller/index")
          }
  }
};