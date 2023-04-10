import React from 'react';

export interface ScrollableProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

declare function Scrollable(props: ScrollableProps): JSX.Element;

export default Scrollable;
