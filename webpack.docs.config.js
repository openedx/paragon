const path = require('path');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve('./docs/App.js'),
  },
  output: {
    path: path.resolve('./docs'),
    filename: 'bundle.js',
    libraryTarget: 'umd',
  },
  plugins: [
    new StaticSiteGeneratorPlugin('main', [
      '/',
      '/header/',
      '/inputs/',
    ], {}),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
          },
        },
      },
    ],
  },
};