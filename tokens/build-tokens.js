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

const config = {
  include: [path.resolve(__dirname, 'src/**/*.json')],
  source,
  platforms: {
    css: {
      prefix: 'pgn',
      transformGroup: 'css',
      buildPath: buildDir,
      files: [
        {
          format: 'css/custom-variables',
          destination: 'variables.css',
          options: {
            outputReferences: true,
          },
        },
        {
          format: 'css/utility-classes',
          destination: 'utility-classes.css',
          options: {
            outputReferences: true,
          },
        },
      ],
      transforms: StyleDictionary.transformGroup.css.concat('color/sass-color-functions', 'str-replace'),
      options: {
        showFileHeader: false,
      },
    },
  },
};

StyleDictionary
  .extend(config)
  .buildAllPlatforms();
