import { useCallback } from 'react';

const calculateOffsetLeft = element => element?.offsetLeft || 0;

const useOverflowScrollActions = ({
  overflowRef,
  activeChildElementIndex,
  startSentinelRef,
  endSentinelRef,
  childrenElements,
  scrollBehavior,
  onScrollPrevious,
  onScrollNext,
}) => {
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
      onScrollPrevious();
    }
  }, [
    overflowRef,
    childrenElements,
    startSentinelRef,
    activeChildElementIndex,
    scrollBehavior,
    onScrollPrevious,
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
      onScrollNext();
    }
  }, [
    overflowRef,
    endSentinelRef,
    activeChildElementIndex,
    scrollBehavior,
    childrenElements,
    onScrollNext,
  ]);

  return {
    scrollToPrevious,
    scrollToNext,
  };
};

export default useOverflowScrollActions;
