const path = require('path');
const minimist = require('minimist');
const { StyleDictionary, colorTransform, createCustomCSSVariables } = require('../tokens/style-dictionary');
const { createIndexCssFile } = require('../tokens/utils');

async function buildTokensCommand(commandArgs) {
  const args = minimist(commandArgs, {
    alias: {
      s: 'source',
      b: 'build',
      t: 'themes',
    },
  });
  const buildDir = args['build-dir'] || args.b || './build/';
  const tokensSource = args.source || args.s;
  const hasSourceTokensOnly = Boolean(args['source-tokens-only']);
  const themes = args.themes || args.t || ['light'];

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

  const getStyleDictionaryConfig = (themeVariant) => ({
    ...coreConfig,
    include: [...coreConfig.include, path.resolve(__dirname, `../tokens/src/themes/${themeVariant}/**/*.json`)],
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

  themes.forEach((themeVariant) => {
    const config = getStyleDictionaryConfig(themeVariant);
    StyleDictionary.extend(config).buildAllPlatforms();
    createIndexCssFile({ buildDir, isTheme: true, themeVariant });
  });
}

module.exports = buildTokensCommand;
