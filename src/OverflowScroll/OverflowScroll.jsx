import React, { useMemo } from 'react';
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
  const {
    overflowRef,
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
  });

  const contextValue = useMemo(() => ({
    overflowRef,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
  }), [
    overflowRef,
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
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  childQuerySelector: PropTypes.string,
  hasInteractiveChildren: PropTypes.bool,
  disableScroll: PropTypes.bool,
  disableOpacityMasks: PropTypes.bool,
  onScrollPrevious: PropTypes.func,
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
