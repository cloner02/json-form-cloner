'use strict';

module.exports = {
    entry: "./src/index.ts",
    output: {
        path: __dirname + "/dist-webpack",
        filename: "bundle.js",
        library: {
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