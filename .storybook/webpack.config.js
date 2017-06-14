const path = require('path');

module.exports = {
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
            },
          },
          {
            loader: 'sass-loader',
            options: {
              data: '@import "variables"; @import "mixins";',
              includePaths: [
                path.join(__dirname, '../node_modules/bootstrap/scss'),
              ],
            },
          },
        ],
      },
    ],
  },
};
