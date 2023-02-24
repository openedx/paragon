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
  fileHeader: {
    customFileHeader: (defaultMessage) => [
      'IMPORTANT: This file is the result of assembling design tokens',
      ...defaultMessage,
    ],
  },
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
        {
          format: 'css/custom-media-breakpoints',
          destination: 'custom-media-breakpoints.css',
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

StyleDictionary
  .extend(config)
  .buildAllPlatforms();
