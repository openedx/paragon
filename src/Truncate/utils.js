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

const constructString = (text, whiteSpace, ellipsis, childrenData = []) => {
  const spacer = whiteSpace ? ' ' : '';
  if (childrenData.length) {
    const newChildren = [];
    childrenData.forEach((el, index) => {
      let content = text.slice(el.start, el.end);
      if (index === childrenData.length - 1) {
        content = content.trim();
      }
      if (el.type) {
        const element = document.createElement(el.type);
        element.appendChild(document.createTextNode(content));
        Object.keys(el.props || {}).forEach(prop => {
          if (prop === 'children') {
            return;
          }
          element.setAttribute(prop, el.props[prop]);
        });
        newChildren.push(element);
        return;
      }
      newChildren.push(document.createTextNode(content));
    });
    newChildren.push(document.createTextNode(`${spacer}${ellipsis}`));
    return newChildren;
  }
  return [document.createTextNode(`${text.trim()}${spacer}${ellipsis}`)];
};

const cropText = (text, cropDecrement) => {
  const sliceIndex = Math.floor(text.length * cropDecrement);
  return text.slice(0, sliceIndex);
};

// This function truncates the original line of text by adding ellipsis,
// arbitrating the user's expected number of show lines, HTML element type,
// and whitespaces between the text and the ellipsis.
const truncateLines = (text, element, { lines, whiteSpace, ellipsis }) => {
  const visibilityArea = LINE_HEIGHT_VALUE * Number(lines);
  const newElement = createCopyElement(element);
  const childrenData = [];
  let initialText = '';
  if (typeof text === 'string') {
    initialText = text;
  } else {
    text.forEach(child => {
      const isString = typeof child === 'string';
      const start = initialText.length;
      initialText += isString ? child : child.props.children;
      const end = initialText.length;
      childrenData.push({
        type: isString ? null : child.type, props: child?.props, start, end,
      });
    });
  }
  let truncateText = initialText;
  let cropDecrement = 1;

  element.append(newElement);
  const initialChildren = constructString(initialText, whiteSpace, ellipsis, childrenData);
  for (let i = 0; i < initialChildren.length; i++) {
    newElement.appendChild(initialChildren[i]);
  }
  let newElementTextHeight = newElement.scrollHeight;

  if (visibilityArea >= newElementTextHeight) {
    newElement.parentNode.removeChild(newElement);
    return [document.createTextNode(truncateText)];
  }

  while (newElementTextHeight > visibilityArea) {
    cropDecrement -= CROP_DECREMENT_STEP;
    truncateText = cropText(initialText, cropDecrement);
    const childrenArray = constructString(truncateText, whiteSpace, ellipsis, childrenData);
    newElement.innerHTML = '';
    for (let i = 0; i < childrenArray.length; i++) {
      newElement.appendChild(childrenArray[i]);
    }
    newElementTextHeight = newElement.scrollHeight;
  }

  newElement.parentNode.removeChild(newElement);
  return constructString(truncateText, whiteSpace, ellipsis, childrenData);
};

module.exports = {
  cropText,
  truncateLines,
  constructString,
  createCopyElement,
};
