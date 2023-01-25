/**
 * Calculates the `scrollLeft` position of the overflow container element.
 *
 * @param {object} overflowRef A React ref object.
 * @returns The scroll left position of the overflow container element.
 */
const getOverflowElementScrollLeft = (overflowRef) => {
  if (!overflowRef) {
    return 0;
  }
  return Math.abs(Math.round(overflowRef.scrollLeft));
};

export default getOverflowElementScrollLeft;
