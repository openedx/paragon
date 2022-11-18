const StyleDictionary = require('style-dictionary');
const path = require('path');
const chroma = require('chroma-js');

const { formattedVariables, fileHeader } = StyleDictionary.formatHelpers;

const PGN_PREFIX = 'pgn';
const BASE_BUILD_PATH = path.resolve(__dirname, 'build');

const colorTransform = (token) => {
  const { value, modify = [], original } = token;

  if (original.value.endsWith('%')) {
    return original.value;
  }

  let color = chroma(value);

  if (modify.length > 0) {
    // iterate over the modify array (see tokens/color.json)
    // and apply each modification in order
    modify.forEach(({ type, amount, otherColor }) => {
      // modifier type must match a method name in chromajs
      // https://gka.github.io/chroma.js/
      // chroma methods can be chained, so each time we override the color variable
      // we can still call other chroma methods, similar to
      // chroma(value).brighten(1).darken(1).hex();
      if (type === 'mix') {
        color = color[type](otherColor, amount, 'rgb');
      } else {
        color = color[type](amount);
      }
    });
  }

  return color.hex('rgba').toUpperCase();
};

/**
 * Transforms color values to be in uppercase format to be compatible with our stylelint rules.
 */
StyleDictionary.registerTransform({
  name: 'color/sass-functions',
  transitive: true,
  type: 'value',
  matcher(token) {
    return token.attributes.category === 'color' || token.value.toString().startsWith('#');
  },
  transformer: colorTransform,
});

/**
 * Overrides default scss/variables formatter to add new line at the end of file
 * to be compatible with our stylelint rules.
 */
StyleDictionary.registerFormat({
  name: 'scss/variables-with-new-line',
  formatter({ dictionary, options, file }) {
    const { outputReferences, themeable = false } = options;
    return `${fileHeader({ file, commentStyle: 'short' })
      + formattedVariables({
        format: 'sass', dictionary, outputReferences, themeable,
      })
    }\n`;
  },
});

const paragonStyleDictionary = StyleDictionary.extend({
  source: ['./source/**/*.json'],
  platforms: {
    scss: {
      transformGroup: 'scss',
      prefix: PGN_PREFIX,
      buildPath: `${BASE_BUILD_PATH}/`,
      files: [{
        destination: '_variables.scss',
        format: 'scss/variables-with-new-line',
        options: {
          outputReferences: true,
        },
      }],
      transforms: StyleDictionary.transformGroup.scss.concat('color/sass-functions'),
      options: {
        showFileHeader: false,
      },
    },
    css: {
      transformGroup: 'css',
      prefix: PGN_PREFIX,
      files: [
        {
          format: 'css/variables',
          destination: `${BASE_BUILD_PATH}/variables.css`,
          options: {
            outputReferences: true,
          },
        },
        {
          format: 'css/variables',
          destination: path.resolve(__dirname, '../scss/core/tokens.css'),
          options: {
            outputReferences: true,
          },
        },
      ],
      transforms: StyleDictionary.transformGroup.css.concat('color/sass-functions'),
      options: {
        showFileHeader: false,
      },
    },
  },
});

paragonStyleDictionary.buildAllPlatforms();
