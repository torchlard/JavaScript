const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query:{
        presets: ['es2015', 'react']
      }
    }]
  },
  devServer: {
    inline: true,
    port: 8008
  },
  plugins: [HtmlWebpackPluginConfig]
};







