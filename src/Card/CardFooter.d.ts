import React from 'react';

export interface CardFooterProps {
  isStacked?: boolean,
  textElement?: React.ReactNode,
  skeletonHeight?: number,
  skeletonWidth?: number,
  orientation?: 'horizontal' | 'vertical',
  className?: string,
  children?: React.ReactNode,
}
declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps>;
export default CardFooter;
