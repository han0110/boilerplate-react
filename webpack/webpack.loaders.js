/* eslint-disable import/no-extraneous-dependencies */

const { loader: miniCssLoader } = require('mini-css-extract-plugin');

module.exports = [
  {
    test: /\.jsx?$/,
    loaders: ['babel-loader'],
    exclude: /node_modules/,
  },
  {
    test: /\.(css|scss)$/,
    use: [miniCssLoader, 'css-loader', 'postcss-loader', 'sass-loader'],
  },
  {
    test: /\.otf/,
    exclude: /node_modules/,
    loader:
      'url-loader?limit=10000&mimetype=application/octet-stream&name=assets/fonts/[hash].[ext]',
  },
  {
    test: /\.jpe?g|png|svg/,
    exclude: /node_modules/,
    loader:
      'url-loader?limit=10000&mimetype=image/jpg&name=assets/images/[hash].[ext]',
  },
];
