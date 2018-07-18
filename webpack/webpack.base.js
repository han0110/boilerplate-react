/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-underscore-dangle */

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const loaders = require('./webpack.loaders');

const __root = resolve(__dirname, '..');
const __src = resolve(__root, 'src');

module.exports = {
  context: __src,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['@babel/polyfill', resolve(__src, 'index.jsx')],
    vendors: ['react', 'react-dom'],
  },
  output: {
    path: resolve(__root, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
  },
  stats: 'errors-only',
  module: { rules: loaders },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: resolve(__src, 'static', 'template.html'),
      favicon: resolve(__src, 'static', 'favicon.ico'),
    }),
  ],
};
