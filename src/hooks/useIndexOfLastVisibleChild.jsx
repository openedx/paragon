import { useLayoutEffect, useState } from 'react';

/**
 * This hook will find the index of the last child of a containing element
 * that fits within its bounding rectangle. This is done by summing the widths
 * of the children until they exceed the width of the container.
 *
 * @param {Element} containerElementRef - container element
 * @param {Element} overflowElementRef - overflow element
 *
 * The hook returns the index of the last visible child.
 */
const useIndexOfLastVisibleChild = (containerElementRef, overflowElementRef) => {
  const [indexOfLastVisibleChild, setIndexOfLastVisibleChild] = useState(-1);

  useLayoutEffect(() => {
    function updateLastVisibleChildIndex() {
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
    }

    if (containerElementRef) {
      updateLastVisibleChildIndex();

      const resizeObserver = new ResizeObserver(() => updateLastVisibleChildIndex());
      resizeObserver.observe(containerElementRef);

      return () => resizeObserver.disconnect();
    }

    return undefined;
  }, [containerElementRef, overflowElementRef]);

  return indexOfLastVisibleChild;
};

export default useIndexOfLastVisibleChild;
