import { FC, ReactNode } from 'react';

export interface IMenu {
  className?: string;
  arrowKeyNavigationSelector?: string;
  as?: ElementType;
  children?: ReactNode;
}

export interface IMenuItem {
  defaultSelected?: boolean;
  className?: string;
  children?: ReactNode;
  as?: ElementType;
  iconBefore?: ReactNode;
  iconAfter?: ReactNode;
}

declare const Menu: FC<IMenu>;

export default Menu;
