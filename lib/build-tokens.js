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

  if (themes !== null && allThemes) {
    throw Error('Cannot specify themes with `--themes` when using `--all-themes`.');
  }
  let themesToProcess = null;

  const tokensPath = tokensSource || path.resolve(__dirname, '../tokens/src');

  if (allThemes) {
    themesToProcess = fs
      .readdirSync(`${tokensPath}/themes/`, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name);
  } else if (Array.isArray(themes)) {
    themesToProcess = themes;
  } else {
    themesToProcess = (themes || 'light').split(',').map(t => t.trim());
  }

  // Discover app token directories. Skip silently if `apps/` is absent.
  const appsPath = path.join(tokensPath, 'apps');
  const appsToProcess = fs.existsSync(appsPath)
    ? fs
      .readdirSync(appsPath, { withFileTypes: true })
      .filter(entry => entry.isDirectory())
      .map(entry => entry.name)
    : [];

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

  // Per-app style-dictionary config. Outputs the app's own tokens unprefixed
  // (`prefix: ''`) into `apps/<appName>/variables.css`. References to
  // include'd Paragon core/theme tokens emit `var(--pgn-…)` thanks to the
  // `paragon-css-app` transform group's conditional name transform.
  //
  // `themes/light/**` is included purely for reference vocabulary — app
  // tokens reference paths like `{color.gray.500}` that live in theme files,
  // and the build needs those paths in scope to resolve refs. The actual
  // values are filtered out of the output. Light is hardcoded because it's
  // the only theme Paragon ships and the schema is the same across variants.
  // See https://github.com/openedx/paragon/issues/4275 for a proposed split
  // that would let us reference a theme-invariant schema directly.
  const getAppStyleDictionaryConfig = (appName) => ({
    ...coreConfig,
    include: [
      ...coreConfig.include,
      path.resolve(__dirname, '../tokens/src/themes/light/**/*.json'),
      path.resolve(__dirname, '../tokens/src/themes/light/**/*.toml'),
    ],
    source: [
      `${tokensPath}/apps/${appName}/**/*.json`,
      `${tokensPath}/apps/${appName}/**/*.toml`,
    ],
    platforms: {
      css: {
        ...coreConfig.platforms.css,
        prefix: '',
        transformGroup: 'paragon-css-app',
        files: [
          {
            format: 'css/custom-variables',
            destination: `apps/${appName}/variables.css`,
            // Inline filter — strict source-only, distinct from the
            // registered `isSource` filter (which also pulls in Paragon
            // tokens marked as referenced by source). For apps we want refs
            // to Paragon tokens to stay as `var(--pgn-…)` and resolve at
            // runtime against Paragon's separately-loaded CSS.
            filter: (token) => token.isSource,
            options: { outputReferences: true },
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

  //  Add app configs (one per discovered app)
  appsToProcess.forEach(appName => {
    configs.push({ config: getAppStyleDictionaryConfig(appName), isApp: true });
  });

  // Phase 1: build all token configs (core, themes, apps) in parallel.
  await Promise.all(configs.map(async ({ config }) => {
    const sd = new StyleDictionary(config);
    await sd.cleanAllPlatforms();
    await sd.buildAllPlatforms();
  }));

  // Phase 2: create index.css for core + each theme variant. Apps don't get
  // their own index — their variables.css is consumed via @import from each
  // theme variant's index.css (added by createIndexCssFile when apps exist).
  configs.forEach(({ themeVariant, isApp }) => {
    if (isApp) { return; }
    createIndexCssFile({
      buildDir,
      isThemeVariant: !!themeVariant,
      themeVariant,
    });
  });
}

module.exports = buildTokensCommand;
