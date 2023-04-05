import * as React from 'react';

interface MenuItemProps extends React.HTMLAttributes<HTMLElement> {
  defaultSelected?: boolean;
  className?: string;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  iconBefore?: React.ReactNode;
  iconAfter?: React.ReactNode;
}

declare const MenuItem: React.FC<MenuItemProps>;

export default MenuItem;
