const LINE_HEIGHT_VALUE = 200;
const MAX_WIDTH = 1500;
const DEFAULT_PADDING_VALUE = 0;
const EXTRA_SMALL_OFFSET = 0.011;
const SMALL_OFFSET = 0.018;
const START_INDEX = 0;
const RIGHT_OFFSET = 0.35;

const createTextClamp = (text, coefficient) => {
  const sliceIndex = Math.floor(text.length * coefficient);
  return text.slice(START_INDEX, sliceIndex);
};

const createCopyElement = (sourceElement, sourceElementStyles) => {
  const newElement = document.createElement(sourceElement.tagName);
  const sourceStyles = window.getComputedStyle(sourceElement);
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

const calcLineHeightRightOffset = (lineHeight, ellipsisHeight) => {
  const lineHeightDecrement = (lineHeight / ellipsisHeight) + RIGHT_OFFSET;
  return Math.ceil(lineHeightDecrement);
};

const calcEllipsisElementHeight = (ellipsisElement) => Math.ceil(ellipsisElement.scrollHeight);

const clampLines = (text, element, { lines, whiteSpace, ellipsis }) => {
  const maxHeight = LINE_HEIGHT_VALUE * Number(lines);
  const ellipsisElement = createCopyElement(element, {
    lineHeight: `${LINE_HEIGHT_VALUE}px`,
    height: 'auto',
    position: 'absolute',
    opacity: '0',
    left: '-1px',
    width: '100%',
    paddingTop: DEFAULT_PADDING_VALUE,
    paddingBottom: DEFAULT_PADDING_VALUE,
  });
  let clampedText = text;

  element.appendChild(ellipsisElement);
  ellipsisElement.innerHTML = constructString(clampedText, whiteSpace, ellipsis);

  let ellipsisElementHeight = calcEllipsisElementHeight(ellipsisElement);

  if (ellipsisElementHeight <= maxHeight) {
    ellipsisElement.parentNode.removeChild(ellipsisElement);
    return clampedText;
  }

  let rightOffset = calcLineHeightRightOffset(maxHeight, ellipsisElementHeight);

  while (ellipsisElementHeight > maxHeight && clampedText.length) {
    clampedText = createTextClamp(text, rightOffset);
    ellipsisElement.innerHTML = constructString(clampedText, whiteSpace, ellipsis);
    ellipsisElementHeight = calcEllipsisElementHeight(ellipsisElement);
    rightOffset -= text.length > MAX_WIDTH ? EXTRA_SMALL_OFFSET : SMALL_OFFSET;
  }

  ellipsisElement.parentNode.removeChild(ellipsisElement);
  return constructString(clampedText, whiteSpace, ellipsis);
};

module.exports = {
  calcLineHeightRightOffset,
  calcEllipsisElementHeight,
  createTextClamp,
  clampLines,
  createCopyElement,
  constructString,
};
