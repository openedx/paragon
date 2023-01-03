import { useCallback, useEffect, useState } from 'react';

const useOverflowScrollEventListeners = ({
  overflowRef,
  childrenElements,
  activeChildElementIndex,
  onActiveChildElementIndexChange,
  disableScroll,
}) => {
  const [isOverflowElementClicked, setIsOverflowElementClicked] = useState(false);
  const [currentOverflowScrollLeft, setCurrentOverflowScrollLeft] = useState(0);

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
    updateActiveChildElementIndex({
      isScrollingLeft,
    });
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
    childrenElements.forEach((element, index) => {
      const elementContainsActiveElement = element.contains(document.activeElement);
      if (elementContainsActiveElement && index !== activeChildElementIndex) {
        onActiveChildElementIndexChange(index);
      }
    });
  }, [overflowRef, activeChildElementIndex, childrenElements, onActiveChildElementIndexChange]);

  /**
   * When the `scroll` event is fired and the user is actively performing a `mousedown` event on
   * the overflow container element:
   *   - Determine whether scrolling is happening to the left or right.
   *   - Update the active child element index based on the current scroll position
   */
  const handleScrollEvent = useCallback(() => {
    if (isOverflowElementClicked) {
      const isScrollingLeft = overflowRef.current.scrollLeft < currentOverflowScrollLeft;
      updateActiveChildElementIndex({
        isScrollingLeft,
      });
      setCurrentOverflowScrollLeft(overflowRef.current.scrollLeft);
    }
  }, [isOverflowElementClicked, overflowRef, updateActiveChildElementIndex, currentOverflowScrollLeft]);

  /**
   * When mousedown event is fired:
   *   - set current overflow container scroll left position
   *   - set `isOverflowElementClicked=true`
   */
  const handleMouseDownEvent = useCallback(() => {
    setCurrentOverflowScrollLeft(overflowRef.current.scrollLeft);
    setIsOverflowElementClicked(true);
  }, [overflowRef]);

  /**
   * When mouseup event is fired, reset to `isOverflowElementClicked=false`.
   */
  const handleMouseUpEvent = useCallback(() => {
    setIsOverflowElementClicked(false);
  }, []);

  /**
   * Adds/removes event listeners for the following events:
   * - `wheel`
   * - `focusin`
   * - `mousedown`
   * - `mouseup`
   * - `scroll`
   *
   * These event listeners ensure the `activeChildElementIndex` state value is updated as the
   * user manually scrolls within overflow container and/or the user moves focus to another child
   * element within the overflow container. By doing so, clicking the previous/next controls scroll
   * to an appropriate element.
   */
  useEffect(() => {
    const overflowRefCopy = overflowRef.current;

    if (!disableScroll) {
      overflowRefCopy?.addEventListener('wheel', updateActiveChildElementOnWheel);
      overflowRefCopy?.addEventListener('scroll', handleScrollEvent);
      overflowRefCopy?.addEventListener('mousedown', handleMouseDownEvent);
      overflowRefCopy?.addEventListener('mouseup', handleMouseUpEvent);
    }

    overflowRefCopy?.addEventListener('focusin', updateActiveChildElementOnFocusIn);

    return () => {
      overflowRefCopy?.removeEventListener('focusin', updateActiveChildElementOnFocusIn);
      if (!disableScroll) {
        overflowRefCopy?.removeEventListener('wheel', updateActiveChildElementOnWheel);
        overflowRefCopy?.removeEventListener('scroll', handleScrollEvent);
        overflowRefCopy?.removeEventListener('mousedown', handleMouseDownEvent);
        overflowRefCopy?.removeEventListener('mouseup', handleMouseUpEvent);
      }
    };
  }, [
    overflowRef,
    disableScroll,
    updateActiveChildElementOnWheel,
    updateActiveChildElementOnFocusIn,
    handleScrollEvent,
    handleMouseUpEvent,
    handleMouseDownEvent,
  ]);
};

export default useOverflowScrollEventListeners;
