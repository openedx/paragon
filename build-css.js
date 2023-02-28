const sass = require('sass');
const fs = require('fs');
const tildaImporter = require('./build-scss');

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

const THEME_VARIANT = ['light'];
THEME_VARIANT.forEach(themeVariant => compileThemeStyleSheets(themeVariant));
