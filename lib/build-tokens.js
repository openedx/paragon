import path from 'path';
import minimist from 'minimist';
import { fileURLToPath } from 'url';
import { StyleDictionary, colorTransform, createCustomCSSVariables } from '../tokens/style-dictionary.js';
import { createIndexCssFile } from '../tokens/utils.js';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

/**
 * Builds tokens for CSS styles from JSON source files.
 *
 * @param {string[]} commandArgs - Command line arguments for building tokens.
 * @param {string} [commandArgs.build-dir='./build/'] - The directory where the build output will be placed.
 * @param {string} [commandArgs.source] - The source directory containing JSON token files.
 * @param {boolean} [commandArgs.source-tokens-only=false] - Indicates whether to include only source tokens.
 * @param {string|string[]} [commandArgs.themes=['light']] - The themes (variants) for which to build tokens.
 */
async function buildTokensCommand(commandArgs) {
  const defaultParams = {
    themes: ['light'],
    'build-dir': './build/',
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
  } = minimist(commandArgs, { alias, default: defaultParams, boolean: 'source-tokens-only' });
  // console.log('build-tokens.js - dirname =======>', dirname);
  // console.log('build-tokens.js - StyleDictionary =======>', StyleDictionary);
  // console.log('build-tokens.js - StyleDictionary =======>', StyleDictionary.hooks);
  const coreConfig = {
    include: [
      path.resolve(dirname, '../tokens/src/core/**/*.json'),
      path.resolve(dirname, '../tokens/src/core/**/*.toml'),
    ],
    source: tokensSource
      ? [`${tokensSource}/core/**/*.json`, `${tokensSource}/core/**/*.toml`]
      : [],
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
          // {
          //   format: 'css/custom-media-breakpoints',
          //   destination: 'core/custom-media-breakpoints.css',
          //   filter: hasSourceTokensOnly ? 'isSource' : undefined,
          //   options: {
          //     outputReferences: !hasSourceTokensOnly,
          //   },
          // },
        ],
        transforms: StyleDictionary.hooks.transformGroups.css.filter(item => {
          // console.log('build-tokens.js - item =======>', item);
          return item !== 'size/rem';
        }).concat('color/sass-color-functions', 'str-replace'),
        options: {
          fileHeader: 'customFileHeader',
        },
      },
    },
  };
  // console.log('build-tokens.js - coreConfig =======>', coreConfig);
  const getStyleDictionaryConfig = (themeVariant) => ({
    ...coreConfig,
    include: [
      ...coreConfig.include,
      path.resolve(dirname, `../tokens/src/themes/${themeVariant}/**/*.json`),
      path.resolve(dirname, `../tokens/src/themes/${themeVariant}/**/*.toml`),
    ],
    source: tokensSource
      ? [
        `${tokensSource}/themes/${themeVariant}/**/*.json`,
        `${tokensSource}/themes/${themeVariant}/**/*.toml`,
      ]
      : [],
    transform: {
      'color/sass-color-functions': {
        ...StyleDictionary.hooks.transforms['color/sass-color-functions'],
        transform: (token) => {
          // console.log('build-tokens.js - color/sass-color-functions =======>', token);
          return colorTransform(token, themeVariant);
        },
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
          // {
          //   format: 'css/utility-classes',
          //   destination: `themes/${themeVariant}/utility-classes.css`,
          //   filter: hasSourceTokensOnly ? 'isSource' : undefined,
          //   options: {
          //     outputReferences: !hasSourceTokensOnly,
          //   },
          // },
        ],
      },
    },
  });

  new StyleDictionary(coreConfig).buildAllPlatforms();
  createIndexCssFile({ buildDir, isTheme: false });

  themes.forEach(async (themeVariant) => {
    const config = getStyleDictionaryConfig(themeVariant);
    // console.log('build-tokens.js - config =======>', config);
    new StyleDictionary(config).buildAllPlatforms();
    createIndexCssFile({ buildDir, isTheme: true, themeVariant });
  });
}

export default buildTokensCommand;
