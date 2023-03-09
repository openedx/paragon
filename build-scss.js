const fs = require('fs');
const sass = require('sass');
const postCSS = require('postcss');
const postCSSCustomMedia = require('postcss-custom-media');
const postCSSImport = require('postcss-import');
const postCSSMinify = require('postcss-minify');
const { pathToFileURL } = require('url');

/**
 * The function that compiles SCSS files
 * and writes CSS output in the `dist` directory.
 *
 * @param {string} name - name to the stylesheet
 * @param {string} path - path to the stylesheet
 */
const compileAndWriteStyleSheets = (name, path) => {
    const compiledStyleSheet =  sass.compile(path, {
        importers: [{
            // An importer that redirects relative URLs starting with '~' to 'node_modules'.
            findFileUrl(url) {
                if (!url.startsWith('~')) return null;
                return new URL(url.substring(1), `${pathToFileURL('node_modules')}/node_modules`);
            }
        }]
    });

    convertAndWriteCSSWithPostCSS(name, path, compiledStyleSheet);
}

/**
 * Converted media queries with CSS custom variables,
 * minified the output CSS file and created a CSS source map.
 *
 * @param {string} name - name to the stylesheet
 * @param {string} path - path to the stylesheet
 * @param {Object} source - compiled stylesheet object
 */
const convertAndWriteCSSWithPostCSS = (name, path, source) => {
    postCSS([postCSSCustomMedia(), postCSSImport()])
        .process(source.css, { from: path })
        .then(outputStyleSheet => fs.writeFileSync(`./dist/${name}.css`, outputStyleSheet.css));

    postCSS([postCSSCustomMedia(), postCSSImport(), postCSSMinify()])
        .process(source.css, { from: path })
        .then(outputStyleSheet => fs.writeFileSync(`./dist/${name}.min.css`, outputStyleSheet.css));

    postCSS([postCSSCustomMedia(), postCSSImport()])
        .process(source.css, { from: path, map: { inline: false } })
        .then(outputStyleSheet => fs.writeFileSync(`./dist/${name}.css.map`, JSON.stringify(outputStyleSheet.map)));
}

const compileThemeStyleSheets = (themeVariant) => {
    compileAndWriteStyleSheets(themeVariant, `./css/${themeVariant}/${themeVariant}.css`);
};

compileAndWriteStyleSheets('core', './scss/core/core.scss');

const THEME_VARIANTS = ['light'];
THEME_VARIANTS.forEach(themeVariant => compileThemeStyleSheets(themeVariant));
