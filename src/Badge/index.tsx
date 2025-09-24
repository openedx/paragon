import React, { ForwardedRef } from 'react';
import BaseBadge from 'react-bootstrap/Badge';

const STYLE_VARIANTS = [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning',
  'info',
  'light',
  'dark',
];

interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
  /** Specifies element type for this component */
  as?: React.ElementType;
  /** Visual style of the badge. The full type definition can be seen [here](https://github.com/openedx/paragon/blob/release-23.x/src/Badge/index.tsx) */
  variant?: typeof STYLE_VARIANTS[number];
  /** Add the `pill` modifier to make badges more rounded with some additional horizontal padding */
  pill?: boolean;
  /** Overrides underlying component base CSS class name */
  bsPrefix?: string;
}

const Badge = React.forwardRef(({
  as = 'span', variant = 'primary', pill = false, bsPrefix = 'badge', ...props
}: BadgeProps, ref: ForwardedRef<HTMLElement>) => (
  <BaseBadge as={as} variant={variant} pill={pill} bsPrefix={bsPrefix} {...props} ref={ref} />
));

export default Badge;
