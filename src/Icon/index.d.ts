import * as React from 'react';

export type IconSizes = 'xs' | 'sm' | 'md' | 'lg';

export interface SvgAttrs {
  'aria-label'?: string;
  'aria-labelledby'?: string;
}

export interface IconProps {
  src?: ReactElement | FC<{}>;
  svgAttrs?: SvgAttrs;
  id?: string;
  size?: IconSizes;
  className?: string;
  hidden?: boolean;
  screenReaderText?: string | React.ReactNode;
}

declare const Icon: React.FC<IconProps>;

export default Icon;
