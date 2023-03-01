const path = require('path');
const sass = require('sass');
const fs = require('fs');

// Resolve tildas the way webpack does
var tildaImporter = function(url, prev, done) {
  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }

  return { file: url };
};

const compileStyleSheets = (path, output = 'expanded') => {
  return sass.renderSync({
    file: path,
    outputStyle: output,
    importer: tildaImporter,
  });
};

fs.writeFileSync(
    './dist/core.css',
    compileStyleSheets('./scss/core/core.scss').css
);

fs.writeFileSync(
    './dist/core.min.css',
    compileStyleSheets('./scss/core/core.scss', 'compressed').css
);

const compileThemeStyleSheets = (themeVariant) => {
  fs.writeFileSync(
      `./dist/${themeVariant}.css`,
      compileStyleSheets(`./scss/core/css/${themeVariant}/variables.css`).css
  );
  fs.writeFileSync(
      `./dist/${themeVariant}.min.css`,
      compileStyleSheets(`./scss/core/css/${themeVariant}/variables.css`, 'compressed').css
  );
};

const THEME_VARIANTS = ['light'];
THEME_VARIANTS.forEach(themeVariant => compileThemeStyleSheets(themeVariant));

