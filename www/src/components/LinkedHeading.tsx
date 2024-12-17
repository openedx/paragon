import React from 'react';

export interface ILinkedHeading {
  h: string,
  children?: React.ReactNode,
  id?: string,
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

function LinkedHeading({
  h,
  children,
  id,
}: ILinkedHeading & JSX.IntrinsicElements['h2']): React.ReactNode {
  const H = `h${h}` as HeadingTag;

  return (
    <H id={id} className="pgn-doc__heading">
      {children}
    </H>
  );
}

export default LinkedHeading;
