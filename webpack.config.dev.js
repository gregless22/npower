// webpack.config.dev.js
const path = require('path')

'use strict'
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  mode: 'development',
  entry: [
    './vue/app.js'
  ],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      	{
        	test: /\.vue$/,
        	use: 'vue-loader'
      	},
      	{
	      	test: /\.js$/,
	      	exclude: /node_modules/,
	      	use: {
            	loader: "babel-loader"
          	}
    	}
    ]
  },
   resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
  plugins: [
    new VueLoaderPlugin()
  ]
}