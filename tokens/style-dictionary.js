/**
 * This module creates and exports custom StyleDictionary instance for Paragon.
 */
const toml = require('js-toml');
const chalk = require('chalk');
const chroma = require('chroma-js');
const { colorYiq, darken, lighten } = require('./sass-helpers');
const cssUtilities = require('./css-utilities');
const { composeBreakpointName } = require('./utils');

/* eslint-disable import/no-unresolved */
const getStyleDictionary = async () => (await import('style-dictionary')).default;
const getStyleDictionaryUtils = async () => import('style-dictionary/utils');
/* eslint-enable import/no-unresolved */

/**
 * @typedef {import('style-dictionary/types').DesignToken} DesignToken
 */

/**
 * @typedef ModifyColorYiq
 * @property {'color-yiq'} type - The type of modification.
 * @property {number} [amount] - The amount of modification to apply.
 * @property {string} [otherColor] - The other color to mix with.
 * @property {number} [light] - The light color to use for color-yiq.
 * @property {number} [dark] - The dark color to use for color-yiq.
 * @property {number} [threshold] - The threshold to use for color-yiq.
 */

/**
 * @typedef ModifyColorDarken
 * @property {'darken'} type - The type of modification.
 * @property {number} amount - The amount of modification to apply.
 */

/**
 * @typedef ModifyColorLighten
 * @property {'lighten'} type - The type of modification.
 * @property {number} amount - The amount of modification to apply.
 */

/**
 * @typedef ModifyColorMix
 * @property {'mix'} type - The type of modification.
 * @property {number} amount - The amount of modification to apply.
 * @property {string} otherColor - The other color to mix with.
 */

/**
 * @typedef ModifyColorAlpha
 * @property {'alpha'} type - The type of modification.
 * @property {number} amount - The amount of modification to apply.
 */

/**
 * @typedef DesignTokenModify
 * @type {ModifyColorYiq | ModifyColorDarken | ModifyColorLighten | ModifyColorMix | ModifyColorAlpha}
 */

/**
 * @typedef {DesignToken & {
 *   outputReferences?: boolean;
 *   modify?: DesignTokenModify[];
 * }} ParagonDesignToken
 */

/**
 * Transforms a color token based on various modifications.
 *
 * @param {ParagonDesignToken} token - The token object containing color information and modifications.
 * @param {string} themeVariant - The themeVariant object containing additional information for color transformations.
 * @returns {string} - The transformed color value in hexadecimal format, including alpha if applicable.
 */
const colorTransform = (token, themeVariant) => {
  const {
    name: tokenName,
    $value,
    original,
    modify,
  } = token;
  const reservedColorValues = ['inherit', 'initial', 'revert', 'unset', 'currentColor', 'none'];

  if (reservedColorValues.includes(original.$value)) {
    return original.$value;
  }

  let color = chroma($value);

  if (modify?.length > 0) {
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
            backgroundColor: color,
            light,
            dark,
            threshold,
            themeVariant,
          });
          break;
        }
        case 'darken':
          color = darken(color, amount);
          break;
        case 'lighten':
          color = lighten(color, amount);
          break;
        default: {
          if (!color[type]) {
            // eslint-disable-next-line no-console
            console.warn(
              chalk.keyword('orange').bold(`[Paragon] Warning: Invalid color modification type "${type}" for ${tokenName}.`),
            );
            return;
          }
          color = color[type](amount);
        }
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
const createCustomCSSVariables = async ({ formatterArgs }) => {
  const { fileHeader, formattedVariables } = await getStyleDictionaryUtils();
  const { dictionary, options, file } = formatterArgs;
  const { outputReferences, formatting } = options;
  const variables = formattedVariables({
    format: 'css',
    dictionary,
    outputReferences: (token) => {
      // Formatter options configured to never output references
      if (!outputReferences) {
        return false;
      }
      // Token has modifications (e.g., mix, darken, lighten); the computed
      // value should be output instead of the reference.
      if (token.modify) {
        return false;
      }
      // Formatter options configured to show output references, but handle when individual tokens might opt-out.
      return token.outputReferences ?? true;
    },
    usesDtcg: true,
  });
  const header = await fileHeader({ file, formatting });
  return `${header}:root {\n${variables}\n}\n`;
};

/**
 * @typedef {type import("style-dictionary/types").StyleDictionary} StyleDictionary
 */

/**
 * Initializes and configures Style Dictionary with custom transforms, formatters, filters, and parsers.
 *
 * @returns {Promise<StyleDictionary>} - A promise that resolves to the configured Style Dictionary instance.
 */
const initializeStyleDictionary = async ({ themes }) => {
  const StyleDictionary = await getStyleDictionary();
  const { getReferences } = await getStyleDictionaryUtils();

  /**
   * Transformer that applies SASS color functions to tokens.
   */
  StyleDictionary.registerTransform({
    name: 'color/sass-color-functions',
    transitive: true,
    type: 'value',
    filter: (token) => token.attributes?.category === 'color' || token.$value.toString().startsWith('#'),
    transform: (token) => colorTransform(token),
  });

  /**
   * Transforms that implements str-replace from SASS.
   */
  StyleDictionary.registerTransform({
    name: 'str-replace',
    transitive: true,
    type: 'value',
    filter: (token) => token.modify && token.modify[0].type === 'str-replace',
    transform: (token) => {
      const { $value, modify } = token;
      const { toReplace, replaceWith } = modify[0];
      return $value.replaceAll(toReplace, replaceWith);
    },
  });

  /**
   * The custom formatter to create CSS variables for core tokens.
   */
  StyleDictionary.registerFormat({
    name: 'css/custom-variables',
    format: formatterArgs => createCustomCSSVariables({ formatterArgs }),
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
    format: async ({ dictionary, file, options = {} }) => {
      const { formatting } = options;
      const { fileHeader } = await getStyleDictionaryUtils();
      const { utilities } = dictionary.tokens;
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
          // Get action token by reference
          const ref = getReferences(token.original.actions.default, dictionary.tokens)[0];
          token.actions = { default: `var(--${ref.name})` };
          // eslint-disable-next-line no-restricted-syntax
          for (const funcName of utilityFunctionsToApply) {
            utilityClasses += cssUtilities[funcName](token);
          }
        }
      });
      const header = await fileHeader({ file, formatting });
      return `${header}${utilityClasses}`;
    },
  });

  /**
   * Formatter to generate CSS custom media queries for responsive breakpoints.
   * Gets input about existing tokens of the 'size' category,
   * 'breakpoints' subcategory, and generates a CSS custom media queries.
   */
  StyleDictionary.registerFormat({
    name: 'css/custom-media-breakpoints',
    format: async ({ dictionary, file, options = {} }) => {
      const { fileHeader } = await getStyleDictionaryUtils();
      const { formatting } = options;
      const { breakpoint } = dictionary.tokens.size;

      let customMediaVariables = '';
      const breakpoints = Object.values(breakpoint || {});

      for (let i = 0; i < breakpoints.length; i++) {
        const [currentBreakpoint, nextBreakpoint] = [breakpoints[i], breakpoints[i + 1]];
        customMediaVariables
          += `${composeBreakpointName(currentBreakpoint.name, 'min')} (min-width: ${currentBreakpoint.$value});\n`;
        if (nextBreakpoint) {
          customMediaVariables
            += `${composeBreakpointName(currentBreakpoint.name, 'max')} (max-width: ${nextBreakpoint.$value});\n`;
        }
      }
      const header = await fileHeader({ file, formatting });
      return `${header}${customMediaVariables}`;
    },
  });

  /**
   * @typedef {function} StyleDictionaryFilterFunction
   * @param {import('style-dictionary/types').TransformedToken} token - The token object to filter.
   * @param {object} [opts] - The options object passed to the filter.
   */

  /**
   * @typedef {object} StyleDictionaryFilterOptions
   * @property {boolean} hasThemeVariants - Indicates whether the filter should also be registered with theme variants.
   */

  /**
   * Registers a custom filter with Style Dictionary.
   * @param {string} name Name for the filter.
   * @param {StyleDictionaryFilterFunction} filter Filter value or function.
   * @param {StyleDictionaryFilterOptions} [filterOptions] Custom options for the filter.
   */
  function registerStyleDictionaryFilter(name, filter, filterOptions = {}) {
    StyleDictionary.registerFilter({ name, filter });
    if (filterOptions.hasThemeVariants) {
      themes.forEach((themeVariant) => {
        StyleDictionary.registerFilter({
          name: `${name}.${themeVariant}`,
          filter: (token, opts) => {
            const isThemeVariant = token.filePath.includes(themeVariant);
            const baseFilter = typeof filter === 'function' ? filter(token, opts) : filter;
            return baseFilter && isThemeVariant;
          },
        });
      });
    }
  }

  const paragonFilters = [
    /**
     * Registers a filter `isSource` that filters output to only include source tokens.
     */
    {
      name: 'isSource',
      filter: token => token.isSource,
      opts: { hasThemeVariants: true },
    },
    /**
     * Registers filter(s) `isThemeVariant.{variant}` that only include the requested theme variant tokens.
     */
    ...themes.map((themeVariant) => ({
      name: `isThemeVariant.${themeVariant}`,
      filter: token => token.filePath.includes(themeVariant),
    })),
  ];
  paragonFilters.forEach(({ name, filter, opts }) => registerStyleDictionaryFilter(name, filter, opts));

  themes.forEach((themeVariant) => {
    StyleDictionary.registerFilter({
      name: `isThemeVariant.${themeVariant}`,
      filter: token => token.filePath.includes(themeVariant),
    });
  });

  /**
   * Registers a custom TOML parser with Style Dictionary.
   */
  StyleDictionary.registerParser({
    name: 'toml-parser',
    pattern: /\.toml$/,
    parser: ({ contents }) => toml.load(contents),
  });

  /**
   * Registers a custom fileHeader.
   */
  StyleDictionary.registerFileHeader({
    name: 'customFileHeader',
    fileHeader: (defaultMessage) => [
      `${defaultMessage} while transforming design tokens.`,
      'See <root>/tokens/README.md for more details.',
    ],
  });

  return StyleDictionary;
};

module.exports = {
  initializeStyleDictionary,
  createCustomCSSVariables,
  colorTransform,
  getStyleDictionaryUtils,
};
