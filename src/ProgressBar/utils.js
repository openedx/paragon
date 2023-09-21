/**
 * Gets the current annotation styles and calculates the left margin so
 * that the annotation pointer indicates on zero of the ProgressBar.
 *
 * @param {object} ref reference to the info block
 * @param {string} direction directing elements to pages
 * @param {boolean} annotationOnly ignores width of the hint
 * @param {string} annotationClass is used to identify the annotation element
 */
// eslint-disable-next-line import/prefer-default-export
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
