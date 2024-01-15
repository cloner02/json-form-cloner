'use strict';
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: "ts-loader" }
                ],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
  }
};