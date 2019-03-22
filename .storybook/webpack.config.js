const path = require('path');

// This config is merged with Storybook's default
// https://storybook.js.org/docs/configurations/custom-webpack-config/#extend-mode
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss|\.css$/,
        loaders: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                path.join(__dirname, '../node_modules'),
              ],
              sourceMap: true,
            },
          },
        ],
        include: path.resolve(__dirname, '../'),
      },
      {
        test: /\.(woff2?|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader',
      },
    ],
  },
};