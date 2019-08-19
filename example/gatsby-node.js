/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~paragon-react': path.resolve(__dirname, '../src'),
        '~paragon-style': path.resolve(__dirname, '../scss'),
      },
    },
  });
};
