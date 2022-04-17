const { merge } = require('webpack-merge');
const CopyPlugin = require('copy-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  target: 'browserslist',
  devtool: 'cheap-source-map',
  output: {
    filename: 'js/[name].[hash:8].js',
    publicPath: '/component-library/',
  },
  optimization: {
    minimizer: [new TerserPlugin()],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash:8].css',
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'assets/images/sprite.svg',
          to: 'public/sprite.svg',
        },
      ],
    }),
    //visualize size of webpack output files
    new BundleAnalyzerPlugin({
      openAnalyzer: false, // set true to see report
      analyzerMode: 'static',
    }),
  ],
  performance: {
    hints: false,
    maxAssetSize: 512000, //512kb,
    // TODO: add code splitting
  },
});
