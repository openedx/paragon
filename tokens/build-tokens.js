#!/usr/bin/env node
const { program } = require('commander');
const path = require('path');
const StyleDictionary = require('./style-dictionary');

program
  .version('0.0.1')
  .description('CLI to build design tokens for various platforms (currently only CSS is supported) from Paragon Design Tokens.')
  .option('--build-dir <char>', 'A path to directory where to put files with built tokens, must end with a /.', './build/')
  .option('--source <char>', 'A path where to look for additional tokens that will get merged with Paragon ones, accepts glob patterns, e.g. "mytokens/**/*.json". Only json files are allowed.')
  .parse();

const { buildDir, source: tokensSource } = program.opts();
const source = tokensSource ? [tokensSource] : [];

StyleDictionary.extend({
  include: [path.resolve(__dirname, 'src/core/**/*.json')],
  source,
  platforms: {
    css: {
      prefix: 'pgn',
      transformGroup: 'css',
      buildPath: buildDir,
      files: [
        {
          format: 'css/custom-variables',
          destination: 'core/variables.css',
          options: {
            outputReferences: true,
          },
        },
        {
          format: 'css/custom-media-breakpoints',
          destination: 'core/custom-media-breakpoints.css',
          options: {
            outputReferences: true,
          },
        },
      ],
      transforms: StyleDictionary.transformGroup.css.filter(item => item !== 'size/rem').concat('color/sass-color-functions', 'str-replace'),
      options: {
        fileHeader: 'customFileHeader',
      },
    },
  },
}).buildAllPlatforms();

const getStyleDictionaryConfig = (themeVariant) => {
  const config = {
    include: [path.resolve(__dirname, 'src/core/**/*.json')],
    source: [path.resolve(__dirname, 'src/themes/light/**/*.json')],
    platforms: {
      css: {
        prefix: 'pgn',
        transformGroup: 'css',
        buildPath: buildDir,
        files: [
          {
            format: `${themeVariant}/custom-variables`,
            destination: `${themeVariant}/variables.css`,
            options: {
              outputReferences: true,
            },
          },
          {
            format: 'core/utility-classes',
            destination: 'core/utility-classes.css',
            options: {
              outputReferences: true,
            },
          },
        ],
        transforms: StyleDictionary.transformGroup.css.filter(item => item !== 'size/rem').concat('color/sass-color-functions', 'str-replace'),
        options: {
          fileHeader: 'customFileHeader',
        },
      },
    },
  };

  return config;
};

const THEME_VARIANTS = ['light'];

THEME_VARIANTS.forEach((themeVariant) => {
  const config = getStyleDictionaryConfig(themeVariant);
  StyleDictionary.extend(config).buildAllPlatforms();
});
