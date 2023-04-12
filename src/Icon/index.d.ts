import React from 'react';

export interface IconProps {
  src?: React.ReactElement | Function;
  svgAttrs?: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
  };
  id?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string;
  hidden?: boolean;
  screenReaderText?: string | React.ReactNode;
}

declare const Icon: React.FC<IconProps>;

export default Icon;
