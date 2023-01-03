import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import useOverflowScroll from './useOverflowScroll';
import OverflowScrollContext from './OverflowScrollContext';
import {
  OverflowScrollStartSentinel,
  OverflowScrollEndSentinel,
} from './OverflowScrollSentinels';

function OverflowScroll({
  children,
  childQuerySelector,
  hasInteractiveChildren,
  disableScroll,
  disableOpacityMasks,
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
    <OverflowScrollContext.Provider value={contextValue}>
      {children}
    </OverflowScrollContext.Provider>
  );
}

OverflowScroll.StartSentinel = OverflowScrollStartSentinel;
OverflowScroll.EndSentinel = OverflowScrollEndSentinel;

OverflowScroll.propTypes = {
  children: PropTypes.node.isRequired,
  childQuerySelector: PropTypes.string.isRequired,
  hasInteractiveChildren: PropTypes.bool,
  disableScroll: PropTypes.bool,
  disableOpacityMasks: PropTypes.bool,
};

OverflowScroll.defaultProps = {
  disableScroll: false,
  hasInteractiveChildren: false,
  disableOpacityMasks: false,
};

export default OverflowScroll;
