/**
 * This module creates and exports custom StyleDictionary instance for Paragon.
 */
const StyleDictionary = require('style-dictionary');
const chroma = require('chroma-js');
const { colorYiq, darken, lighten } = require('./sass-helpers');
const cssUtilities = require('./css-utilities');

const { fileHeader, sortByReference } = StyleDictionary.formatHelpers;

const colorTransform = (token, theme) => {
  const {
    name: tokenName,
    value,
    original,
    modify = [],
  } = token;
  const reservedColorValues = ['inherit', 'initial', 'revert', 'unset', 'currentColor'];

  if (reservedColorValues.includes(original.value)) {
    return original.value;
  }

  let color = chroma(value);

  if (modify && modify.length > 0) {
    modify.forEach((modifier) => {
      const { type, amount, otherColor } = modifier;
      switch (type) {
        case 'mix':
          color = color.mix(otherColor, amount, 'rgb');
          break;
        case 'color-yiq': {
          const { light, dark, threshold } = modifier;
          color = colorYiq({
            tokenName,
            originalColor: color,
            light,
            dark,
            threshold,
            theme,
          });
          break;
        }
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
 * Custom formatter that extends default css/variables format to allow specifying
 * 1. 'outputReferences' per token (by default you are only able to specify it globally for all tokens)
 * 2. 'theme' to output only theme's variables (e.g, 'light' or 'dark'), if theme is not provided - only
 * core tokens are built.
 */
const createCustomCSSVariables = (args, theme) => {
  const { dictionary, options, file } = args;

  const outputTokens = theme
    ? dictionary.allTokens.filter(token => token.filePath.includes(theme))
    : dictionary.allTokens;

  const variables = outputTokens.sort(sortByReference(dictionary)).map(token => {
    let { value } = token;

    const outputReferencesForToken = (token.original.outputReferences === false) ? false : options.outputReferences;

    if (dictionary.usesReference(token.original.value) && outputReferencesForToken) {
      const refs = dictionary.getReferences(token.original.value);
      refs.forEach(ref => {
        value = value.replace(ref.value, `var(--${ref.name})`);
      });
    }

    return `  --${token.name}: ${value};`;
  }).join('\n');

  return `${fileHeader({ file })}:root {\n${variables}\n}\n`;
};

/**
 * Transformer that applies SASS color functions to tokens.
 */
StyleDictionary.registerTransform({
  name: 'color/sass-color-functions',
  transitive: true,
  type: 'value',
  matcher(token) {
    return token.attributes.category === 'color' || token.value?.toString().startsWith('#');
  },
  transformer: colorTransform,
});

/**
 * Transforms that implements str-replace from SASS.
 */
StyleDictionary.registerTransform({
  name: 'str-replace',
  transitive: true,
  type: 'value',
  matcher(token) {
    return token.modify && token.modify[0].type === 'str-replace';
  },
  transformer(token) {
    const { value, modify } = token;
    const { toReplace, replaceWith } = modify[0];
    return value.replaceAll(toReplace, replaceWith);
  },
});

/**
 * The custom formatter to create CSS variables for core tokens.
 */
StyleDictionary.registerFormat({
  name: 'css/custom-variables',
  formatter: (args) => createCustomCSSVariables(args),
});

/**
 * Formatter to generate CSS utility classes.
 * Looks in ./src/utilities/ to get utility classes configuration, filters tokens by 'filters' object attributes
 * (see https://amzn.github.io/style-dictionary/#/tokens?id=category-type-item for possible keys in the object,
 * each key should have a list of valid values) and generates CSS classes with using functions defined in
 * 'utilityFunctionsToApply' list, those functions must be located in css-utilities.js module and return string.
 */
StyleDictionary.registerFormat({
  name: 'css/utility-classes',
  formatter({ dictionary, file }) {
    const { utilities } = dictionary.properties;

    if (!utilities) {
      return '';
    }

    let utilityClasses = '';

    utilities.forEach(({ filters, utilityFunctionsToApply }) => {
      let tokens = dictionary.allTokens;

      Object.entries(filters).forEach(([attributeName, allowedValues]) => {
        tokens = tokens.filter((token) => allowedValues.includes(token.attributes[attributeName]));
      });

      // eslint-disable-next-line no-restricted-syntax
      for (const token of tokens) {
        // eslint-disable-next-line no-restricted-syntax
        for (const funcName of utilityFunctionsToApply) {
          utilityClasses += cssUtilities[funcName](token);
        }
      }
    });

    return fileHeader({ file }) + utilityClasses;
  },
});

/**
 * Formatter to generate CSS custom media queries for responsive breakpoints.
 * Gets input about existing tokens of the 'size' category,
 * 'breakpoints' subcategory, and generates a CSS custom media queries.
 */
StyleDictionary.registerFormat({
  name: 'css/custom-media-breakpoints',
  formatter({ dictionary, file }) {
    const { size: { breakpoint } } = dictionary.properties;

    let customMediaVariables = '';
    const breakpoints = Object.values(breakpoint);

    for (let i = 0; i < breakpoints.length; i++) {
      const [currentBreakpoint, nextBreakpoint] = [breakpoints[i], breakpoints[i + 1]];
      customMediaVariables += `@custom-media --min-${currentBreakpoint.name} (min-width: ${currentBreakpoint.value});\n`;
      if (nextBreakpoint) {
        customMediaVariables += `@custom-media --max-${currentBreakpoint.name} (max-width: ${nextBreakpoint.value});\n`;
      }
    }

    return fileHeader({ file }) + customMediaVariables;
  },
});

/**
 * Custom file header for custom and built-in formatters.
 */
StyleDictionary.registerFileHeader({
  name: 'customFileHeader',
  fileHeader: (defaultMessage) => [
    'IMPORTANT: This file is the result of assembling design tokens',
    ...defaultMessage,
  ],
});

module.exports = {
  StyleDictionary,
  createCustomCSSVariables,
  colorTransform,
};
