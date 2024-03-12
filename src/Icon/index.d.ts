import React from 'react';

export interface IconProps {
  src?: React.ReactElement | Function;
  svgAttrs?: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
  };
  id?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  className?: string | string[];
  hidden?: boolean;
  screenReaderText?: React.ReactNode;
}

declare const Icon: React.FC<IconProps>;

export default Icon;
