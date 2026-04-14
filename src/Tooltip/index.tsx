import React from 'react';
import classNames from 'classnames';
import BaseTooltip, { type TooltipProps as BaseTooltipProps } from 'react-bootstrap/Tooltip';
import { type Placement } from 'react-bootstrap/Overlay';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';

interface TooltipProps extends BaseTooltipProps {
  // NOTE: we have to re-declare many inherited props so that they show up in the auto-generated docs.
  /** An html `id` attribute, necessary for accessibility. */
  id: string;
  /** The visual style variant of the `Tooltip`. Use `'light'` for a light-themed tooltip. */
  variant?: 'light';
  /** Whether the tooltip is currently visible. */
  show?: boolean;
  /**
   * Sets the direction the Tooltip is positioned towards.
   *
   * This is generally provided by the Overlay component positioning the tooltip.
   */
  placement?: (
    'auto' | 'auto-start' | 'auto-end'
    | 'top' | 'bottom' | 'right' | 'left'
    | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end'
  );
  /** Additional CSS class(es) to put on the tooltip element. */
  className?: string;
  /** A Popper.js config object passed to the the underlying popper instance. */
  popper?: any;
}

const Tooltip: ComponentWithAsProp<'div', TooltipProps> = React.forwardRef(({
  children,
  variant,
  placement = 'right' as Placement,
  bsPrefix = 'tooltip',
  ...props
}: TooltipProps, ref: React.ForwardedRef<HTMLDivElement>) => (
  <BaseTooltip
    {...props}
    placement={placement}
    bsPrefix={bsPrefix}
    className={classNames({ 'tooltip-light': variant === 'light' }, props.className)}
    ref={ref}
  >
    {children}
  </BaseTooltip>
));

export default Tooltip;
