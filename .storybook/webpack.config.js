const path = require('path');

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
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
      },
    ],
  },
};
