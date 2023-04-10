import React from 'react';

export type PopperElementPlacements = 'auto' | 'auto-start' | 'auto-end' | 'top' | 'top-start' | 'top-end' | 'bottom'
| 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';

export interface PopperElementProps {
  children?: React.ReactNode;
  target: {
    current: React.ReactNode;
  };
  strategy?: 'absolute' | 'fixed';
  placement?: PopperElementPlacements;
  modifiers?: {};
}

declare const PopperElement: React.FC<PopperElementProps>;

export default PopperElement;
