import React from 'react';

export type ColSpanValues = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'auto';

export interface ColLayout {
  span: ColSpanValues;
  offset?: number;
}

export interface LayoutProps {
  children: React.ReactNode;
  xs?: ColLayout[];
  sm?: ColLayout[];
  md?: ColLayout[];
  lg?: ColLayout[];
  xl?: ColLayout[];
}

export interface LayoutComponent extends React.ForwardRefExoticComponent<LayoutProps> {
  Element: React.FC<LayoutElement>;
}

export declare const LayoutElement: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

declare const Layout: LayoutComponent;

export default Layout;
