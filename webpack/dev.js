const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackCommon = require('./common.js');

module.exports = merge(webpackCommon, {
  mode: 'development',

  devServer: {
    compress: false,
    port: 3000,
  },

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      title: '[DEV] Terms Inspection',
      template: 'templates/index.html',
    }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
});