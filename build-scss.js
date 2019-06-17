var path = require('path');
var sass = require('node-sass');
var fs = require('fs');


// Resolve tildas the way webpack does
var tildaImporter = function(url, prev, done) {
  if (url[0] === '~') {
    url = path.resolve('node_modules', url.substr(1));
  }

  return { file: url };
};


// Core paragon style
var coreResult = sass.renderSync({
  file: './scss/core/core.scss',
  outputStyle: 'compressed',
  importer: tildaImporter,
});

fs.writeFileSync('./dist/paragon.css', coreResult.css);


// edX.org theme
var edxResult = sass.renderSync({
  file: './scss/edx/theme.scss',
  outputStyle: 'compressed',
  importer: tildaImporter,
});

fs.writeFileSync('./dist/edx-theme.css', edxResult.css);
