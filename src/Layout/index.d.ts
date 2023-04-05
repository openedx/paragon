import { FC, ReactNode } from 'react';

export interface ILayout {
  children: ReactNode;
  xs?: { span: number | 'auto'; offset?: number | 'auto' }[];
  sm?: { span: number | 'auto'; offset?: number | 'auto' }[];
  md?: { span: number | 'auto'; offset?: number | 'auto' }[];
  lg?: { span: number | 'auto'; offset?: number | 'auto' }[];
  xl?: { span: number | 'auto'; offset?: number | 'auto' }[];
  [key: string]: any;
}

declare const Layout: FC<ILayout>;

export default Layout;
