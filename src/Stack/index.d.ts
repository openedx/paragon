import React from 'react';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  direction?: 'horizontal' | 'vertical';
  gap?: number;
  className?: string;
}

declare const Stack: React.ForwardRefExoticComponent<StackProps>;

export default Stack;
