import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useOverflowScroll } from './data';
import OverflowScrollContext from './OverflowScrollContext';
import {
  OverflowScrollStartSentinel,
  OverflowScrollEndSentinel,
} from './OverflowScrollSentinels';
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
    startSentinelRef,
    endSentinelRef,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
    isOverflowElementVisible,
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
    startSentinelRef,
    endSentinelRef,
    isScrolledToStart,
    isScrolledToEnd,
    scrollToPrevious,
    scrollToNext,
    isOverflowElementVisible,
  }), [
    endSentinelRef,
    isScrolledToEnd,
    isScrolledToStart,
    overflowRef,
    scrollToNext,
    scrollToPrevious,
    startSentinelRef,
    isOverflowElementVisible,
  ]);

  return (
    <div
      role="region"
      aria-label={ariaLabel}
      className="pgn__overflow-scroll"
    >
      <OverflowScrollContext.Provider value={contextValue}>
        {children}
      </OverflowScrollContext.Provider>
    </div>
  );
}

OverflowScroll.StartSentinel = OverflowScrollStartSentinel;
OverflowScroll.EndSentinel = OverflowScrollEndSentinel;
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
