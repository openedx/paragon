import * as React from 'react';

export type DirectionVariants = 'horizontal' | 'vertical';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: DirectionVariants;
  gap?: number;
  className?: string;
}

declare const Stack: React.ForwardRefExoticComponent<StackProps>;

export default Stack;
