const { compressToEncodedURIComponent, decompressFromEncodedURIComponent } = require('lz-string');

/**
 * @typedef {Object} ThemeState
 * @property {Array<{name: string, urls: string[]}>} themes - Array of theme configurations
 * @property {number} activeIndex - Index of the currently active theme
 * @property {number} builtInCount - How many built-in themes came before `themes` when
 *  `activeIndex` was counted. Links made before this was encoded assume 1.
 */

/**
 * Encodes theme state (themes array + active index) as a highly compressed string for use in a query param.
 * Uses shorthand keys and LZ-String compression.
 *
 * @param {Array<{name: string, urls: string[]}>} themes
 * @param {number} activeIndex
 * @param {number} [builtInCount] - Number of built-in themes `activeIndex` counts before `themes`
 * @returns {string}
 */
function encodeThemesToQueryParam(themes, activeIndex, builtInCount) {
  const shortThemes = themes.map(theme => ({
    n: theme.name,
    u: theme.urls,
  }));

  const shortState = {
    t: shortThemes,
    i: activeIndex,
  };
  if (builtInCount !== undefined) {
    shortState.b = builtInCount;
  }

  const json = JSON.stringify(shortState);
  return compressToEncodedURIComponent(json);
}

/**
 * Decodes a compressed query param value into theme state (themes array + active index).
 * Handles LZ-String decompression and shorthand key expansion.
 *
 * @param {string} encoded
 * @returns {ThemeState}
 */
function decodeThemesFromQueryParam(encoded) {
  try {
    const decompressed = decompressFromEncodedURIComponent(encoded);
    if (!decompressed) {
      return { themes: [], activeIndex: 0, builtInCount: 1 };
    }

    const shortState = JSON.parse(decompressed);
    const fullThemes = (shortState.t || []).map(shortTheme => ({
      name: shortTheme.n,
      urls: shortTheme.u,
    }));

    return {
      themes: fullThemes,
      activeIndex: shortState.i || 0,
      builtInCount: Number.isInteger(shortState.b) ? shortState.b : 1,
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error decoding theme query param:', error);
    return { themes: [], activeIndex: 0, builtInCount: 1 };
  }
}

module.exports = {
  encodeThemesToQueryParam,
  decodeThemesFromQueryParam,
};
