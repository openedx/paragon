import React, { useContext } from 'react';
import OverflowScrollContext from './OverflowScrollContext';

export function OverflowScrollStartSentinel() {
  const { startSentinelRef } = useContext(OverflowScrollContext);
  return <div ref={startSentinelRef} />;
}

export function OverflowScrollEndSentinel() {
  const { endSentinelRef } = useContext(OverflowScrollContext);
  return <div ref={endSentinelRef} />;
}
