import React from 'react';
import { useResizeDetector } from 'react-resize-detector';

const CardDivider = () => {
  const { width, height, ref } = useResizeDetector({
    refreshMode: 'throttle',
    refreshRate: 200,
  });
  return (
    <div ref={ref}>
      {`${width}x${height}`}
    </div>
  );
};

export default CardDivider;
