import React, { ForwardedRef } from 'react';
import BaseBadge from 'react-bootstrap/Badge';
import { ComponentWithAsProp } from '../utils/types/bootstrap';

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

interface BadgeProps {
  /** Specifies element type for this component */
  as?: React.ElementType;
  /** Visual style of the badge. The full type definition can be seen [here](https://github.com/openedx/paragon/blob/release-23.x/src/Badge/index.tsx) */
  variant?: typeof STYLE_VARIANTS[number];
  /** Add the `pill` modifier to make badges more rounded with some additional horizontal padding */
  pill?: boolean;
  /** Overrides underlying component base CSS class name */
  bsPrefix?: string;
}

const Badge: ComponentWithAsProp<'span', BadgeProps> = React.forwardRef(({
  as = 'span', variant = 'primary', pill = false, bsPrefix = 'badge', ...props
}: BadgeProps, ref: ForwardedRef<HTMLSpanElement>) => (
  <BaseBadge as={as} variant={variant} pill={pill} bsPrefix={bsPrefix} {...props} ref={ref} />
));

export default Badge;
