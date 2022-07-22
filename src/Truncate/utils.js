const LINE_HEIGHT_VALUE = 40;
const CROP_DECREMENT_STEP = 0.01;

const createCopyElement = (element) => {
  const newElement = document.createElement(element.tagName);
  newElement.setAttribute(
    'style',
    `line-height: ${LINE_HEIGHT_VALUE}px; display: inline-block;`,
  );
  return newElement;
};

const constructString = (text, whiteSpace, ellipsis) => {
  const spacer = whiteSpace ? ' ' : '';
  return `${text.trim()}${spacer}${ellipsis}`;
};

const cropText = (text, cropDecrement) => {
  const sliceIndex = Math.floor(text.length * cropDecrement);
  return text.slice(0, sliceIndex);
};

const truncateLines = (text, element, { lines, whiteSpace, ellipsis }) => {
  const visibilityArea = LINE_HEIGHT_VALUE * Number(lines);
  const newElement = createCopyElement(element);
  let truncateText = text;
  let cropDecrement = 1;

  element.append(newElement);
  newElement.innerHTML = constructString(text, whiteSpace, ellipsis);

  let newElementTextHeight = newElement.scrollHeight;

  if (visibilityArea > newElementTextHeight) {
    newElement.parentNode.removeChild(newElement);
    return truncateText;
  }

  while (newElementTextHeight > visibilityArea) {
    cropDecrement -= CROP_DECREMENT_STEP;
    truncateText = cropText(text, cropDecrement);
    newElement.innerHTML = constructString(truncateText, whiteSpace, ellipsis);
    newElementTextHeight = newElement.scrollHeight;
  }

  newElement.parentNode.removeChild(newElement);
  return constructString(truncateText, whiteSpace, ellipsis);
};

module.exports = {
  cropText,
  truncateLines,
  constructString,
  createCopyElement,
};
