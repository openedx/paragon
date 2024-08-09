import React from 'react';

export interface CardHeaderProps {
  actions?: React.ReactNode,
  size?: 'sm' | 'md',
  subtitle?: React.ReactNode,
  title?: React.ReactNode,
  skeletonHeight?: number,
  skeletonWidth?: number,
  className?: string,
}
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps>;
export default CardHeader;
