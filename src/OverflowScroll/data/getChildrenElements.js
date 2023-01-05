import { OVERFLOW_SCROLL_ITEM_CLASS } from './constants';

/**
 * Gets the children elements matching the given CSS query selector.
 *
 * @param {object} args
 * @param {HTMLElement} args.element Parent element to search within.
 * @param {string} args.childQuerySelector Optional CSS query selector to find child elements within the parent element.
 *
 * @returns List of children elements within the provided element matching the given CSS query selector.
 */
const getChildrenElements = ({
  element,
  childQuerySelector,
}) => {
  if (!element) {
    return [];
  }

  // attempt to use the specified `childQuerySelector`, otherwise fallback
  // to using the default `OVERFLOW_SCROLL_ITEM_CLASS`
  const actualChildQuerySelector = childQuerySelector || `.${OVERFLOW_SCROLL_ITEM_CLASS}`;
  const matchingElements = [...element.querySelectorAll(actualChildQuerySelector)];

  if (matchingElements.length === 0 && process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.warn(`No matching elements found for CSS selector: ${actualChildQuerySelector}`);
  }

  return matchingElements;
};

export default getChildrenElements;
