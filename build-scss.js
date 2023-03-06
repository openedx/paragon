const path = require('path');
const sass = require('sass');
const fs = require('fs');
const { pathToFileURL } = require('url');

const compileStyleSheets = (path, output) => {
  return sass.compile(path, {
    style: output,
    sourceMap: true,
    sourceMapIncludeSources: true,
    importers: [{
      // An importer that redirects relative URLs starting with '~' to 'node_modules'.
      findFileUrl(url) {
        if (!url.startsWith('~')) return null;
        return new URL(url.substring(1), `${pathToFileURL('node_modules')}/node_modules`);
      }
    }]
  });
}

const compileAndWriteCSSFiles = (endPath, initialPath, outputFormat = 'expanded') => {
  if (!endPath.endsWith('map')) {
    return fs.writeFileSync(endPath, compileStyleSheets(initialPath, outputFormat).css);
  }

  return fs.writeFileSync(endPath, JSON.stringify(compileStyleSheets(initialPath).sourceMap));
}

const buildCSSExpandedFile = (fileName, filePath) => {
  return compileAndWriteCSSFiles(`./dist/${fileName}.css`, filePath);
};

const buildCSSMinifiedFile = (fileName, filePath) => {
  return compileAndWriteCSSFiles(`./dist/${fileName}.min.css`, filePath, 'compressed');
};

const buildCSSSourceMapFile = (fileName, filePath) => {
  return compileAndWriteCSSFiles(`./dist/${fileName}.css.map`, filePath);
};

const PATH_TO_CORE_SCSS = './scss/core/core.scss';

buildCSSExpandedFile('core', PATH_TO_CORE_SCSS);
buildCSSMinifiedFile('core', PATH_TO_CORE_SCSS);
buildCSSSourceMapFile('core', PATH_TO_CORE_SCSS);

const compileThemeStyleSheets = (themeVariant) => {
  const PATH_TO_VARIABLES = `./css/${themeVariant}/variables.css`;
  const PATH_TO_UTILITY_CLASSES = `./css/${themeVariant}/utility-classes.css`;
  
  buildCSSExpandedFile(themeVariant, PATH_TO_VARIABLES);
  buildCSSExpandedFile(themeVariant, PATH_TO_VARIABLES);

  buildCSSMinifiedFile(themeVariant, PATH_TO_UTILITY_CLASSES);
  buildCSSMinifiedFile(themeVariant, PATH_TO_UTILITY_CLASSES);

  buildCSSSourceMapFile(themeVariant, `./dist/${themeVariant}.min.css`);
};

const THEME_VARIANTS = ['light'];
THEME_VARIANTS.forEach(themeVariant => compileThemeStyleSheets(themeVariant));
