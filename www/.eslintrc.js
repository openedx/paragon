const path = require('path');

module.exports = {
  root: true,
  extends: [
    '../.eslintrc.js',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~paragon-react': path.resolve(__dirname, '../src'),
              '~paragon-style': path.resolve(__dirname, '../scss'),
              '~paragon-icons': path.resolve(__dirname, '../icons'),
            },
          },
        },
      },
    },
  },
};
