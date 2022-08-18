const StyleDictionary = require('style-dictionary');

const STYLE_DICTIONARY_BUILD_PATH = 'style-dictionary-build';

const paragonStyleDictionary = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
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
      buildPath: `${STYLE_DICTIONARY_BUILD_PATH}/css/`,
      files: [{
        format: 'css/variables',
        destination: 'variables.css',
        options: {
          outputReferences: true,
        },
      }],
    },
  },
});

paragonStyleDictionary.buildAllPlatforms();
