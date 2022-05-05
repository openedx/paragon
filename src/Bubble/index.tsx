import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const STYLE_VARIANTS = ['primary', 'success', 'error', 'warning'] as const;

export type BubbleVariant = typeof STYLE_VARIANTS[number];

export interface BubbleProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'error' | 'warning';
  disabled?: boolean;
  className?: string;
}

const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>(({
  variant,
  className,
  children,
  disabled,
  ...props
}, ref) => (
  <div
    ref={ref}
    className={classNames(
      'pgn__bubble',
      `pgn__bubble-${variant}`,
      className,
      { disabled },
    )}
    {...props}
  >
    {children}
  </div>
));

Bubble.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** The `Bubble` style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Activates disabled variant. */
  disabled: PropTypes.bool,
  /** A class name to append to the base element. */
  className: PropTypes.string,
};

Bubble.defaultProps = {
  variant: 'primary',
  disabled: false,
  className: undefined,
};

export default Bubble;
