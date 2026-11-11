import React, { forwardRef, ForwardedRef, ReactNode } from 'react';

interface CheckpointBodyProps {
  children?: ReactNode;
}

const CheckpointBody = forwardRef(({
  children = null,
}: CheckpointBodyProps, ref: ForwardedRef<HTMLDivElement>) => {
  if (!children) {
    return null;
  }

  return (
    <div className="pgn__checkpoint-body" ref={ref}>
      {children}
    </div>
  );
});

export default CheckpointBody;
