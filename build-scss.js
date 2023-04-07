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

/**
 * Compiles SCSS file with sass and transforms resulting file with PostCSS:
 * 1. Resulting CSS file
 * 2. Map file
 * 3. Minified version of resulting CSS file
 *
 * @param {string} name - base name of the resulting files
 * @param {string} path - path to the SCSS stylesheet
 * @param {string} outDir - indicates where to output compiled files
 */
const compileAndWriteStyleSheets = (name, path, outDir) => {
  const compiledStyleSheet = sass.compile(path, {
    importers: [{
      // An importer that redirects relative URLs starting with '~' to 'node_modules'.
      findFileUrl(url) {
        if (!url.startsWith('~')) {
          return null;
        }
        return new URL(url.substring(1), `${pathToFileURL('node_modules')}/node_modules`)
      }
    }]
  });

  postCSS([
    postCSSCustomMedia({ preserve: true }), 
    postCSSImport(), 
    combineSelectors({ removeDuplicatedProperties: true })])
    .process(compiledStyleSheet.css, { from: path, map: { inline: false } })
    .then(result => {
      fs.writeFileSync(`${outDir}/${name}.css`, result.css);
      fs.writeFileSync(`${outDir}/${name}.css.map`, result.map.toString());
    });

  postCSS([
    postCSSCustomMedia({ preserve: true }), 
    postCSSImport(), 
    postCSSMinify(), 
    combineSelectors({ removeDuplicatedProperties: true })])
    .process(compiledStyleSheet.css, { from: path })
    .then(result => fs.writeFileSync(`${outDir}/${name}.min.css`, result.css));
}

program
  .version('0.0.1')
  .description('CLI to compile Paragon\'s core and themes\' SCSS into CSS.')
  .addOption(
    new Option(
      '--corePath <corePath>',
      'Path to the theme\'s core SCSS file, defaults to Paragon\'s core.scss.')
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
      `
    ))
  .addOption(
    new Option(
      '--outDir <outDir>',
      'Specifies directory where to out resulting CSS files.'
    )
  )
  .action(async (options) => {
    const {
      corePath = path.resolve(__dirname, 'styles/scss/core/core.scss'),
      themesPath = path.resolve(__dirname, 'styles/css/themes'),
      outDir = './dist'
    } = options;
    compileAndWriteStyleSheets('core', corePath, outDir);
    fs.readdirSync(themesPath, { withFileTypes: true })
      .filter((item) => item.isDirectory())
      .forEach((themeDir) => compileAndWriteStyleSheets(themeDir.name, `${themesPath}/${themeDir.name}/index.css`, outDir))
  });

program.parse(process.argv);
