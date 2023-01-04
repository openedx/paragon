import { useEffect } from 'react';

export const OVERFLOW_SCROLL_OVERFLOW_CONTAINER_CLASS = 'pgn__overflow-scroll-overflow-container';

export const OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START = 'linear-gradient(to right, var(--pgn-overflow-scroll-opacity-mask-transparent) 0%, black 10%';
export const OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_END = 'linear-gradient(to right, black 90%, var(--pgn-overflow-scroll-opacity-mask-transparent) 100%';
export const OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START_END = 'linear-gradient(to right, var(--pgn-overflow-scroll-opacity-mask-transparent) 0%, black 10%, black 90%, var(--pgn-overflow-scroll-opacity-mask-transparent) 100%)';

/**
 * Given the ref the overflow container element, adds the following:
 * - Paragon-specific CSS class name for internal styles
 *
 * - a11y Attributes:
 *   - `tabIndex: -1` (hasInteractiveChildren = false) OR `tabIndex: 0` (hasInteractiveChildren = true)
 *
 * - CSS Styles:
 *   - `position: relative`
 *   - `overflow-x: scroll` (disableScroll = false) OR `overflow-x: hidden` (disableScroll = true)
 *
 * @param {object} args Options
 * @param {React.Ref} args.overflowRef Ref for the overflow container element
 * @param {boolean} args.hasInteractiveChildren Whether the overflow container element
 *  has interactive children (e.g., clickable cards).
 * @param {boolean} args.disableScroll Whether the overflow container's manual scroll behavior is disabled.
 * @param {boolean} args.disableOpacityMasks Whether opacity masks at the start/end are enabled.
 * @param {boolean} args.isScrolledToStart Whether the overflow container is scrolled to the start.
 * @param {boolean} args.isScrolledToEnd Whether the overflow container is scrolled to the end.
 */
const useOverflowScrollElementAttributes = ({
  overflowRef,
  hasInteractiveChildren,
  disableScroll,
  disableOpacityMasks,
  isScrolledToStart,
  isScrolledToEnd,
}) => {
  /**
   * Once the overflow container element is known, check to see if it already has the necessary
   * a11y attributes and CSS styles to support the overflow scrolling behavior.
   */
  useEffect(() => {
    if (overflowRef.current) {
      // a11y
      if (hasInteractiveChildren && overflowRef.current.tabIndex !== '-1') {
        overflowRef.current.tabIndex = '-1';
      }
      if (!hasInteractiveChildren && overflowRef.current.tabIndex !== '0') {
        overflowRef.current.tabIndex = '0';
      }

      // styles
      const overflowRefStyles = global.getComputedStyle(overflowRef.current);
      const positionStyle = overflowRefStyles.getPropertyValue('position');
      const overflowXStyle = overflowRefStyles.getPropertyValue('overflow-x');
      const hasOverflowClass = overflowRef.current.classList.contains(OVERFLOW_SCROLL_OVERFLOW_CONTAINER_CLASS);

      // class name
      if (!hasOverflowClass) {
        overflowRef.current.classList.add(OVERFLOW_SCROLL_OVERFLOW_CONTAINER_CLASS);
      }

      if (positionStyle !== 'relative') {
        overflowRef.current.style.position = 'relative';
      }
      if (disableScroll && overflowXStyle !== 'hidden') {
        overflowRef.current.style.overflowX = 'hidden';
      }
      if (!disableScroll && overflowXStyle !== 'scroll') {
        overflowRef.current.style.overflowX = 'scroll';
      }

      if (disableOpacityMasks) {
        overflowRef.current.style.removeProperty('mask-image');
        overflowRef.current.style.removeProperty('webkit-mask-image');
      } else {
        const getMaskImageStyleValue = () => {
          // TODO: make the `mask-image` property (optionally) extensible/customizable (e.g., passed as a prop)
          if (isScrolledToStart && !isScrolledToEnd) {
            return OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_END;
          }
          if (!isScrolledToStart && isScrolledToEnd) {
            return OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START;
          }

          if (!isScrolledToStart && !isScrolledToEnd) {
            return OVERFLOW_SCROLL_OVERFLOW_OPACITY_MASK_GRADIENT_START_END;
          }

          // no opacity mask required
          return undefined;
        };
        const maskImageStyleValue = getMaskImageStyleValue();
        if (maskImageStyleValue) {
          overflowRef.current.style.maskImage = maskImageStyleValue;
          overflowRef.current.style.webkitMaskImage = maskImageStyleValue;
        } else {
          overflowRef.current.style.removeProperty('mask-image');
          overflowRef.current.style.removeProperty('webkit-mask-image');
        }
      }
    }
  }, [
    overflowRef,
    hasInteractiveChildren,
    disableScroll,
    disableOpacityMasks,
    isScrolledToStart,
    isScrolledToEnd,
  ]);
};

export default useOverflowScrollElementAttributes;
