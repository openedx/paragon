import {
  useCallback,
  useState,
} from 'react';
import useIsVisible from '../../hooks/useIsVisible';
import useOverflowScrollActions from './useOverflowScrollActions';
import useOverflowScrollElementAttributes from './useOverflowScrollElementAttributes';
import useOverflowScrollEventListeners from './useOverflowScrollEventListeners';
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

  if (matchingElements.length === 0) {
    // eslint-disable-next-line no-console
    console.warn(`No matching elements found for CSS selector: ${actualChildQuerySelector}`);
  }

  return matchingElements;
};

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
 * @param {boolean} args.disableOpacityMasks Whether the start/end opacity masks should be shown, when applicable.
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
 * - isOverflowElementVisible
 */
const useOverflowScroll = ({
  childQuerySelector,
  hasInteractiveChildren = false,
  disableScroll = false,
  disableOpacityMasks = false,
  scrollBehavior = 'smooth',
}) => {
  const [isOverflowElementVisible, overflowRef] = useIsVisible();
  const [isScrolledToStart, startSentinelRef] = useIsVisible();
  const [isScrolledToEnd, endSentinelRef] = useIsVisible();

  const [activeChildElementIndex, setActiveChildElementIndex] = useState(0);

  const onActiveChildElementIndexChange = useCallback((index) => {
    setActiveChildElementIndex(index);
  }, []);

  const childrenElements = getChildrenElements({
    element: overflowRef.current,
    childQuerySelector,
  });

  useOverflowScrollEventListeners({
    overflowRef,
    childrenElements,
    activeChildElementIndex,
    onActiveChildElementIndexChange,
    disableScroll,
  });

  useOverflowScrollElementAttributes({
    overflowRef,
    hasInteractiveChildren,
    disableScroll,
    disableOpacityMasks,
    isScrolledToStart,
    isScrolledToEnd,
  });

  const handleScrollPrevious = useCallback(() => {
    setActiveChildElementIndex(s => Math.max(s - 1, 0));
  }, []);

  const handleScrollNext = useCallback(() => {
    setActiveChildElementIndex(s => Math.min(s + 1, childrenElements.length - 1));
  }, [childrenElements]);

  const {
    scrollToPrevious,
    scrollToNext,
  } = useOverflowScrollActions({
    overflowRef,
    activeChildElementIndex,
    startSentinelRef,
    endSentinelRef,
    childrenElements,
    scrollBehavior,
    onScrollPrevious: handleScrollPrevious,
    onScrollNext: handleScrollNext,
  });

  return {
    overflowRef,
    startSentinelRef,
    endSentinelRef,
    scrollToPrevious,
    scrollToNext,
    isScrolledToStart,
    isScrolledToEnd,
    isOverflowElementVisible,
  };
};

export default useOverflowScroll;
