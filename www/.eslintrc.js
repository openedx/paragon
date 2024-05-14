const path = require('path');

module.exports = {
  root: true,
  extends: [
    '../.eslintrc.js',
  ],
  rules: {
    'import/no-extraneous-dependencies': 0,
    // Using named arrow functions is the only way to get the React.FC<> typescript type,
    // which helps validate the return type of React component functions.
    'react/function-component-definition': [2, {
      namedComponents: ['function-declaration', 'arrow-function'],
    }],
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
