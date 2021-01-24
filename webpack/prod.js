const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackCommon = require('./common.js');

module.exports = merge(webpackCommon, {
  mode: 'production',

  devtool: 'source-map',

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Terms Inspection',
      template: 'templates/index.html',
    }),
  ],
});