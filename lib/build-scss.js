const fs = require('fs');
const sass = require('sass');
const postCSS = require('postcss');
const postCSSCustomMedia = require('postcss-custom-media');
const postCSSImport = require('postcss-import');
const postCSSMinify = require('postcss-minify');
const combineSelectors = require('postcss-combine-duplicated-selectors');
const { pathToFileURL } = require('url');
const path = require('path');
const minimist = require('minimist');
const chalk = require('chalk');
const ora = require('ora');
const { capitalize } = require('./utils');

const paragonThemeOutputFilename = 'theme-urls.json';

/**
 * Updates `paragonThemeOutput` object with appropriate name and URLs.
 *
 * @param {object} args
 * @param {object} args.paragonThemeOutput Object containing the `themeUrls` pointing
 *  to the core and theme variant CSS files.
 * @param {string} args.name Name of the theme variant.
 * @param {boolean} args.isThemeVariant Indicates whether the stylesheet is a theme variant.
 * @param {boolean} args.isDefaultThemeVariant Indicates whether the stylesheet is a default theme variant.
 *
 * @returns Updated paragonThemeOutput object.
 */
const updateParagonThemeOutput = ({
  paragonThemeOutput,
  name,
  isThemeVariant,
  isDefaultThemeVariant,
}) => {
  const themeOutput = { ...paragonThemeOutput };

  // Check if the theme variant is a default theme variant. If so, add it to `defaults`.
  if (isThemeVariant && isDefaultThemeVariant) {
    if (!themeOutput.themeUrls.defaults) {
      themeOutput.themeUrls.defaults = {};
    }
    themeOutput.themeUrls.defaults[name] = name;
  }

  if (isThemeVariant) {
    themeOutput.themeUrls.variants = {
      ...themeOutput.themeUrls.variants,
      [name]: {
        paths: {
          default: `./${name}.css`,
          minified: `./${name}.min.css`,
        },
      },
    };
  } else {
    themeOutput.themeUrls[name] = {
      paths: {
        default: `./${name}.css`,
        minified: `./${name}.min.css`,
      },
    };
  }

  return themeOutput;
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
 * @param {boolean} isDefaultThemeVariant - indicates whether the stylesheet is a default theme variant
 */
const compileAndWriteStyleSheets = ({
  name,
  stylesPath,
  outDir,
  isThemeVariant = false,
  isDefaultThemeVariant = false,
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

  const postCSSCompilation = ora(`Compilation for ${capitalize(name)} stylesheet...`).start();
  postCSS(commonPostCssPlugins)
    .process(compiledStyleSheet.css, { from: stylesPath, map: false })
    .then((result) => {
      postCSSCompilation.succeed(`Successfully compiled ${capitalize(name)} theme stylesheet`);
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
        });
      } else {
        const existingParagonThemeOutput = JSON.parse(fs.readFileSync(`${outDir}/${paragonThemeOutputFilename}`, 'utf8'));
        paragonThemeOutput = updateParagonThemeOutput({
          paragonThemeOutput: existingParagonThemeOutput,
          name,
          isThemeVariant,
          isDefaultThemeVariant,
        });
      }

      fs.writeFileSync(`${outDir}/${paragonThemeOutputFilename}`, `${JSON.stringify(paragonThemeOutput, null, 2)}\n`);
    })
    .then(() => {
      ora().succeed(chalk.underline.bold.green(`Successfully built stylesheet for ${capitalize(name)} theme!\n`));
    })
    .catch((error) => {
      ora().fail(chalk.bold(`Failed to build stylesheets for ${capitalize(name)}: ${error.message}`));
    });
};

/**
 * Builds SCSS stylesheets based on the provided command arguments.
 *
 * @param {Array<string>} commandArgs - Command line arguments for building SCSS stylesheets.
 */
function buildScssCommand(commandArgs) {
  const defaultArgs = {
    corePath: path.resolve(process.cwd(), 'styles/scss/core/core.scss'),
    themesPath: path.resolve(process.cwd(), 'styles/css/themes'),
    outDir: './dist',
    defaultThemeVariants: 'light',
  };

  const {
    corePath,
    themesPath,
    outDir,
    defaultThemeVariants,
  } = minimist(commandArgs, { default: defaultArgs });

  // Core CSS
  compileAndWriteStyleSheets({
    name: 'core',
    stylesPath: corePath,
    outDir,
  });

  // Theme Variants CSS
  fs.readdirSync(themesPath, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .forEach((themeDir) => {
      compileAndWriteStyleSheets({
        name: themeDir.name,
        stylesPath: `${themesPath}/${themeDir.name}/index.css`,
        outDir,
        isThemeVariant: true,
        isDefaultThemeVariant: defaultThemeVariants.includes(themeDir.name),
      });
    });
}

module.exports = buildScssCommand;
