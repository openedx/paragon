const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const { StyleDictionary, colorTransform, createCustomCSSVariables } = require('../tokens/style-dictionary');
const { createIndexCssFile } = require('../tokens/utils');

/**
 * Builds tokens for CSS styles from JSON source files.
 *
 * @param {string[]} commandArgs - Command line arguments for building tokens.
 * @param {string} [commandArgs.build-dir='./build/'] - The directory where the build output will be placed.
 * @param {string} [commandArgs.source] - The source directory containing JSON token files.
 * @param {string} [commandArgs.base-theme] - The base theme to use from Paragon if named differently than the theme.
 * @param {boolean} [commandArgs.source-tokens-only=false] - Indicates whether to include only source tokens.
 * @param {string|string[]} [commandArgs.themes=['light']] - The themes (variants) for which to build tokens.
 * @param {boolean} [commandArgs.all-themes] - Indicated whether to process all themes.
 */
async function buildTokensCommand(commandArgs) {
  const defaultParams = {
    themes: 'light',
    'base-theme': null,
    'build-dir': './build/',
    'all-themes': false,
  };

  const alias = {
    'build-dir': 'b',
    themes: 't',
  };

  const {
    'build-dir': buildDir,
    source: tokensSource,
    'source-tokens-only': hasSourceTokensOnly,
    themes,
    'base-theme': baseTheme,
    'all-themes': allThemes,
  } = minimist(commandArgs, { alias, default: defaultParams, boolean: ['source-tokens-only', 'all-themes'] });

  let themesToProcess = null;

  if (allThemes) {
    const tokensPath = tokensSource || path.resolve(__dirname, '../tokens/src');
    themesToProcess = fs
      .readdirSync(`${tokensPath}/themes/`, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
  } else if (Array.isArray(themes)) {
    themesToProcess = themes;
  } else {
    themesToProcess = themes.split(/[\s,]/);
  }

  const coreConfig = {
    include: [path.resolve(__dirname, '../tokens/src/core/**/*.json')],
    source: tokensSource ? [`${tokensSource}/core/**/*.json`] : [],
    platforms: {
      css: {
        prefix: 'pgn',
        transformGroup: 'css',
        // NOTE: buildPath must end with a slash
        buildPath: buildDir.slice(-1) === '/' ? buildDir : `${buildDir}/`,
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

  const getStyleDictionaryConfig = (themeVariant, baseThemeVariant) => ({
    ...coreConfig,
    include: [...coreConfig.include, path.resolve(__dirname, `../tokens/src/themes/${baseThemeVariant}/**/*.json`)],
    source: tokensSource ? [`${tokensSource}/themes/${themeVariant}/**/*.json`] : [],
    transform: {
      'color/sass-color-functions': {
        ...StyleDictionary.transform['color/sass-color-functions'],
        transformer: (token) => colorTransform(token, themeVariant),
      },
    },
    format: {
      'css/custom-variables': formatterArgs => createCustomCSSVariables({
        formatterArgs,
        themeVariant,
      }),
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
  createIndexCssFile({ buildDir, isTheme: false });

  themesToProcess.forEach((themeVariant) => {
    const config = getStyleDictionaryConfig(themeVariant, baseTheme || themeVariant);
    StyleDictionary.extend(config).buildAllPlatforms();
    createIndexCssFile({ buildDir, isTheme: true, themeVariant });
  });
}

module.exports = buildTokensCommand;
