import React from 'react';

export interface AnnotationProps {
  className?: string,
  variant?: 'error' | 'success' | 'warning' | 'light' | 'dark',
  children?: React.ReactNode,
  arrowPlacement?: 'top' | 'right' | 'bottom' | 'left',
}
declare const Annotation: React.ForwardRefExoticComponent<AnnotationProps>;
export default Annotation;
