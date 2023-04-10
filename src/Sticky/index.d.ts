import React from 'react';

export interface StickyProps {
  children: React.ReactNode;
  position?: 'top' | 'bottom';
  offset?: number | string;
  className?: string;
}

declare const Sticky: React.ForwardRefExoticComponent<StickyProps>;

export default Sticky;
