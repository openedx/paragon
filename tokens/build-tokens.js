const StyleDictionary = require('style-dictionary');
const path = require('path');
const chroma = require('chroma-js');
const { colorYiq, darken, lighten } = require('./color-helpers');

const { formattedVariables, fileHeader } = StyleDictionary.formatHelpers;

const PGN_PREFIX = 'pgn';
const BASE_BUILD_PATH = path.resolve(__dirname, 'build');

const colorTransform = (token) => {
  const { value, modify = [] } = token;
  let color = chroma(value);

  if (modify.length > 0) {
    modify.forEach((modifier) => {
      const {type, amount, otherColor} = modifier;
      switch (type) {
        case 'mix':
          color = color.mix(otherColor, amount, 'rgb');
          break;
        case 'color-yiq':
          const { light, dark, threshold } = modifier;
          color = colorYiq(color, light, dark, threshold);
          break;
        case 'darken':
          color = darken(color, amount);
          break;
        case 'lighten':
          color = lighten(color, amount);
          break;
        default:
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
    return token.attributes.category === 'color' || token.value?.toString().startsWith('#');
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
          themeable: true,
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
