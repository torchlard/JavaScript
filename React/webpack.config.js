const resolve = require('enhanced-resolve');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query:{
        presets: ['es2015', 'react']
      }
    }
    // {
    //   enforce: 'pre',
    //   test: /\.jsx$|\.js$/,
    //   loader: 'eslint-loader',
    //   include: `${__dirname}/src`,
    //   exclude: /bundle\.js$/
    // }
  ]
  },
  resolve: {
    extensions: ['.js','.jsx'],
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
  },
  devServer: {
    inline: true,
    port: 8008
  },
  plugins: [HtmlWebpackPluginConfig]
};







