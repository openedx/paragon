const StyleDictionary = require('style-dictionary');

const PGN_PREFIX = 'pgn';
const STYLE_DICTIONARY_BUILD_PATH = 'style-dictionary-build';

const paragonStyleDictionary = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      prefix: PGN_PREFIX,
      buildPath: `${STYLE_DICTIONARY_BUILD_PATH}/scss/`,
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables',
        options: {
          outputReferences: true,
        },
      }],
    },
    css: {
      transformGroup: 'css',
      prefix: PGN_PREFIX,
      buildPath: `${STYLE_DICTIONARY_BUILD_PATH}/css/`,
      files: [{
        format: 'css/variables',
        destination: 'variables.css',
        options: {
          outputReferences: true,
        },
      }],
    },
    ts: {
      transformGroup: 'js',
      prefix: PGN_PREFIX,
      buildPath: `${STYLE_DICTIONARY_BUILD_PATH}/js/`,
      files: [{
        format: 'javascript/module',
        destination: 'variables.js',
      }, {
        format: 'typescript/module-declarations',
        destination: 'variables.d.ts',
      }],
    },
  },
});

paragonStyleDictionary.buildAllPlatforms();
