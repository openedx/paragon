import {
  useCallback,
  useState,
} from 'react';
import useIsVisible from '../../hooks/useIsVisible';
import useOverflowScrollActions from './useOverflowScrollActions';
import useOverflowScrollElementAttributes from './useOverflowScrollElementAttributes';
import useOverflowScrollEventListeners from './useOverflowScrollEventListeners';
import getChildrenElements from './getChildrenElements';

/**
 * A headless React hook that encapsulates the logic for supporting
 * carousel-like UI components.
 *
 * @param {object} args
 * @param {string} args.childQuerySelector A CSS query selector to find all
 *  child elements within the overflow container.
 * @param {function} args.onScrollPrevious An optional callback function for when `scrollToPrevious` is called.
 * @param {function} args.onScrollNext An optional callback function for when `scrollToNext` is called.
 * @param {boolean} args.hasInteractiveChildren Whether the child elements within
 *  the overflow container are interactive. If false, the overflow container will
 *  automatically become focusable for a11y.
 * @param {boolean} args.disableScroll Whether users can scroll within the overflow container.
 * @param {boolean} args.disableOpacityMasks Whether the start/end opacity masks should be shown, when applicable.
 * @param {string} args.scrollAnimationBehavior Optional override for the scroll behavior. See https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo for
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
 * - activeChildElementIndex
 */
const useOverflowScroll = ({
  childQuerySelector,
  onScrollPrevious,
  onScrollNext,
  hasInteractiveChildren = false,
  disableScroll = false,
  disableOpacityMasks = false,
  scrollAnimationBehavior = 'smooth',
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

  /**
   * Handles when the user scrolls to the previous element, updating
   * the active child element index.
   */
  const handleScrollPrevious = useCallback(() => {
    setActiveChildElementIndex(s => Math.max(s - 1, 0));
    if (onScrollPrevious) {
      onScrollPrevious();
    }
  }, [onScrollPrevious]);

  /**
   * Handles when the user scrolls to the next element, updating
   * the active child element index.
   */
  const handleScrollNext = useCallback(() => {
    setActiveChildElementIndex(s => Math.min(s + 1, childrenElements.length - 1));
    if (onScrollNext) {
      onScrollNext();
    }
  }, [childrenElements, onScrollNext]);

  const {
    scrollToPrevious,
    scrollToNext,
  } = useOverflowScrollActions({
    overflowRef,
    activeChildElementIndex,
    startSentinelRef,
    endSentinelRef,
    childrenElements,
    scrollAnimationBehavior,
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
    activeChildElementIndex,
  };
};

export default useOverflowScroll;
