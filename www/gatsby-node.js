// Reference: https://www.mrozilla.cz/blog/gatsby-eslint-vscode-import-alias/

const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~paragon-react': path.resolve(__dirname, '../src'),
      },
    },
  });
};
