const path = require('path');

// This config is merged with Storybook's default
// https://storybook.js.org/docs/configurations/custom-webpack-config/#extend-mode
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[local]',
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "paragon-reset";',
              includePaths: [
                path.join(__dirname, '../src/utils'),
                path.join(__dirname, '../node_modules'),
              ],
              sourceMap: true,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};