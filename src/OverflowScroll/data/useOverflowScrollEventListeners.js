import { useCallback, useEffect, useState } from 'react';

/**
 * A React hook that adds and deletes event listeners on the `overflowRef` container element.
 *
 * @param {object} args
 * @param {object} args.overflowRef The ref of the overflow container.
 * @param {array} args.childrenElements A list of child DOM elements
 * @param {number} args.activeChildElementIndex The current index of the child element considered to be "active"
 * @param {function} args.onActiveChildElementIndexChange Callback function for when the active child element
 *  index changes
 * @param {boolean} args.disableScroll Whether scrolling is disabled
 */
const useOverflowScrollEventListeners = ({
  overflowRef,
  childrenElements,
  activeChildElementIndex,
  onActiveChildElementIndexChange,
  disableScroll,
  onOverflowElementScrollLeftChange,
}) => {
  const [isOverflowElementMouseDown, setIsOverflowElementMouseDown] = useState(false);
  const [previousOverflowScrollLeft, setPreviousOverflowScrollLeft] = useState(0);

  /**
   * Determines which child element should be deemed the new `activeChildElementIndex`, as triggered by a particular
   * event, e.g. `wheel`, `scroll`, `focusin`, `keyup`
   */
  const updateActiveChildElementIndex = useCallback(({ isScrollingLeft }) => {
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
          onActiveChildElementIndexChange(index);
        }
        break;
      }
    }
  }, [activeChildElementIndex, childrenElements, overflowRef, onActiveChildElementIndexChange]);

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
    updateActiveChildElementIndex({ isScrollingLeft });
  }, [overflowRef, disableScroll, updateActiveChildElementIndex]);

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
    for (let i = 0; i < childrenElements.length; i++) {
      const element = childrenElements[i];
      const elementHasActiveElement = element.contains(document.activeElement);
      if (elementHasActiveElement && i !== activeChildElementIndex) {
        onActiveChildElementIndexChange(i);
        break;
      }
    }
  }, [overflowRef, activeChildElementIndex, childrenElements, onActiveChildElementIndexChange]);

  /**
   * When the `scroll` event is fired and the user is actively performing a `mousedown` event on
   * the overflow container element:
   *   - Determine whether scrolling is happening to the left or right.
   *   - Update the active child element index based on the current scroll position
   */
  const handleScrollEvent = useCallback(() => {
    onOverflowElementScrollLeftChange(overflowRef.current.scrollLeft);

    if (!isOverflowElementMouseDown) {
      return;
    }

    const isScrollingLeft = overflowRef.current.scrollLeft < previousOverflowScrollLeft;
    updateActiveChildElementIndex({ isScrollingLeft });
    setPreviousOverflowScrollLeft(overflowRef.current.scrollLeft);
  }, [
    isOverflowElementMouseDown,
    overflowRef,
    updateActiveChildElementIndex,
    previousOverflowScrollLeft,
    onOverflowElementScrollLeftChange,
  ]);

  /**
   * When mousedown event is fired:
   *   - set previous overflow container scroll left position
   *   - set `isOverflowElementMouseDown=true`
   */
  const handleMouseDownEvent = useCallback(() => {
    setPreviousOverflowScrollLeft(overflowRef.current.scrollLeft);
    setIsOverflowElementMouseDown(true);
  }, [overflowRef]);

  /**
   * When mouseup event is fired, reset to `isOverflowElementMouseDown=false`.
   */
  const handleMouseUpEvent = useCallback(() => {
    setIsOverflowElementMouseDown(false);
  }, []);

  /**
   * When keydown event is fired, set previous overflow container scroll left position
   */
  const updateActiveChildElementOnKeyDown = useCallback((e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setPreviousOverflowScrollLeft(overflowRef.current.scrollLeft);
    }
  }, [overflowRef]);

  /**
   * When keyup event is fired, update the active child element in the overflow container
   * based on the new scroll position
   */
  const updateActiveChildElementOnKeyUp = useCallback((e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      const isScrollingLeft = overflowRef.current.scrollLeft < previousOverflowScrollLeft;
      updateActiveChildElementIndex({ isScrollingLeft });
    }
  }, [overflowRef, previousOverflowScrollLeft, updateActiveChildElementIndex]);

  /**
   * Adds/removes event listeners for the following events:
   * - `wheel`
   * - `focusin`
   * - `mousedown`
   * - `mouseup`
   * - `keydown`
   * - `keyup`
   * - `scroll`
   *
   * These event listeners ensure the `activeChildElementIndex` state value is updated as the
   * user manually scrolls within overflow container and/or the user moves focus to another child
   * element within the overflow container. By doing so, clicking the previous/next controls scroll
   * to an appropriate element.
   */
  useEffect(() => {
    const overflowRefCopy = overflowRef.current;

    overflowRefCopy?.addEventListener('focusin', updateActiveChildElementOnFocusIn);
    overflowRefCopy?.addEventListener('keydown', updateActiveChildElementOnKeyDown);
    overflowRefCopy?.addEventListener('keyup', updateActiveChildElementOnKeyUp);

    // we must handle the `scroll` event even when `disableScroll` is true because the `mousedown` and `mouseup`
    // events trigger a scroll.
    overflowRefCopy?.addEventListener('scroll', handleScrollEvent);

    if (!disableScroll) {
      overflowRefCopy?.addEventListener('wheel', updateActiveChildElementOnWheel);
      overflowRefCopy?.addEventListener('mousedown', handleMouseDownEvent);
      overflowRefCopy?.addEventListener('mouseup', handleMouseUpEvent);
    }

    return () => {
      overflowRefCopy?.removeEventListener('focusin', updateActiveChildElementOnFocusIn);
      overflowRefCopy?.removeEventListener('keydown', updateActiveChildElementOnKeyDown);
      overflowRefCopy?.removeEventListener('keyup', updateActiveChildElementOnKeyUp);
      overflowRefCopy?.removeEventListener('scroll', handleScrollEvent);

      if (!disableScroll) {
        overflowRefCopy?.removeEventListener('wheel', updateActiveChildElementOnWheel);
        overflowRefCopy?.removeEventListener('mousedown', handleMouseDownEvent);
        overflowRefCopy?.removeEventListener('mouseup', handleMouseUpEvent);
      }
    };
  }, [
    overflowRef,
    disableScroll,
    updateActiveChildElementOnWheel,
    updateActiveChildElementOnFocusIn,
    updateActiveChildElementOnKeyDown,
    updateActiveChildElementOnKeyUp,
    handleScrollEvent,
    handleMouseUpEvent,
    handleMouseDownEvent,
  ]);

  return {
    updateActiveChildElementIndex,
    updateActiveChildElementOnWheel,
    updateActiveChildElementOnFocusIn,
    handleScrollEvent,
    handleMouseDownEvent,
    handleMouseUpEvent,
    updateActiveChildElementOnKeyDown,
    updateActiveChildElementOnKeyUp,
    isOverflowElementMouseDown,
    previousOverflowScrollLeft,
  };
};

export default useOverflowScrollEventListeners;
