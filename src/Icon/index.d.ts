import React from 'react';

export interface IconProps extends React.ComponentPropsWithoutRef<'span'> {
  // Note: React.ComponentType is what we want here. React.ElementType would allow some element type strings like "div",
  // but we only want to allow components like 'Add' (a specific icon component function/class)
  src?: React.ComponentType;
  svgAttrs?: {
    'aria-label'?: string;
    'aria-labelledby'?: string;
  };
  id?: string | null;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'inline';
  className?: string | string[];
  hidden?: boolean;
  screenReaderText?: React.ReactNode;
}

declare const Icon: React.FC<IconProps>;

export default Icon;
