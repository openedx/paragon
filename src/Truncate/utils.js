const createTextClamp = (text, coefficient) => {
  const startIndex = 0;
  const sliceIndex = Math.floor(text.length * coefficient);
  return text.slice(startIndex, sliceIndex);
};

const createCopyElement = (sourceElement, sourceElementStyles) => {
  const newElement = document.createElement(sourceElement.tagName);
  const sourceStyles = window.getComputedStyle(sourceElement);
  console.log('sourceElement', sourceElement);
  newElement.style.cssText = sourceStyles.cssText;
  newElement.style.maxWidth = sourceStyles.width;

  Object.keys(sourceElementStyles).forEach(property => {
    newElement.style[property] = sourceElementStyles[property];
  });

  return newElement;
};

const constructString = (string, whiteSpace, ellipsis) => {
  const spacer = whiteSpace ? ' ' : '';
  return `${string.trim()}${spacer}${ellipsis}`;
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
    width: `${element.scrollWidth}px`,
    paddingTop: DEFAULT_PADDING_VALUE,
    paddingBottom: DEFAULT_PADDING_VALUE,
  });

  element.appendChild(ellipsisElement);

  let clampedText = text;
  ellipsisElement.innerHTML = constructString(clampedText, whiteSpace, ellipsis);

  let ellipsisElementHeight = Math.ceil(ellipsisElement.scrollHeight);
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
