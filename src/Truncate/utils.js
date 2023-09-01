const LINE_HEIGHT_VALUE = 1000;
const CROP_DECREMENT_STEP = 0.01;

/**
 * Copies document elements.
 *
 * @param {object} element document element
 * @returns object
 */
const createCopyElement = (element) => {
  const newElement = document.createElement(element.tagName);
  newElement.setAttribute(
    'style',
    `line-height: ${LINE_HEIGHT_VALUE}px; display: inline-block; word-break: break-word;`,
  );
  return newElement;
};

/**
 * Constructs children based on the input text. In the case when childrenData
 * is empty simple text node is returned. childrenData specifies how the input
 * text should be split between document elements.
 *
 * @param {string} text
 * @param {boolean} whiteSpace whether white space should be added at the end
 * @param {string} ellipsis specifies ellipsis string
 * @param {array} childrenData is used to restore clients children array
 * @returns array
 */
const constructChildren = (text, whiteSpace = false, ellipsis = '', childrenData = []) => {
  const spacer = whiteSpace ? ' ' : '';
  const contentEnd = `${spacer}${ellipsis}`;
  if (!childrenData.length) {
    return [document.createTextNode(`${text.trim()}${contentEnd}`)];
  }
  const newChildren = [];
  childrenData.forEach((el, index) => {
    let content = text.slice(el.start, el.end);
    if (!content.length) {
      return;
    }
    if (index === childrenData.length - 1 && ellipsis) {
      content = content.trimEnd();
    }
    if (!el.type) {
      newChildren.push(document.createTextNode(content));
      return;
    }
    const element = document.createElement(el.type);
    if (Array.isArray(el.children)) {
      constructChildren(content, false, '', el.children).forEach(nestedChild => {
        element.appendChild(nestedChild);
      });
    } else {
      element.appendChild(document.createTextNode(content));
    }
    Object.keys(el.props || {}).forEach(prop => {
      if (prop === 'children') {
        return;
      }
      element.setAttribute(prop, el.props[prop]);
    });
    newChildren.push(element);
  });
  if (contentEnd) {
    newChildren.push(document.createTextNode(contentEnd));
  }
  return newChildren;
};

/**
 * Slices string based on original text length and cropDecrement
 *
 * @param {string} text
 * @param {number} cropDecrement
 * @returns string
 */
const cropText = (text, cropDecrement) => {
  const sliceIndex = Math.floor(text.length * cropDecrement);
  return text.slice(0, sliceIndex);
};

/**
 * Retrieves plain string from children array and collects data
 * to be able to restore original children in the future.
 *
 * @param {array} children
 * @param {array} elementsData original data to restore children
 * @returns string
 */
function assembleStringFromChildrenArray(children, elementsData = []) {
  let result = '';
  children.forEach(child => {
    const isString = typeof child === 'string';
    const isChildrenString = typeof child?.props?.children === 'string';
    const nestedChildrenData = isString || isChildrenString ? null : [];
    const start = result.length;
    if (isString) {
      result += child;
    } else if (isChildrenString) {
      result += child.props.children;
    } else {
      result += assembleStringFromChildrenArray(
        child.props.children.constructor === Object ? [child.props.children] : child.props.children,
        nestedChildrenData,
      );
    }
    const end = result.length;
    elementsData.push({
      type: isString ? null : child.type, props: child?.props, start, end, children: nestedChildrenData,
    });
  });
  return result;
}

// This function truncates the original line of text by adding ellipsis,
// arbitrating the user's expected number of show lines, HTML element type,
// and whitespaces between the text and the ellipsis.
// text can be either string or children array
const truncateLines = (text, element, { lines, whiteSpace, ellipsis }) => {
  const visibilityArea = LINE_HEIGHT_VALUE * Number(lines);
  const newElement = createCopyElement(element);
  const childrenData = [];
  const initialText = typeof text === 'string' ? text : assembleStringFromChildrenArray(text, childrenData);

  let truncateText = initialText;
  let cropDecrement = 1;

  element.append(newElement);
  const initialChildren = constructChildren(initialText, false, '', childrenData);

  for (let i = 0; i < initialChildren.length; i++) {
    newElement.appendChild(initialChildren[i]);
  }
  let newElementTextHeight = newElement.scrollHeight;

  if (visibilityArea >= newElementTextHeight) {
    newElement.parentNode.removeChild(newElement);
    return [constructChildren(truncateText, false, '', childrenData), initialText];
  }

  while (newElementTextHeight > visibilityArea) {
    cropDecrement -= CROP_DECREMENT_STEP;
    truncateText = cropText(initialText, cropDecrement);
    const childrenArray = constructChildren(truncateText, whiteSpace, ellipsis, childrenData);
    newElement.innerHTML = '';
    for (let i = 0; i < childrenArray.length; i++) {
      newElement.appendChild(childrenArray[i]);
    }
    newElementTextHeight = newElement.scrollHeight;
  }

  newElement.parentNode.removeChild(newElement);
  return [constructChildren(truncateText, whiteSpace, ellipsis, childrenData), initialText];
};

module.exports = {
  cropText,
  truncateLines,
  constructChildren,
  createCopyElement,
};
