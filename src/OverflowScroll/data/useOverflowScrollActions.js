import { useCallback } from 'react';

/**
 * Calculates the `offsetLeft` position relative to the overflow container.
 *
 * @param {HTMLElement} element A HTML element
 * @returns The `offsetLeft` property of an element, if given.
 */
const calculateOffsetLeft = element => element?.offsetLeft || 0;

const useOverflowScrollActions = ({
  overflowRef,
  activeChildElementIndex,
  childrenElements,
  scrollAnimationBehavior = 'smooth',
  onScrollPrevious,
  onScrollNext,
}) => {
  /**
   * A helper function to scroll to the previous element in the overflow container.
   */
  const scrollToPrevious = useCallback(() => {
    if (!overflowRef) {
      return;
    }
    const getPreviousChildElement = (previousChildElementIndex) => {
      // return the first element if the overflow container reached the beginning
      if (previousChildElementIndex <= 0) {
        return childrenElements[0];
      }
      // otherwise return the previous element
      return childrenElements[previousChildElementIndex];
    };

    const previousChildElementIndex = activeChildElementIndex - 1;
    const previousChildElement = getPreviousChildElement(previousChildElementIndex);
    const calculatedOffsetLeft = calculateOffsetLeft(previousChildElement);
    overflowRef.scrollTo({
      left: calculatedOffsetLeft,
      behavior: scrollAnimationBehavior,
    });
    const currentActiveChildElementIndex = previousChildElementIndex <= 0 ? 0 : previousChildElementIndex;
    onScrollPrevious({
      currentActiveChildElementIndex,
    });
  }, [
    overflowRef,
    childrenElements,
    activeChildElementIndex,
    scrollAnimationBehavior,
    onScrollPrevious,
  ]);

  /**
   * A helper function to scroll to the next element in the overflow container.
   */
  const scrollToNext = useCallback(() => {
    if (!overflowRef) {
      return;
    }
    const childElementCount = childrenElements.length;
    const lastChildElementIndex = childElementCount - 1;
    const nextChildElementIndex = activeChildElementIndex + 1;
    const isNextChildIndexAtEnd = nextChildElementIndex >= lastChildElementIndex;

    const getNextChildElement = () => {
      // return the last element if the overflow container reached the end
      if (isNextChildIndexAtEnd) {
        return childrenElements[lastChildElementIndex];
      }
      // otherwise return the next element
      return childrenElements[nextChildElementIndex];
    };

    const nextChildElement = getNextChildElement();
    const calculatedOffsetLeft = calculateOffsetLeft(nextChildElement);
    overflowRef.scrollTo({
      left: calculatedOffsetLeft,
      behavior: scrollAnimationBehavior,
    });
    const currentActiveChildElementIndex = isNextChildIndexAtEnd ? lastChildElementIndex : nextChildElementIndex;
    onScrollNext({ currentActiveChildElementIndex });
  }, [
    overflowRef,
    activeChildElementIndex,
    scrollAnimationBehavior,
    childrenElements,
    onScrollNext,
  ]);

  return {
    scrollToPrevious,
    scrollToNext,
  };
};

export default useOverflowScrollActions;
