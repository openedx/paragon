const path = require('path');

module.exports = {
  extends: [
    '@edx/eslint-config',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    requireConfigFile: true,
    babelOptions: {
      configFile: path.resolve(__dirname, './babel.config.json'),
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.jsx',
          'src/setupTest.ts',
          '**/*.test.jsx',
          '**/*.test.tsx',
          '**/*.test.js',
          '**/*.test.ts',
          'config/*.js',
          '*.config.ts',
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
    'no-param-reassign': [2, { props: false }],
  },
  overrides: [
    {
      files: ['**/*.json'],
      parser: 'jsonc-eslint-parser',
      extends: ['plugin:jsonc/recommended-with-json'],
      rules: {
        'jsonc/indent': ['error', 2],
        'jsonc/quote-props': ['error', 'always'],
        'jsonc/quotes': ['error', 'double'],
        'jsonc/no-octal': 'error',
        'jsonc/no-dupe-keys': 'error',
        'jsonc/valid-json-number': 'error',
        'jsonc/no-bigint-literals': 'error',
        'jsonc/no-comments': 'off',
        // Disabled @typescript-eslint rules for JSON files as they contain plain data structures
        // unrelated to TypeScript syntax, semantics, or runtime behavior.
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/return-await': 'off',
      },
    },
  ],
  env: {
    jest: true,
  },
  globals: {
    newrelic: false,
  },
};
