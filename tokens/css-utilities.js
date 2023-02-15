/**
 * Implements bg-variant mixin from bootstrap. Creates utility classes for background colors based on theme color.
 */
function bgVariant(token) {
  const { attributes: { type, item } } = token;
  const parent = `.bg-${type}${item === 'base' ? '' : `-${item}`}`;
  const action = token.name.replace(type, `action-default-${type}`);
  return `${parent} {
  background-color: ${`var(--${token.name})`} !important;
}

a${parent}:hover,
a${parent}:focus,
button${parent}:hover,
button${parent}:focus {
  background-color: ${`var(--${action})`}  !important;
}

`;
}

/**
 * Implements text-emphasis-variant mixin from bootstrap. Creates utility classes for text colors based on theme color.
 */
function textEmphasisVariant(token) {
  const { attributes: { type, item } } = token;
  const parent = `.text-${type}${item === 'base' ? '' : `-${item}`}`;
  const action = token.name.replace(type, `action-default-${type}`);
  return `${parent} {
  color: ${`var(--${token.name})`} !important;
}

a${parent}:hover,
a${parent}:focus {
  color: ${`var(--${action})`} !important;
}

`;
}

/**
 * Creates utility class for border color.
 */
function borderColor(token) {
  const { attributes: { type, item } } = token;
  const className = `.border-${type}${item === 'base' ? '' : `-${item}`}`;
  return `${className} {
  border-color: ${`var(--${token.name})`} !important;
}

`;
}

module.exports = {
  bgVariant,
  textEmphasisVariant,
  borderColor,
};
