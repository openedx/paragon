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

const paragonThemeOutputFilename = 'theme-urls.json';

/**
 * Updates `paragonThemeOutput` object with appropriate name and URLs.
 *
 * @param {object} args
 * @param {object} args.paragonThemeOutput Object containing the `themeUrls` pointing
 *  to the core and theme variant CSS files.
 * @param {string} args.name Name of the theme variant.
 * @param {boolean} args.isThemeVariant Indicates whether the stylesheet is a theme variant.
 *
 * @returns Updated paragonThemeOutput object.
 */
const updateParagonThemeOutput = ({
  paragonThemeOutput,
  name,
  isThemeVariant,
  isDefaultThemeVariant,
  isDarkThemeVariant,
}) => {
  if (isThemeVariant) {
    paragonThemeOutput.themeUrls.variants = {
      ...paragonThemeOutput.themeUrls.variants,
      [name]: {
        paths: {
          default: `./${name}.css`,
          minified: `./${name}.min.css`,
        },
        default: isDefaultThemeVariant,
        dark: isDarkThemeVariant,
      },
    };
  } else {
    paragonThemeOutput.themeUrls[name] = {
      paths: {
        default: `./${name}.css`,
        minified: `./${name}.min.css`,
      },
    };
  }
  return paragonThemeOutput;
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
  isDefaultThemeVariant = true,
  isDarkThemeVariant = false,
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
    postCSSImport(),
    postCSSCustomMedia({ preserve: true }),
    combineSelectors({ removeDuplicatedProperties: true }),
  ];

  postCSS(commonPostCssPlugins)
    .process(compiledStyleSheet.css, { from: stylesPath, map: false })
    .then((result) => {
      fs.writeFileSync(`${outDir}/${name}.css`, result.css);

      postCSS([postCSSMinify()])
        .process(result.css, { from: `${name}.css`, map: { inline: false } })
        .then((minifiedResult) => {
          fs.writeFileSync(`${outDir}/${name}.css.map`, minifiedResult.map.toString());
          fs.writeFileSync(`${outDir}/${name}.min.css`, minifiedResult.css);
        });

      const hasExistingParagonThemeOutput = fs.existsSync(`${outDir}/${paragonThemeOutputFilename}`);
      let paragonThemeOutput;
      if (!hasExistingParagonThemeOutput) {
        const initialConfigOutput = { themeUrls: {} };
        paragonThemeOutput = updateParagonThemeOutput({
          paragonThemeOutput: initialConfigOutput,
          name,
          isThemeVariant,
          isDefaultThemeVariant,
          isDarkThemeVariant,
        });
      } else {
        const existingParagonThemeOutput = JSON.parse(fs.readFileSync(`${outDir}/${paragonThemeOutputFilename}`, 'utf8'));
        paragonThemeOutput = updateParagonThemeOutput({
          paragonThemeOutput: existingParagonThemeOutput,
          name,
          isThemeVariant,
          isDefaultThemeVariant,
          isDarkThemeVariant,
        });
      }
      fs.writeFileSync(`${outDir}/${paragonThemeOutputFilename}`, `${JSON.stringify(paragonThemeOutput, null, 2)}\n`);
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
          isDefaultThemeVariant: themeDir.name === 'light',
          // "dark" theme dir does not exist yet, but no harm in having this here
          isDarkThemeVariant: themeDir.name === 'dark',
        });
      });
  });

program.parse(process.argv);
