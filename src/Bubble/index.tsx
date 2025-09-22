import type { ReactNode, ForwardedRef } from 'react';
import { forwardRef } from 'react';
import classNames from 'classnames';

export type BubbleVariant = 'primary' | 'success' | 'error' | 'warning';

export interface BubbleProps {
  /** Specifies contents of the component. */
  children: ReactNode;
  /** The `Bubble` style variant to use. */
  variant?: BubbleVariant;
  /** Activates disabled variant. */
  disabled?: boolean;
  /** Optional class name(s) to append to the base element. */
  className?: string;
  /** Specifies whether to add padding to the `Bubble` or not. */
  expandable?: boolean;
}

const Bubble = forwardRef(({
  variant = 'primary',
  className,
  children = null,
  disabled = false,
  expandable = false,
  ...props
}: BubbleProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div
    ref={ref}
    className={classNames(
      'pgn__bubble',
      `pgn__bubble-${variant}`,
      className,
      { disabled, expandable },
    )}
    {...props}
  >
    {children}
  </div>
));

export default Bubble;
