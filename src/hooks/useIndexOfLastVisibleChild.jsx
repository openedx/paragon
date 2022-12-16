import { useLayoutEffect, useState } from 'react';

import useWindowSize from './useWindowSize';

/**
 * This hook will find the index of the last child of a containing element
 * that fits within its bounding rectangle. This is done by summing the widths
 * of the children until they exceed the width of the container.
 *
 * @param {Element} containerElementRef - container element
 * @param {Element} overflowElementRef - overflow element
 *
 * The hook returns an array containing:
 * [indexOfLastVisibleChild, containerElementRef, overflowElementRef]
 *
 * indexOfLastVisibleChild - the index of the last visible child
 * containerElementRef - a ref to be added to the containing html node
 * overflowElementRef - a ref to be added to an html node inside the container
 *    that is likely to be used to contain a "More" type dropdown or other
 *    mechanism to reveal hidden children. The width of this element is always
 *    included when determining which children will fit or not. Usage of this ref
 *    is optional.
 */
const useIndexOfLastVisibleChild = (containerElementRef, overflowElementRef) => {
  const [indexOfLastVisibleChild, setIndexOfLastVisibleChild] = useState(-1);
  const windowSize = useWindowSize();

  useLayoutEffect(() => {
    if (!containerElementRef) {
      return;
    }
    // Get array of child nodes from NodeList form
    const childNodesArr = Array.prototype.slice.call(containerElementRef.children);
    const { nextIndexOfLastVisibleChild } = childNodesArr
      // filter out the overflow element
      .filter(childNode => childNode !== overflowElementRef)
      // sum the widths to find the last visible element's index
      .reduce((acc, childNode, index) => {
        acc.sumWidth += childNode.getBoundingClientRect().width;
        if (acc.sumWidth <= containerElementRef.getBoundingClientRect().width) {
          acc.nextIndexOfLastVisibleChild = index;
        }
        return acc;
      }, {
        // Include the overflow element's width to begin with. Doing this means
        // sometimes we'll show a dropdown with one item in it when it would fit,
        // but allowing this case dramatically simplifies the calculations we need
        // to do above.
        sumWidth: overflowElementRef ? overflowElementRef.getBoundingClientRect().width : 0,
        nextIndexOfLastVisibleChild: -1,
      });

    setIndexOfLastVisibleChild(nextIndexOfLastVisibleChild);
  }, [windowSize, containerElementRef, overflowElementRef]);

  return indexOfLastVisibleChild;
};

export default useIndexOfLastVisibleChild;
