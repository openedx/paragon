import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useOverflowScroll } from './data';
import OverflowScrollContext from './OverflowScrollContext';
import OverflowScrollItems from './OverflowScrollItems';

function OverflowScroll({
  ariaLabel,
  children,
  childQuerySelector,
  hasInteractiveChildren,
  disableScroll,
  disableOpacityMasks,
  onScrollPrevious,
  onScrollNext,
}) {
  const [overflowRef, setOverflowRef] = useState();

  const {
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
  } = useOverflowScroll({
    childQuerySelector,
    hasInteractiveChildren,
    disableScroll,
    disableOpacityMasks,
    onScrollPrevious,
    onScrollNext,
    overflowRef,
  });

  const contextValue = useMemo(() => ({
    overflowRef,
    setOverflowRef,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
  }), [
    overflowRef,
    setOverflowRef,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
  ]);

  return (
    <div
      className="pgn__overflow-scroll"
      role="region"
      aria-label={ariaLabel}
    >
      <OverflowScrollContext.Provider value={contextValue}>
        {children}
      </OverflowScrollContext.Provider>
    </div>
  );
}

OverflowScroll.Items = OverflowScrollItems;

OverflowScroll.propTypes = {
  /** Text describing the OverflowScroll for screen readers */
  ariaLabel: PropTypes.string.isRequired,
  /** Specifies the content of the `OverflowScroll`. */
  children: PropTypes.node.isRequired,
  /** A CSS query selector to find all child elements within the overflow container. */
  childQuerySelector: PropTypes.string,
  /** Whether the child `OverflowScroll` components are interactive/focusable. If not, a `tabindex="0"` is
   * added to be a11y-compliant */
  hasInteractiveChildren: PropTypes.bool,
  /** Whether users can scroll within the overflow container. */
  disableScroll: PropTypes.bool,
  /** Whether the default opacity masks should be shown at the start/end, if applicable. */
  disableOpacityMasks: PropTypes.bool,
  /** Callback function for when the user scrolls to the previous element. */
  onScrollPrevious: PropTypes.func,
  /** Callback function for when the user scrolls to the next element. */
  onScrollNext: PropTypes.func,
};

OverflowScroll.defaultProps = {
  childQuerySelector: undefined,
  disableScroll: false,
  hasInteractiveChildren: false,
  disableOpacityMasks: false,
  onScrollPrevious: undefined,
  onScrollNext: undefined,
};

export default OverflowScroll;
