import * as React from 'react';

export type PositionVariant = 'top' | 'bottom';

export interface StickyProps {
  children: React.ReactNode;
  position?: PositionVariant;
  offset?: number | string;
  className?: string;
}

declare const Sticky: React.ForwardRefExoticComponent<StickyProps & React.RefAttributes<HTMLDivElement>>;

export default Sticky;
