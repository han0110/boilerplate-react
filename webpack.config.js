const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const APP_DIR = path.resolve(__dirname, './src');
const MODULES_DIR = path.resolve(__dirname, './node_modules');
const PACKAGE = require('./package.json');
const loaders = require('./webpack.loaders');

const production = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: ['babel-polyfill', `${APP_DIR}/index.js`],
    vendor: Object.keys(PACKAGE.dependencies),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunck.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [APP_DIR, MODULES_DIR],
  },
  module: {
    loaders,
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './static/template.html',
      favicon: './static/favicon.ico',
      files: {
        js: ['bundle.js'],
        css: ['style.css'],
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: production,
    }),
  ],
  devServer: {
    contentBase: './dist',
    noInfo: true,
    inline: true,
    host: '127.0.0.1',
    port: '3000',
  },
};
