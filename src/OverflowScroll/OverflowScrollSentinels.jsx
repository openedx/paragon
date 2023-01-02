import React, { useContext } from 'react';
import OverflowScrollContext from './OverflowScrollContext';

export function OverflowScrollStartSentinel(props) {
  const { startSentinelRef } = useContext(OverflowScrollContext);
  return <div ref={startSentinelRef} {...props} />;
}

export function OverflowScrollEndSentinel(props) {
  const { endSentinelRef } = useContext(OverflowScrollContext);
  return <div ref={endSentinelRef} {...props} />;
}
