// webpack.config.dev.js
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

("use strict");

//define the webpack out put
module.exports = merge(common, {
  mode: "development",
  optimization: {
    // usedExports: true
  },
  module: {
    rules: [
      // this will apply to both plain .js files
      // AND <script> blocks in vue files
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"]
      },
      // this will apply to both plain .css files
      // AND <style> blocks in vue files
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      // this will apply to both plain .scss files
      // AND <style lang="scss"> blocks in vue files
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
});
