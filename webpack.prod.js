const path = require('path')
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
ImageminWebP = require("imagemin-webp");
CopyPlugin = require("copy-webpack-plugin");

module.exports = merge (common, {
    mode: 'production',
    plugins: [
        new CopyPlugin({
            patterns: [
          {from: "./src/assets/*.png", to: "./images/[name].webp"}
            ],
        }),
        new ImageminWebpackPlugin({
          plugins: [
            ImageminWebP({
              quality: 75
            })
          ]
        }),
        new MiniCssExtractPlugin({ filename: "[name].css"})
      ],
    module: {
      rules: [
          {test: /\.scss$/i, use: [
            'mini-css-extract-plugin/dist/loader.js', 
            'css-loader', 
            'sass-loader'
          ]}
      ]},
});