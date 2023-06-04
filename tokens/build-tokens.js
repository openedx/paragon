#!/usr/bin/env node
const { program } = require('commander');
const path = require('path');
const { StyleDictionary, colorTransform } = require('./style-dictionary');

program
  .version('0.0.1')
  .description('CLI to build design tokens for various platforms (currently only CSS is supported) from Paragon Design Tokens.')
  .option('--build-dir <char>', 'A path to directory where to put files with built tokens, must end with a /.', './build/')
  .option('--source <char>', 'A path where to look for additional tokens that will get merged with Paragon ones, must be a path to root directory of the token files that contains "root" and "themes" subdirectories.')
  .option('--source-tokens-only', 'A flag to indicate that only tokens from source will be included in the output; Paragon core tokens will be used but not included in the output.')
  .parse();

const {
  buildDir,
  source: tokensSource,
  sourceTokensOnly: hasSourceTokensOnly,
} = program.opts();

const coreConfig = {
  include: [path.resolve(__dirname, 'src/core/**/*.json')],
  source: tokensSource ? [`${tokensSource}/core/**/*.json`] : [],
  platforms: {
    css: {
      prefix: 'pgn',
      transformGroup: 'css',
      // add trailing slash if not present
      buildPath: buildDir.slice(-1) !== '/' ? `${buildDir}/` : buildDir,
      files: [
        {
          format: 'css/custom-variables',
          destination: 'core/variables.css',
          filter: hasSourceTokensOnly ? 'isSource' : undefined,
          options: {
            outputReferences: !hasSourceTokensOnly,
          },
        },
        {
          format: 'css/custom-media-breakpoints',
          destination: 'core/custom-media-breakpoints.css',
          filter: hasSourceTokensOnly ? 'isSource' : undefined,
          options: {
            outputReferences: !hasSourceTokensOnly,
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

const getStyleDictionaryConfig = (themeVariant) => ({
  ...coreConfig,
  include: [...coreConfig.include, path.resolve(__dirname, `src/themes/${themeVariant}/**/*.json`)],
  source: tokensSource ? [`${tokensSource}/themes/${themeVariant}/**/*.json`] : [],
  transform: {
    'color/sass-color-functions': {
      ...StyleDictionary.transform['color/sass-color-functions'],
      transformer: (token) => colorTransform(token, themeVariant),
    },
  },
  platforms: {
    css: {
      ...coreConfig.platforms.css,
      files: [
        {
          format: 'css/custom-variables',
          destination: `themes/${themeVariant}/variables.css`,
          filter: hasSourceTokensOnly ? 'isSource' : undefined,
          options: {
            outputReferences: !hasSourceTokensOnly,
          },
        },
        {
          format: 'css/utility-classes',
          destination: `themes/${themeVariant}/utility-classes.css`,
          filter: hasSourceTokensOnly ? 'isSource' : undefined,
          options: {
            outputReferences: !hasSourceTokensOnly,
          },
        },
      ],
    },
  },
});

StyleDictionary.extend(coreConfig).buildAllPlatforms();

const THEME_VARIANTS = ['light'];

THEME_VARIANTS.forEach((themeVariant) => {
  const config = getStyleDictionaryConfig(themeVariant);
  StyleDictionary.extend(config).buildAllPlatforms();
});
