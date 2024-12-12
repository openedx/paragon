import React from 'react';

export interface CardStatusProps {
  variant?: 'success' | 'primary' | 'warning' | 'danger',
  icon?: React.ReactElement,
  title?: React.ReactNode,
  className?: string,
  children?: React.ReactNode,
}
declare const CardStatus: React.ForwardRefExoticComponent<CardStatusProps>;
export default CardStatus;
