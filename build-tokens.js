const StyleDictionary = require('style-dictionary');
const { transform } = require('@divriots/style-dictionary-to-figma');

const PGN_PREFIX = 'pgn';
const STYLE_DICTIONARY_BUILD_PATH = 'style-dictionary-build';

const paragonStyleDictionary = StyleDictionary.extend({
  source: ['tokens/**/*.json'],
  format: {
    figmaTokensPlugin: ({ dictionary }) => {
      const transformedTokens = transform(dictionary.tokens);
      return JSON.stringify(transformedTokens, null, 2);
    },
  },
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
    ios: {
      transformGroup: 'ios',
      buildPath: `${STYLE_DICTIONARY_BUILD_PATH}/ios/Classes/Generate/`,
      prefix: PGN_PREFIX,
      files: [{
        destination: 'ParagonColor.h',
        format: 'ios/colors.h',
        className: 'ParagonColor',
        type: 'ParagonColorName',
        filter: {
          attributes: {
            category: 'color',
          },
        },
      }, {
        destination: 'ParagonColor.m',
        format: 'ios/colors.m',
        className: 'ParagonColor',
        type: 'ParagonColorName',
        filter: {
          attributes: {
            category: 'color',
          },
        },
      }],
    },
    figma: {
      transformGroup: 'js',
      buildPath: `${STYLE_DICTIONARY_BUILD_PATH}/figma/`,
      files: [
        {
          destination: 'figma-tokens.json',
          format: 'figmaTokensPlugin',
        },
      ],
    },
  },
});

console.log(paragonStyleDictionary.allTokens.length);
paragonStyleDictionary.buildAllPlatforms();
