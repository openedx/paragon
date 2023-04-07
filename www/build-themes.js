const path = require('path');
const sass = require('sass');
const fs = require('fs');
const { THEMES } = require('./theme-config');

const importer = function importer(url) {
  let file = url;
  // correctly resolve core Paragon's scss
  if (url.startsWith('~paragon-style')) {
    file = path.resolve(__dirname, '../styles', url.substr('~paragon-style/'.length));
  } else if (url[0] === '~') {
    file = path.resolve(__dirname, '../node_modules', url.substr(1));
  }

  return { file };
};

if (!fs.existsSync('./public/static')) {
  fs.mkdirSync('./public/static', { recursive: true });
}

// compile SASS stylesheet to CSS for each theme in the config
// complied CSS files will be stored in ./public/static/ directory
THEMES.forEach(theme => {
  const result = sass.renderSync({
    file: `./src/scss/${theme.stylesheet}.scss`,
    outputStyle: 'compressed',
    importer,
    quietDeps: true,
  });

  fs.writeFileSync(`./public/static/${theme.stylesheet}.css`, result.css);
});
