const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const {
  initializeStyleDictionary,
  getTokensStudioTransforms,
  colorTransform,
} = require('../tokens/style-dictionary');
const { createIndexCssFile } = require('../tokens/utils');

/**
 * Builds tokens for CSS styles from JSON source files.
 *
 * @param {string[]} commandArgs - Command line arguments for building tokens.
 * @param {string} [commandArgs.build-dir='./build/'] - The directory where the build output will be placed.
 * @param {string} [commandArgs.source] - The source directory containing JSON token files.
 * @param {string} [commandArgs.base-paragon-theme] - The base theme to use from Paragon if named differently than
 *                                                    the theme.
 * @param {boolean} [commandArgs.source-tokens-only=false] - Indicates whether to include only source tokens.
 * @param {string|string[]} [commandArgs.themes=['light']] - The themes (variants) for which to build tokens.
 * @param {boolean} [commandArgs.all-themes] - Indicated whether to process all themes.
 */
async function buildTokensCommand(commandArgs) {
  const defaultParams = {
    themes: null,
    'base-paragon-theme': null,
    'build-dir': './build/',
    'source-tokens-only': false,
    'output-references': true,
    'exclude-core': false,
    verbose: false,
    'all-themes': false,
  };

  const alias = {
    'build-dir': 'b',
    themes: 't',
    verbose: '-v',
  };

  const {
    'build-dir': buildDir,
    source: tokensSource,
    'source-tokens-only': transformSourceTokensOnly,
    'output-references': outputReferences,
    themes,
    verbose,
    'base-paragon-theme': baseParagonTheme,
    'all-themes': allThemes,
    'exclude-core': excludeCore,
  } = minimist(
    commandArgs,
    {
      alias,
      default: defaultParams,
      boolean: ['source-tokens-only', 'output-references', 'exclude-core', 'verbose', 'all-themes'],
    },
  );

  // console.log('tokensSource ======>', tokensSource);

  if (themes !== null && allThemes) {
    throw Error('Cannot specify themes with `--themes` when using `--all-themes`.');
  }
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
    themesToProcess = (themes || 'light').split(',').map(t => t.trim());
  }

  const StyleDictionary = await initializeStyleDictionary({ themes: themesToProcess });

  const coreConfig = {
    include: [
      path.resolve(__dirname, '../tokens/src/core/**/*.json'),
      path.resolve(__dirname, '../tokens/src/core/**/*.toml'),
    ],
    source: tokensSource
      ? [`${tokensSource}/core/**/*.json`, `${tokensSource}/core/**/*.toml`]
      : [],
    parsers: ['toml-parser'],
    preprocessors: ['pgn-annotate-token-extensions-with-references', 'tokens-studio'],
    expand: {
      typesMap: (await getTokensStudioTransforms()).expandTypesMap,
    },
    platforms: {
      css: {
        prefix: 'pgn',
        transformGroup: 'paragon-css',
        // NOTE: buildPath must end with a slash
        buildPath: buildDir.slice(-1) === '/' ? buildDir : `${buildDir}/`,
        options: {
          fileHeader: 'customFileHeader',
        },
        files: [
          {
            format: 'css/custom-variables',
            destination: 'core/variables.css',
            filter: transformSourceTokensOnly ? 'isSource' : undefined,
            options: {
              outputReferences,
            },
          },
          {
            format: 'css/custom-media-breakpoints',
            destination: 'core/custom-media-breakpoints.css',
            filter: transformSourceTokensOnly ? 'isSource' : undefined,
            options: {
              outputReferences,
            },
          },
        ],
      },
    },
    log: {
      verbosity: verbose ? 'verbose' : 'default',
    },
  };

  const getStyleDictionaryConfig = (themeVariant, baseThemeVariant) => ({
    ...coreConfig,
    include: [
      ...coreConfig.include,
      path.resolve(__dirname, `../tokens/src/themes/${baseThemeVariant}/**/*.json`),
      path.resolve(__dirname, `../tokens/src/themes/${baseThemeVariant}/**/*.toml`),
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
            filter: transformSourceTokensOnly
              ? `isSource.${themeVariant}`
              : `isThemeVariant.${themeVariant}`,
            options: {
              outputReferences,
            },
          },
          {
            format: 'css/utility-classes',
            destination: `themes/${themeVariant}/utility-classes.css`,
            filter: transformSourceTokensOnly ? 'isSource' : undefined,
            options: {
              outputReferences,
            },
          },
          {
            format: 'css/component-button-variant-overrides',
            destination: `themes/${themeVariant}/overrides/component-button-variants.css`,
          },
        ],
      },
    },
  });

  // Create list of style-dictionary configurations to build
  const configs = [];

  //  Add core if it isn't excluded
  if (!excludeCore) {
    configs.push({ config: coreConfig });
  }

  //  Add theme variants
  themesToProcess.forEach(themeVariant => {
    const config = getStyleDictionaryConfig(themeVariant, baseParagonTheme || themeVariant);
    configs.push({ config, themeVariant });
  });

  // Build tokens for each configuration
  await Promise.all(configs.map(async ({ config, themeVariant }) => {
    const sd = new StyleDictionary(config);
    await sd.cleanAllPlatforms();
    await sd.buildAllPlatforms();
    createIndexCssFile({
      buildDir,
      isThemeVariant: !!themeVariant,
      themeVariant,
    });
  }));
}

module.exports = buildTokensCommand;
