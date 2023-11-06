import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const STYLE_VARIANTS = ['primary', 'success', 'error', 'warning'] as const;

export type BubbleVariant = typeof STYLE_VARIANTS[number];

export interface BubbleProps {
  children?: any;
  variant?: BubbleVariant;
  disabled?: boolean;
  className?: string;
  expandable?: boolean;
}

const Bubble = React.forwardRef<HTMLDivElement, BubbleProps>(({
  variant,
  className,
  children,
  disabled,
  expandable,
  ...props
}, ref) => (
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

Bubble.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node,
  /** The `Bubble` style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Activates disabled variant. */
  disabled: PropTypes.bool,
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies whether to add padding to the `Bubble` or not. */
  expandable: PropTypes.bool,
};

Bubble.defaultProps = {
  children: undefined,
  variant: 'primary',
  disabled: false,
  className: undefined,
  expandable: false,
};

export default Bubble;
