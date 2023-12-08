import { ELLIPSIS } from './constants';

const getPaginationRange = ({
  currentIndex,
  count,
  length,
  requireFirstAndLastPages = true,
}) => {
  if (count === 0) {
    return [];
  }

  const boundedLength = Math.min(count, length);
  const unboundedStartIndex = currentIndex - Math.ceil(boundedLength / 2);
  const zeroBoundedStartIndex = Math.max(0, unboundedStartIndex);
  // Bind maximum value of zeroBoundedStartIndex to avoid running past the count of pages
  const boundedStartIndex = Math.min(zeroBoundedStartIndex, count - boundedLength);

  const range = Array.from({ length: boundedLength }, (el, i) => boundedStartIndex + i);

  const isFirstPageInRange = range[0] === 0;
  const isLastPageInRange = range[range.length - 1] === count - 1;

  if (requireFirstAndLastPages && !isFirstPageInRange) {
    range[0] = 0;
    range[1] = ELLIPSIS;
  }

  if (requireFirstAndLastPages && !isLastPageInRange) {
    range[range.length - 1] = count - 1;
    range[range.length - 2] = ELLIPSIS;
  }

  return range;
};

export default getPaginationRange;
