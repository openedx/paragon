#!/usr/bin/env node
const fs = require('fs');
const sass = require('sass');
const postCSS = require('postcss');
const postCSSCustomMedia = require('postcss-custom-media');
const postCSSImport = require('postcss-import');
const postCSSMinify = require('postcss-minify');
const combineSelectors = require('postcss-combine-duplicated-selectors');
const { pathToFileURL } = require('url');
const path = require('path');
const { program, Option } = require('commander');

const paragonThemeOutputFilename = 'paragon-theme.json';

const updateParagonConfig = ({
  isThemeVariant,
  paragonConfig,
  name,
}) => {
  if (isThemeVariant) {
    paragonConfig.themeUrls.variants = {
      ...paragonConfig.themeUrls.variants,
      [name]: {
        default: `./${name}.css`,
        minified: `./${name}.min.css`,
      },
    };
  } else {
    paragonConfig.themeUrls[name] = {
      default: `./${name}.css`,
      minified: `./${name}.min.css`,
    };
  }
  return paragonConfig;
};

/**
 * Compiles SCSS file with sass and transforms resulting file with PostCSS:
 * 1. Resulting CSS file
 * 2. Map file
 * 3. Minified version of resulting CSS file
 *
 * @param {string} name - base name of the resulting files
 * @param {string} stylesPath - path to the stylesheet to be compiled
 * @param {string} outDir - indicates where to output compiled files
 * @param {boolean} isThemeVariant - indicates whether the stylesheet is a theme variant
 */
const compileAndWriteStyleSheets = ({
  name,
  stylesPath,
  outDir,
  isThemeVariant = false,
}) => {
  const compiledStyleSheet = sass.compile(stylesPath, {
    importers: [{
      // An importer that redirects relative URLs starting with '~' to 'node_modules'.
      findFileUrl(url) {
        if (!url.startsWith('~')) {
          return null;
        }
        return new URL(url.substring(1), `${pathToFileURL('node_modules')}/node_modules`);
      },
    }],
  });
  const commonPostCssPlugins = [
    postCSSCustomMedia({ preserve: true }),
    postCSSImport(),
    combineSelectors({ removeDuplicatedProperties: true }),
  ];

  postCSS(commonPostCssPlugins)
    .process(compiledStyleSheet.css, { from: stylesPath, map: { inline: false } })
    .then(result => {
      fs.writeFileSync(`${outDir}/${name}.css`, result.css);
      fs.writeFileSync(`${outDir}/${name}.css.map`, result.map.toString());

      const hasExistingParagonConfig = fs.existsSync(`${outDir}/${paragonThemeOutputFilename}`);
      let paragonConfig;
      if (!hasExistingParagonConfig) {
        const initialConfigOutput = { themeUrls: {} };
        paragonConfig = updateParagonConfig({
          isThemeVariant,
          paragonConfig: initialConfigOutput,
          name,
        });
      } else {
        const existingParagonConfigRaw = fs.readFileSync(`${outDir}/${paragonThemeOutputFilename}`, 'utf8');
        const existingParagonConfig = JSON.parse(existingParagonConfigRaw);
        paragonConfig = updateParagonConfig({
          isThemeVariant,
          paragonConfig: existingParagonConfig,
          name,
        });
      }
      fs.writeFileSync(`${outDir}/${paragonThemeOutputFilename}`, `${JSON.stringify(paragonConfig, null, 2)}\n`);
    });

  postCSS([
    ...commonPostCssPlugins,
    postCSSMinify(),
  ])
    .process(compiledStyleSheet.css, { from: stylesPath, map: { inline: false } })
    .then(result => {
      fs.writeFileSync(`${outDir}/${name}.min.css`, result.css);
    });
};

program
  .version('0.0.1')
  .description('CLI to compile Paragon\'s core and themes\' SCSS into CSS.')
  .addOption(
    new Option(
      '--corePath <corePath>',
      'Path to the theme\'s core SCSS file, defaults to Paragon\'s core.scss.',
    ),
  )
  .addOption(
    new Option(
      '--themesPath <themesPath>',
      `Path to the directory that contains themes' files. Expects directory to have following structure:
      themes/ 
        light/
        │  ├─ index.css
        │  ├─ other_css_files
        dark/
        │  ├─ index.css
        │  ├─ other_css_files
        some_other_custom_theme/
        │  ├─ index.css
        │  ├─ other_css_files
        ...
      
      where index.css has imported all other CSS files in the theme's subdirectory. The script will output
      light.css, dark.css and some_other_custom_theme.css files (together with maps and minified versions).
      You can provide any amount of themes. Default to paragon's themes.
      `,
    ),
  )
  .addOption(
    new Option(
      '--outDir <outDir>',
      'Specifies directory where to out resulting CSS files.',
    ),
  )
  .action(async (options) => {
    const {
      corePath = path.resolve(__dirname, 'styles/scss/core/core.scss'),
      themesPath = path.resolve(__dirname, 'styles/css/themes'),
      outDir = './dist',
    } = options;
    compileAndWriteStyleSheets({
      name: 'core',
      stylesPath: corePath,
      outDir,
    });
    fs.readdirSync(themesPath, { withFileTypes: true })
      .filter((item) => item.isDirectory())
      .forEach((themeDir) => {
        compileAndWriteStyleSheets({
          name: themeDir.name,
          stylesPath: `${themesPath}/${themeDir.name}/index.css`,
          outDir,
          isThemeVariant: true,
        });
      });
  });

program.parse(process.argv);
