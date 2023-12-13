const path = require('path');

function onCreateWebpackConfig(actions) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~paragon-react': path.resolve(__dirname, '../../src'),
        '~paragon-style': path.resolve(__dirname, '../../scss'),
        '~paragon-icons': path.resolve(__dirname, '../../icons'),
        '~ridiculous-brand': path.resolve(__dirname, '../../../brand-openedx'),
      },
    },
  });
}

module.exports = onCreateWebpackConfig;
