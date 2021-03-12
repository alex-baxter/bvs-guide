const path = require('path')
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge (common, {
    mode: 'development',
    module: {
      rules: [
          {test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader']}
      ]
      },
    devServer: {
        contentBase: "./dist",
        port: 3000,
        host: "127.0.0.1",
        open: true,
      },
});