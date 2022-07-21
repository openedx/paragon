const LINE_HEIGHT_VALUE = 40;
const TRIM_COEFFICIENT = 0.01;

const createCopyElement = (element) => {
  const elementStyles = window.getComputedStyle(element);
  const newElement = document.createElement(element.tagName);
  newElement.setAttribute(
    'style',
    `line-height: ${LINE_HEIGHT_VALUE}px; 
    // width: ${elementStyles.width}`,
  );
  return newElement;
};

const constructString = (text, whiteSpace, ellipsis) => {
  const spacer = whiteSpace ? ' ' : '';
  return `${text.trim()}${spacer}${ellipsis}`;
};

const cropText = (text, rightOffset) => {
  const sliceIndex = Math.floor(text.length * rightOffset);
  return text.slice(0, sliceIndex);
};

const truncateLines = (text, element, { lines, whiteSpace, ellipsis }) => {
  const visibilityArea = LINE_HEIGHT_VALUE * Number(lines);
  const newElement = createCopyElement(element);
  let truncateText = text;
  let rightOffset = 1;

  element.append(newElement);
  newElement.innerHTML = constructString(text, whiteSpace, ellipsis);

  let newElementTextHeight = newElement.scrollHeight;

  if (visibilityArea > newElementTextHeight) {
    newElement.parentNode.removeChild(newElement);
    return truncateText;
  }

  while (newElementTextHeight > visibilityArea) {
    rightOffset -= TRIM_COEFFICIENT;
    truncateText = cropText(text, rightOffset);
    newElement.innerHTML = constructString(truncateText, whiteSpace, ellipsis);
    newElementTextHeight = newElement.scrollHeight;
  }

  return constructString(truncateText, whiteSpace, ellipsis);
};

module.exports = {
  cropText,
  truncateLines,
  constructString,
  createCopyElement,
};
