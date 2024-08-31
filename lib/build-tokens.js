const path = require('path');
const minimist = require('minimist');
const {
  initializeStyleDictionary,

  colorTransform,
} = require('../tokens/style-dictionary');
const { createIndexCssFile } = require('../tokens/utils');

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
    'source-tokens-only': false,
    'output-references': true,
    verbose: false,
  };

  const alias = {
    'build-dir': 'b',
    themes: 't',
    verbose: '-v',
  };

  const {
    'build-dir': buildDir,
    source: tokensSource,
    'source-tokens-only': hasSourceTokensOnly,
    'output-references': outputReferences,
    themes,
    verbose,
  } = minimist(
    commandArgs,
    {
      alias,
      default: defaultParams,
      boolean: ['source-tokens-only', 'output-references', 'verbose'],
    },
  );

  const StyleDictionary = await initializeStyleDictionary({ themes });

  const coreConfig = {
    include: [
      path.resolve(__dirname, '../tokens/src/core/**/*.json'),
      path.resolve(__dirname, '../tokens/src/core/**/*.toml'),
    ],
    source: tokensSource
      ? [`${tokensSource}/core/**/*.json`, `${tokensSource}/core/**/*.toml`]
      : [],
    platforms: {
      css: {
        prefix: 'pgn',
        // NOTE: buildPath must end with a slash
        buildPath: buildDir.slice(-1) === '/' ? buildDir : `${buildDir}/`,
        files: [
          {
            format: 'css/custom-variables',
            destination: 'core/variables.css',
            filter: hasSourceTokensOnly ? 'isSource' : undefined,
            options: {
              outputReferences,
              formatting: {
                fileHeaderTimestamp: true,
              },
            },
          },
          {
            format: 'css/custom-media-breakpoints',
            destination: 'core/custom-media-breakpoints.css',
            filter: hasSourceTokensOnly ? 'isSource' : undefined,
            options: {
              outputReferences,
              formatting: {
                fileHeaderTimestamp: true,
              },
            },
          },
        ],
        transforms: StyleDictionary.hooks.transformGroups.css.filter(item => item !== 'size/rem').concat('color/sass-color-functions', 'str-replace'),
      },
    },
    log: {
      verbosity: verbose ? 'verbose' : 'default',
    },
  };

  const getStyleDictionaryConfig = (themeVariant) => ({
    ...coreConfig,
    include: [
      ...coreConfig.include,
      path.resolve(__dirname, `../tokens/src/themes/${themeVariant}/**/*.json`),
      path.resolve(__dirname, `../tokens/src/themes/${themeVariant}/**/*.toml`),
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
        transform: (token) => colorTransform(token, themeVariant),
      },
    },
    platforms: {
      css: {
        ...coreConfig.platforms.css,
        files: [
          {
            format: 'css/custom-variables',
            destination: `themes/${themeVariant}/variables.css`,
            filter: hasSourceTokensOnly
              ? `isSource.${themeVariant}`
              : `isThemeVariant.${themeVariant}`,
            options: {
              outputReferences,
              formatting: {
                fileHeaderTimestamp: true,
              },
            },
          },
          {
            format: 'css/utility-classes',
            destination: `themes/${themeVariant}/utility-classes.css`,
            filter: hasSourceTokensOnly ? 'isSource' : undefined,
            options: {
              outputReferences,
              formatting: {
                fileHeaderTimestamp: true,
              },
            },
          },
        ],
      },
    },
  });

  // Create list of style-dictionary configurations to build (core + theme variants)
  const configs = [
    { config: coreConfig },
    ...themes.map((themeVariant) => {
      const config = getStyleDictionaryConfig(themeVariant);
      return {
        config,
        themeVariant,
      };
    }),
  ];

  // Build tokens for each configuration
  await Promise.all(configs.map(async ({ config, isThemeVariant, themeVariant }) => {
    const sd = new StyleDictionary(config);
    await sd.cleanAllPlatforms();
    await sd.buildAllPlatforms();
    createIndexCssFile({
      buildDir,
      isThemeVariant: !!isThemeVariant,
      themeVariant,
    });
  }));
}

module.exports = buildTokensCommand;
