/**
 * Gets the current annotation styles and calculates the left margin so
 * that the annotation pointer indicates on zero of the ProgressBar.
 *
 * @param {object} ref reference to the info block
 * @param {string} direction direction of the page ("ltr" or "rtl")
 * @param {boolean} annotationOnly ignores width of the hint
 * @param {string} annotationClass is used to identify the annotation element
 */
export const placeInfoAtZero = (
  ref,
  direction = 'ltr',
  annotationOnly = true,
  annotationClass = 'pgn__annotation',
) => {
  if (!ref.current || !ref.current.style) { return false; }
  const { children } = ref.current;
  let horizontalMargin = 0.0;

  for (let i = 0; i < children.length || 0; i++) {
    const elementParams = children[i].getBoundingClientRect();
    if (children[i].className.includes(annotationClass)) {
      horizontalMargin += elementParams.width / 2;
    } else {
      horizontalMargin += annotationOnly ? 0.0 : elementParams.width;
    }
  }
  // eslint-disable-next-line no-param-reassign
  ref.current.style[direction === 'rtl' ? 'marginRight' : 'marginLeft'] = `${-horizontalMargin}px`;
  return true;
};

/**
 * Retrieves offset styles based on the page direction.
 *
 * @param {number} value - The offset value in percentages.
 * @param {string} direction - The offset direction ('rtl' for rightward offset, 'ltr' for leftward offset).
 * @returns {Object} An object containing offset styles with either the 'left' or 'right' property,
 * depending on the direction.
 */
export const getOffsetStyles = (
  value,
  direction,
) => (direction === 'rtl' ? { right: `${value}%` } : { left: `${value}%` });
