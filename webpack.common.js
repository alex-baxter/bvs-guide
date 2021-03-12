const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            minify: false
            })
            ],
    module: {
        rules: [
            {test: /\.(svg)$/,
            loader: 'file-loader'}
        ]
    },
};