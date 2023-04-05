import { FC, ReactNode } from 'react';

export interface ISvgAttrs {
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export interface IconProps {
  src?: ReactNode | FC<ISvgAttrs>;
  svgAttrs?: ISvgAttrs,
  id?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string,
  hidden?: boolean,
  screenReaderText?: string | JSX.Element,
}

declare const Icon: FC<IconProps>;

export default Icon;
