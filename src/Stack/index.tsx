import React, { forwardRef, ForwardedRef } from 'react';
import classNames from 'classnames';

const DIRECTION_VARIANTS = [
  'horizontal',
  'vertical',
];

interface StackProps {
  /** Specifies the content of the `Stack`. */
  children: React.ReactNode;
  /** Specifies direction of the children blocks (column/row). */
  direction?: typeof DIRECTION_VARIANTS[number];
  /**
   * Specifies inner space between children blocks.
   *
   * Valid values are based on `the spacing classes`:
   * `0, 0.5, ... 6`.
   */
  gap?: number;
  /** Specifies the order of the children. */
  reversed?: boolean;
  /** Specifies an additional `className` to add to the base element. */
  className?: string;
}

const Stack = forwardRef(({
  direction = 'vertical',
  gap = 0,
  reversed = false,
  children,
  className,
  ...rest
}: StackProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div
    ref={ref}
    className={classNames(
      direction === 'horizontal' ? 'pgn__hstack' : 'pgn__vstack',
      gap ? `pgn__stack-gap--${gap}` : '',
      reversed ? 'pgn__stack-reversed' : '',
      className,
    )}
    {...rest}
  >
    {children}
  </div>
));

export default Stack;
