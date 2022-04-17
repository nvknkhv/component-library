const path = require('path');
const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  target: 'web',
  devtool: 'eval-source-map',
  devServer: {
    hot: true,
  },
  output: {
    filename: 'js/[name].js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [path.resolve(__dirname, '../dist')],
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'assets/images/sprite.svg',
          to: 'component-library/public/sprite.svg',
        },
      ],
    }),
  ],
});
