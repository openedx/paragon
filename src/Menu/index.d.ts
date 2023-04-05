import * as React from 'react';

export interface IMenu {
  className?: string;
  arrowKeyNavigationSelector?: string;
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
}

declare const Menu: React.FC<IMenu>;

export default Menu;
