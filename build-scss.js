const fs = require('fs');
const sass = require('sass');
const postCSS = require('postcss');
const postCSSCustomMedia = require('postcss-custom-media');
const postCSSImport = require('postcss-import');
const postCSSMinify = require('postcss-minify');
const { pathToFileURL } = require('url');

/**
 * Compiles SCSS file with sass and postcss, writes result to 'dist' directory which includes:
 * 1. Resulting CSS file
 * 2. Map file
 * 2. Minified version of resulting CSS file
 *
 * @param {string} name - base of the resulting files
 * @param {string} path - path to the SCSS stylesheet
 */
const compileAndWriteStyleSheets = (name, path) => {
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

  postCSS([postCSSCustomMedia(), postCSSImport()])
    .process(compiledStyleSheet.css, { from: path, map: { inline: false } })
    .then(result => {
      fs.writeFileSync(`./dist/${name}.css`, result.css);
      fs.writeFileSync(`./dist/${name}.css.map`, result.map.toString());
    });

  postCSS([postCSSCustomMedia(), postCSSImport(), postCSSMinify()])
    .process(compiledStyleSheet.css, { from: path })
    .then(result => fs.writeFileSync(`./dist/${name}.min.css`, result.css));
}

const compileThemeStyleSheets = (themeVariant) => {
  compileAndWriteStyleSheets(themeVariant, `./styles/css/${themeVariant}/index.css`);
};

compileAndWriteStyleSheets('core', './styles/scss/core/core.scss');

const THEME_VARIANTS = ['light'];
THEME_VARIANTS.forEach(themeVariant => compileThemeStyleSheets(themeVariant));
