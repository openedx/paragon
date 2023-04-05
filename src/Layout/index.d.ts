import * as React from 'react';
import { RowProps } from 'react-bootstrap';

export type LayoutElementProps = React.HTMLAttributes<HTMLDivElement>;
export type ColSpanValue = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';

export declare const LayoutElement: React.ForwardRefExoticComponent<
LayoutElementProps & React.RefAttributes<HTMLDivElement>>;

export interface ColLayout {
  span: ColSpanValue;
  offset?: number;
}

export interface LayoutProps extends RowProps {
  children: React.ReactNode;
  xs?: ColLayout[];
  sm?: ColLayout[];
  md?: ColLayout[];
  lg?: ColLayout[];
  xl?: ColLayout[];
}

export interface LayoutComponent extends React.ForwardRefExoticComponent<
LayoutProps & React.RefAttributes<HTMLDivElement>
> {
  Element: typeof LayoutElement;
}

declare const Layout: LayoutComponent;

export default Layout;
