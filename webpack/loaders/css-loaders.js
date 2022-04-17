const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const devMode = process.env.NODE_ENV === 'development';

//inject CSS into the DOM (tag style)
const styleLoader = {
  loader: 'style-loader',
};

//creates a CSS file per JS file which contains CSS (and add into html as <link rel="stylesheet" href="path/to/style.css" />)
const MiniCssExtractPluginLoader = {
  loader: MiniCssExtractPlugin.loader, //creates a CSS file per JS file which contains CSS
};

module.exports = [
  devMode ? { ...styleLoader } : { ...MiniCssExtractPluginLoader },
  {
    loader: 'css-loader', //translates CSS into CommonJS (interprets @import and url() like import/require() and will resolve them)
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: { plugins: [autoprefixer] },
      sourceMap: true,
    },
  },
  {
    loader: 'resolve-url-loader',
    options: {
      sourceMap: true,
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: true,
    },
  },
];
