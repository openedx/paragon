import React from 'react';

interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  defaultSelected?: boolean;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
  disabled?: boolean;
  href?: string;
  variant?: string;
  size?: string;
}

declare const MenuItem: React.FC<MenuItemProps>;

export default MenuItem;
