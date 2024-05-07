import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BaseTooltip, { type TooltipProps as BaseTooltipProps } from 'react-bootstrap/Tooltip';
import { type Placement } from 'react-bootstrap/Overlay';
import type { ComponentWithAsProp } from '../utils/types/bootstrap';

interface TooltipProps extends BaseTooltipProps {
  variant?: 'light';
}

const PLACEMENT_VARIANTS: Placement[] = [
  'auto-start',
  'auto',
  'auto-end',
  'top-start',
  'top',
  'top-end',
  'right-start',
  'right',
  'right-end',
  'bottom-end',
  'bottom',
  'bottom-start',
  'left-end',
  'left',
  'left-start',
];

const Tooltip: ComponentWithAsProp<'div', TooltipProps> = React.forwardRef(({
  children,
  variant,
  ...props
}, ref) => (
  <BaseTooltip
    {...props}
    className={classNames({ 'tooltip-light': variant === 'light' }, props.className)}
    ref={ref}
  >
    {children}
  </BaseTooltip>
));

Tooltip.propTypes = {
  ...BaseTooltip.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: PropTypes.string.isRequired,
  /**
   * Sets the direction the `Tooltip` is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  placement: PropTypes.oneOf(PLACEMENT_VARIANTS),
  /**
   * An `Overlay` injected set of props for positioning the `Tooltip` arrow.
   *
   * This is generally provided by the `Overlay` component positioning the tooltip.
   */
  arrowProps: PropTypes.shape({
    ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.element }),
    ]),
    style: PropTypes.shape({}),
  }),
  /** Whether the `Overlay` is shown. */
  show: PropTypes.bool,
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: PropTypes.shape({}),
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
  /** Specifies the content of the `Tooltip` */
  children: PropTypes.node,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** The visual style of the `Tooltip` */
  variant: PropTypes.string,
};

Tooltip.defaultProps = {
  ...Tooltip.defaultProps,
  id: undefined,
  placement: 'right',
  arrowProps: undefined,
  show: undefined,
  popper: undefined,
  children: undefined,
  className: undefined,
  variant: undefined,
  bsPrefix: 'tooltip',
};

export default Tooltip;
