import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import useIsVisible from '../hooks/useIsVisible';

const getChildrenElements = ({
  element,
  childQuerySelector,
  depth = 0,
}) => {
  if (!element) {
    return [];
  }
  const childQuerySelectorParts = childQuerySelector.split(' ');
  const matchingElements = [...element.querySelectorAll(childQuerySelectorParts[depth])];
  return matchingElements.map((matchingElement) => {
    const elementsMatchingNextQuerySelectorPart = getChildrenElements({
      element: matchingElement,
      childQuerySelector,
      depth: depth + 1,
    });
    return {
      element: matchingElement,
      // return first matching child element, or undefined if none found
      child: elementsMatchingNextQuerySelectorPart[0],
    };
  });
};

const calculateOffsetLeft = (node, offsetLeft = 0) => {
  if (!node) {
    return offsetLeft;
  }
  const nodeOffsetLeft = node.element?.offsetLeft || offsetLeft;
  return calculateOffsetLeft(node.child, offsetLeft + nodeOffsetLeft);
};

const useOverflowScroll = ({
  scrollBehavior,
  childQuerySelector,
  disableScroll,
}) => {
  const [isOverflowContainerVisible, overflowRef] = useIsVisible();
  const [isScrolledToStart, startSentinelRef] = useIsVisible();
  const [isScrolledToEnd, endSentinelRef] = useIsVisible();
  const [activeChildElementIndex, setActiveChildElementIndex] = useState(0);

  const childrenElements = getChildrenElements({
    element: overflowRef.current,
    childQuerySelector,
  });

  useEffect(() => {
    if (overflowRef.current) {
      const positionStyle = global.getComputedStyle(overflowRef.current).getPropertyValue('position');
      const overflowXStyle = global.getComputedStyle(overflowRef.current).getPropertyValue('overflow-x');

      if (positionStyle !== 'relative') {
        overflowRef.current.style.position = 'relative';
      }
      if (!disableScroll && overflowXStyle !== 'scroll') {
        overflowRef.current.style.overflowX = 'scroll';
      }
    }
  }, [overflowRef, disableScroll]);

  const getPreviousChildElement = useCallback(
    (previousChildElementIndex) => {
      if (previousChildElementIndex <= 0) {
        return {
          element: startSentinelRef.current,
          child: undefined,
        };
      }
      return childrenElements[previousChildElementIndex];
    },
    [startSentinelRef, childrenElements],
  );

  const scrollToPrevious = useCallback(() => {
    if (overflowRef.current) {
      const previousChildElementIndex = activeChildElementIndex - 1;
      const previousChild = getPreviousChildElement(previousChildElementIndex);
      const calculatedOffsetLeft = calculateOffsetLeft(previousChild);
      overflowRef.current.scrollTo({
        left: calculatedOffsetLeft,
        behavior: scrollBehavior || 'smooth',
      });
      setActiveChildElementIndex(s => Math.max(s - 1, 0));
    }
  }, [
    overflowRef,
    activeChildElementIndex,
    scrollBehavior,
    getPreviousChildElement,
  ]);

  const getNextChildElement = useCallback(
    (nextChildElementIndex) => {
      if (nextChildElementIndex >= childrenElements.length - 1) {
        return {
          element: endSentinelRef.current,
          child: undefined,
        };
      }
      return childrenElements[nextChildElementIndex];
    },
    [endSentinelRef, childrenElements],
  );

  const scrollToNext = useCallback(() => {
    if (overflowRef.current) {
      const nextChildElementIndex = activeChildElementIndex + 1;
      const nextChild = getNextChildElement(nextChildElementIndex);
      const calculatedOffsetLeft = calculateOffsetLeft(nextChild);
      overflowRef.current.scrollTo({
        left: calculatedOffsetLeft,
        behavior: scrollBehavior || 'smooth',
      });
      setActiveChildElementIndex(s => Math.min(s + 1, childrenElements.length - 1));
    }
  }, [
    overflowRef,
    activeChildElementIndex,
    scrollBehavior,
    getNextChildElement,
    childrenElements,
  ]);

  const updateActiveChildElementOnWheel = useCallback((event) => {
    if (!overflowRef?.current) {
      return;
    }
    const isScrollingLeft = event.deltaX < 0;

    const getScrollOffsetLeft = (child) => {
      if (isScrollingLeft) {
        return child.element.offsetLeft;
      }
      return child.element.offsetLeft + child.element.offsetWidth;
    };

    for (let index = 0; index < childrenElements.length; index++) {
      const child = childrenElements[index];
      const scrollOffsetLeft = getScrollOffsetLeft(child);
      if (scrollOffsetLeft > overflowRef.current.scrollLeft) {
        if (index !== activeChildElementIndex) {
          setActiveChildElementIndex(index);
        }
        break;
      }
    }
  }, [overflowRef, activeChildElementIndex, childrenElements]);

  useEffect(() => {
    const overflowRefCopy = overflowRef.current;
    overflowRefCopy?.addEventListener('wheel', updateActiveChildElementOnWheel);
    return () => {
      overflowRefCopy?.removeEventListener('wheel', updateActiveChildElementOnWheel);
    };
  }, [overflowRef, updateActiveChildElementOnWheel]);

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
