const createTextClamp = (text, coefficient) => {
  const sliceIndex = Math.floor(text.length * coefficient);
  return text.slice(0, sliceIndex);
};

const createCopyElement = (source, styles) => {
  const newElement = document.createElement(source.tagName);
  const sourceStyles = window.getComputedStyle(source);
  newElement.style.cssText = sourceStyles.cssText;
  newElement.style.maxWidth = sourceStyles.width;

  // eslint-disable-next-line no-restricted-syntax
  for (const property in styles) {
    if (styles) {
      newElement.style[property] = styles[property];
    }
  }

  return newElement;
};

const constructString = (string, whiteSpace, ellipsis) => {
  if (string === '') {
    return '';
  }
  let space = '';
  if (whiteSpace) {
    space = ' ';
  }
  return `${string.trim()}${space}${ellipsis}`;
};

const clampLines = (text, element, { lines, whiteSpace, ellipsis }) => {
  const lineHeightValue = 200;
  const maxHeight = lineHeightValue * Number(lines);
  const maxWidth = 1500;
  const DEFAULT_PADDING_VALUE = 0;
  const ellipsisElement = createCopyElement(element, {
    lineHeight: `${lineHeightValue}px`,
    height: 'auto',
    position: 'absolute',
    opacity: '0',
    left: '-1px',
    width: `${element.scrollWidth - 1}px`,
    paddingTop: DEFAULT_PADDING_VALUE,
    paddingBottom: DEFAULT_PADDING_VALUE,
  });

  element.appendChild(ellipsisElement);

  let clampedText = text;
  ellipsisElement.innerHTML = constructString(clampedText, whiteSpace, ellipsis);

  let ellipsisElementHeight = Math.ceil(ellipsisElement.scrollHeight) - 1;
  if (ellipsisElementHeight <= maxHeight) {
    ellipsisElement.parentNode.removeChild(ellipsisElement);

    return clampedText;
  }

  let decrementCoefficient = (maxHeight / ellipsisElementHeight) + 0.35;

  while (ellipsisElementHeight > maxHeight && clampedText.length) {
    clampedText = createTextClamp(text, decrementCoefficient);
    ellipsisElement.innerHTML = constructString(clampedText, whiteSpace, ellipsis);
    ellipsisElementHeight = Math.ceil(ellipsisElement.scrollHeight) - 1;
    decrementCoefficient -= text.length > maxWidth ? 0.011 : 0.018;
  }

  ellipsisElement.parentNode.removeChild(ellipsisElement);
  return constructString(clampedText, whiteSpace, ellipsis);
};

module.exports = {
  createTextClamp,
  clampLines,
  createCopyElement,
  constructString,
};
