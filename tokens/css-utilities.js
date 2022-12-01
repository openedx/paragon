const chroma = require('chroma-js');
const { darken } = require('./sass-helpers');

/**
 * Implements bg-variant mixin from bootstrap. Creates utility classes for background colors based on theme color.
 */
function bgVariant(token) {
  const { attributes: { type, item }, value } = token;
  const parent = `.bg-${type}${item === 'base' ? '' : `-${item}`}`;
  return `${parent} {
  background-color: ${value} !important;
}

a${parent}:hover,
a${parent}:focus,
button${parent}:hover,
button${parent}:focus {
  background-color: ${darken(chroma(value), 0.1).hex('rgba').toUpperCase()} !important;
}

`;
}

/**
 * Implements text-emphasis-variant mixin from bootstrap. Creates utility classes for text colors based on theme color.
 */
function textEmphasisVariant(token) {
  const { attributes: { type, item }, value } = token;
  const parent = `.text-${type}${item === 'base' ? '' : `-${item}`}`;
  return `${parent} {
  color: ${value} !important;
}

a${parent}:hover,
a${parent}:focus {
  color: ${darken(chroma(value), 0.15).hex('rgba').toUpperCase()} !important;
}

`;
}

/**
 * Creates utility class for border color.
 */
function borderColor(token) {
  const { attributes: { type, item }, value } = token;
  const className = `.border-${type}${item === 'base' ? '' : `-${item}`}`;
  return `${className} {
  border-color: ${value} !important;
}

`;
}

module.exports = {
  bgVariant,
  textEmphasisVariant,
  borderColor,
};
