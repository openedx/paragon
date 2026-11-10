import React, { forwardRef, ForwardedRef, ReactNode } from 'react';

interface CheckpointTitleProps {
  children?: ReactNode;
}

const CheckpointTitle = forwardRef(({
  children = null,
}: CheckpointTitleProps, ref: ForwardedRef<HTMLHeadingElement>) => (
  <h2 id="pgn__checkpoint-title" ref={ref}>
    {children}
  </h2>
));

export default CheckpointTitle;
