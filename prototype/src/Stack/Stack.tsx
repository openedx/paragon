import React from 'react';
import clsx from 'clsx';

import styles from './Stack.module.css';

export interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Specifies the content of the `Stack`. */
  children: React.ReactNode;
  /** Specifies direction of the children blocks (default: `vertical`). */
  direction?: 'horizontal' | 'vertical';
  /**
   * Inner space between children, on the Paragon spacer scale.
   *
   * Valid values match the `--pgn-spacing-spacer-*` tokens:
   * `0, 1, 2, 3, 4, 5, 6` and the half-steps `1.5, 2.5, 3.5, 4.5, 5.5`.
   */
  gap?: number;
  /** Reverse the order of the children (default: `false`). */
  reversed?: boolean;
  /** Specifies an additional `className` to add to the base element. */
  className?: string;
}

/**
 * Flexbox layout helper. A vertical or horizontal `Stack` that spaces its
 * children using Paragon's spacer design tokens.
 *
 * This is a 1:1 port of `@openedx/paragon`'s `Stack`: the public API
 * (`direction`, `gap`, `reversed`, `className`, DOM passthrough) is unchanged.
 * The only internal difference is that the global `pgn__*stack` classes become
 * locally-scoped CSS Module classes, and the gap is resolved to the matching
 * `--pgn-spacing-spacer-*` token via the `--pgn-stack-gap` custom property
 * rather than the SCSS `@each` loop.
 */
export const Stack = React.forwardRef<HTMLDivElement, StackProps>((
  {
    direction = 'vertical',
    gap = 0,
    reversed = false,
    children,
    className,
    ...rest
  },
  ref,
) => (
  <div
    ref={ref}
    className={clsx(
      direction === 'horizontal' ? styles.hstack : styles.vstack,
      reversed && styles.reversed,
      // Select the spacer-scale gap class (e.g. 1.5 -> `gap-1-5`). All styling
      // lives in the CSS Module; the component sets no inline styles.
      styles[`gap-${String(gap).replace('.', '-')}`],
      className,
    )}
    {...rest}
  >
    {children}
  </div>
));

Stack.displayName = 'Stack';

export default Stack;
