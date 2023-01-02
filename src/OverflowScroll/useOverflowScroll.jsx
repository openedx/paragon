import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import useIsVisible from '../hooks/useIsVisible';

/**
 * Gets the children elements matching the given CSS query selector.
 *
 * @param {object} args
 * @param {HTMLElement} args.element The parent element to search within.
 * @param {string} args.childQuerySelector The CSS query selector to search within the parent element.
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
  const matchingElements = [...element.querySelectorAll(childQuerySelector)];
  if (matchingElements.length === 0) {
    // eslint-disable-next-line no-console
    console.warn(`No matching elements found for CSS selector: ${childQuerySelector}`);
  }
  return matchingElements;
};

const calculateOffsetLeft = element => element?.offsetLeft || 0;

/**
 * A headless React hook that encapsulates the logic for supporting
 * carousel-like UI components.
 *
 * @param {object} args
 * @param {string} args.childQuerySelector A CSS query selector to find all
 *  child elements within the overflow container.
 * @param {boolean} args.hasInteractiveChildren Whether the child elements within
 *  the overflow container are interactive. If false, the overflow container will
 *  automatically become focusable for a11y.
 * @param {boolean} args.disableScroll Whether users can scroll within the overflow container.
 * @param {string} args.scrollBehavior Optional override for the scroll behavior. See https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo for
 *  more details.
 *
 * @returns {object} An object with the following properties:
 * - overflowRef
 * - startSentinelRef
 * - endSentinelRef
 * - scrollToPrevious
 * - scrollToNext
 * - isScrolledToStart
 * - isScrolledToEnd
 * - isOverflowContainerVisible
 */
const useOverflowScroll = ({
  childQuerySelector,
  hasInteractiveChildren = false,
  disableScroll = false,
  scrollBehavior = 'smooth',
}) => {
  const [isOverflowContainerVisible, overflowRef] = useIsVisible();
  const [isScrolledToStart, startSentinelRef] = useIsVisible();
  const [isScrolledToEnd, endSentinelRef] = useIsVisible();
  const [activeChildElementIndex, setActiveChildElementIndex] = useState(0);

  const childrenElements = getChildrenElements({
    element: overflowRef.current,
    childQuerySelector,
  });

  /**
   * Once the overflow container element is known, check to see if it already has the necessary
   * a11y attributes and CSS styles to support the overflow scrolling behavior.
   *
   * a11y Attributes:
   * - `tabIndex: -1` (hasInteractiveChildren = false) OR `tabIndex: 0` (hasInteractiveChildren = true)
   *
   * CSS Styles:
   * - `position: relative`
   * - `overflow-x: scroll` (disableScroll = false) OR `overflow-x: hidden` (disableScroll = true)
   */
  useEffect(() => {
    if (overflowRef.current) {
      const positionStyle = global.getComputedStyle(overflowRef.current).getPropertyValue('position');
      const overflowXStyle = global.getComputedStyle(overflowRef.current).getPropertyValue('overflow-x');

      // a11y
      if (hasInteractiveChildren && overflowRef.current.tabIndex !== '-1') {
        overflowRef.current.tabIndex = '-1';
      }
      if (!hasInteractiveChildren && overflowRef.current.tabIndex !== '0') {
        overflowRef.current.tabIndex = '0';
      }

      // styles
      if (positionStyle !== 'relative') {
        overflowRef.current.style.position = 'relative';
      }
      if (disableScroll && overflowXStyle !== 'hidden') {
        overflowRef.current.style.overflowX = 'hidden';
      }
      if (!disableScroll && overflowXStyle !== 'scroll') {
        overflowRef.current.style.overflowX = 'scroll';
      }
    }
  }, [overflowRef, hasInteractiveChildren, disableScroll]);

  /**
   * A helper function to scroll to the previous element in the overflow container.
   */
  const scrollToPrevious = useCallback(() => {
    if (overflowRef.current) {
      const getPreviousChildElement = (previousChildElementIndex) => {
        // return the start sentinel element if the overflow container reached the beginning
        if (previousChildElementIndex <= 0) {
          return startSentinelRef.current;
        }
        // otherwise return the previous element
        return childrenElements[previousChildElementIndex];
      };

      const previousChildElementIndex = activeChildElementIndex - 1;
      const previousChildElement = getPreviousChildElement(previousChildElementIndex);
      const calculatedOffsetLeft = calculateOffsetLeft(previousChildElement);
      overflowRef.current.scrollTo({
        left: calculatedOffsetLeft,
        behavior: scrollBehavior,
      });
      setActiveChildElementIndex(s => Math.max(s - 1, 0));
    }
  }, [
    overflowRef,
    childrenElements,
    startSentinelRef,
    activeChildElementIndex,
    scrollBehavior,
  ]);

  /**
   * A helper function to scroll to the next element in the overflow container.
   */
  const scrollToNext = useCallback(() => {
    if (overflowRef.current) {
      const getNextChildElement = (nextChildElementIndex) => {
        // return the end sentinel element if the overflow container reached the end
        if (nextChildElementIndex >= childrenElements.length - 1) {
          return endSentinelRef.current;
        }
        // otherwise return the next element
        return childrenElements[nextChildElementIndex];
      };

      const nextChildElementIndex = activeChildElementIndex + 1;
      const nextChildElement = getNextChildElement(nextChildElementIndex);
      const calculatedOffsetLeft = calculateOffsetLeft(nextChildElement);
      overflowRef.current.scrollTo({
        left: calculatedOffsetLeft,
        behavior: scrollBehavior,
      });
      setActiveChildElementIndex(s => Math.min(s + 1, childrenElements.length - 1));
    }
  }, [
    overflowRef,
    endSentinelRef,
    activeChildElementIndex,
    scrollBehavior,
    childrenElements,
  ]);

  /**
   * Determines which child element should be flagged as active based on the
   * user's scroll position within the overflow container element.
   *
   * This ensures the overflow container scrolls to an appropriate child element
   * based on where the user's current scroll position resides.
   */
  const updateActiveChildElementOnWheel = useCallback((event) => {
    if (!overflowRef?.current || disableScroll) {
      return;
    }

    const isScrollingLeft = event.deltaX < 0;

    const getScrollOffsetLeft = (element) => {
      if (isScrollingLeft) {
        return element.offsetLeft;
      }
      return element.offsetLeft + element.offsetWidth;
    };

    for (let index = 0; index < childrenElements.length; index++) {
      const childElement = childrenElements[index];
      const scrollOffsetLeft = getScrollOffsetLeft(childElement);
      if (scrollOffsetLeft > overflowRef.current.scrollLeft) {
        if (index !== activeChildElementIndex) {
          setActiveChildElementIndex(index);
        }
        break;
      }
    }
  }, [overflowRef, activeChildElementIndex, disableScroll, childrenElements]);

  /**
   * Determines which child element should be flagged as active based on
   * which element within the overflow container currently has the user's focus.
   */
  const updateActiveChildElementOnFocusIn = useCallback(() => {
    if (!overflowRef?.current) {
      return;
    }
    if (overflowRef.current === document.activeElement) {
      return;
    }
    childrenElements.forEach((element, index) => {
      const elementContainsActiveElement = element.contains(document.activeElement);
      if (elementContainsActiveElement && index !== activeChildElementIndex) {
        setActiveChildElementIndex(index);
      }
    });
  }, [overflowRef, activeChildElementIndex, childrenElements]);

  /**
   * Adds/removes event listeners for the `wheel` and `focusin` events to ensure the
   * `activeChildElementIndex` state value is updated as the user manually scrolls
   * within overflow container and/or the user moves focus to another child element
   * within the overflow container. Doing so ensures that scrolling to the previous/next
   * element in the overflow container continues from the leftmost visible element or the
   * actively focused element.
   */
  useEffect(() => {
    const overflowRefCopy = overflowRef.current;
    overflowRefCopy?.addEventListener('focusin', updateActiveChildElementOnFocusIn);
    if (!disableScroll) {
      overflowRefCopy?.addEventListener('wheel', updateActiveChildElementOnWheel);
    }
    return () => {
      overflowRefCopy?.removeEventListener('focusin', updateActiveChildElementOnFocusIn);
      if (!disableScroll) {
        overflowRefCopy?.removeEventListener('wheel', updateActiveChildElementOnWheel);
      }
    };
  }, [overflowRef, disableScroll, updateActiveChildElementOnWheel, updateActiveChildElementOnFocusIn]);

  return {
    overflowRef,
    startSentinelRef,
    endSentinelRef,
    scrollToPrevious,
    scrollToNext,
    isScrolledToStart,
    isScrolledToEnd,
    isOverflowContainerVisible,
  };
};

export default useOverflowScroll;
