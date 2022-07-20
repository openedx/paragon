const path = require('path');

module.exports = {
  extends: '@edx/eslint-config',
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: true,
    babelOptions: {
      configFile: path.resolve(__dirname, './babel.config.json'),
    },
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.jsx',
          'src/setupTest.js',
          '**/*.test.jsx',
          '**/*.test.js',
          'config/*.js',
          '*.config.js',
          '*.config.*.js',
          '**/*.config.js',
          'component-generator/**',
          'generate-changelog.js',
        ],
      },
    ],
    'import/no-relative-packages': [2, { ignore: ['icons'] }],
    'import/no-unresolved': [2, { ignore: ['axios'] }],
    'react/jsx-no-constructed-context-values': 0,
    'no-restricted-exports': [0, { restrictedNamedExports: ['default'] }],
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/issues/340#issuecomment-338424908
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
    }],
    'jsx-a11y/label-has-for': [2, {
      components: ['label'],
      required: 'id',
      allowChildren: false,
    }],
  },
  env: {
    jest: true,
  },
  globals: {
    newrelic: false,
  },
};
