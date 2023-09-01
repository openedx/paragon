const path = require('path');

function onCreateWebpackConfig(actions) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~paragon-react': path.resolve(__dirname, '../../src'),
        '~paragon-style': path.resolve(__dirname, '../../styles'),
        '~paragon-icons': path.resolve(__dirname, '../../icons'),
      },
    },
  });
}

module.exports = onCreateWebpackConfig;
