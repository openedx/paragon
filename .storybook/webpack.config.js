// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const path = require('path');

module.exports = {
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'},
        {
          loader: 'sass-loader',
          options: {
            data: '@import "variables"; @import "mixins";',
            includePaths: [
              path.join(__dirname, '../'),
            ],
          },
        },
      ],
    }],
  },
};
