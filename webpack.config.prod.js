// const merge = require('webpack-merge')
// const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

("use strict");

//define the webpack out put
module.exports = {
  mode: "production",
  entry: {
    survey: "./vue/pages/survey.js",
    home: "./vue/pages/home.js",
    products: "./vue/pages/products.js",
    contact: "./vue/pages/contact.js",
    about: "./vue/pages/about.js",
    product: "./vue/pages/product.js"
  },
  output: {
    filename: "[name].[hash].bundle.min.js",
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/"
  },
  optimization: {
    minimize: true,
    splitChunks: {
      // need cache groups as it is easier for all html pages to access.
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    },
    //doesnt really bring much performance enhancements
    runtimeChunk: {
      name: "runtime"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // this will apply to both plain .css files
      // AND <style> blocks in vue files
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "images"
            }
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  plugins: [
    new CleanWebpackPlugin(["dist/*.*"], { watch: true }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css"
    }),
    new OptimizeCSSAssetsPlugin({}),
    new HtmlWebpackPlugin({
      title: "NPower | Home",
      template: "vue/app.html",
      chunks: ["home", "runtime", "vendors"],
      filename: "home.html",
      favicon: "vue/assets/images/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      title: "NPower | Survey",
      template: "vue/app.html",
      chunks: ["survey", "runtime", "vendors"],
      filename: "survey.html", //relative to root of the application,
      favicon: "vue/assets/images/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      title: "NPower | About",
      template: "vue/app.html",
      chunks: ["about", "runtime", "vendors"],
      filename: "about.html", //relative to root of the application
      favicon: "vue/assets/images/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      title: "NPower | Products",
      template: "vue/app.html",
      chunks: ["products", "runtime", "vendors"],
      filename: "products.html", //relative to root of the application
      favicon: "vue/assets/images/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      title: "NPower | Contact",
      template: "vue/app.html",
      chunks: ["contact", "runtime", "vendors"],
      filename: "contact.html", //relative to root of the application
      favicon: "vue/assets/images/favicon.ico"
    }),
    new HtmlWebpackPlugin({
      title: "NPower | Product",
      template: "vue/app.html",
      chunks: ["product", "runtime", "vendors"],
      filename: "product.html", //relative to root of the application
      favicon: "vue/assets/images/favicon.ico"
    })
  ]
};
