import React from 'react';

export interface CardSectionProps {
  title?: React.ReactNode,
  actions?: React.ReactNode,
  muted?: boolean,
  skeletonHeight?: number,
  skeletonWidth?: number,
  className?: string,
  children?: React.ReactNode,
}
declare const CardSection: React.ForwardRefExoticComponent<CardSectionProps>;
export default CardSection;
