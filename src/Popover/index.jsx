import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import BasePopover from 'react-bootstrap/Popover';
import BasePopoverTitle from 'react-bootstrap/PopoverTitle';
import BasePopoverContent from 'react-bootstrap/PopoverContent';

const PLACEMENT_VARIANTS = [
  'auto',
  'top',
  'bottom',
  'left',
  'right',
];

const Popover = React.forwardRef(({
  children,
  variant,
  ...props
}, ref) => (
  <BasePopover
    {...props}
    className={classNames({ [`popover-${variant}`]: !!variant }, props.className)}
    ref={ref}
  >
    {children}
  </BasePopover>
));

function PopoverTitle(props) {
  return <BasePopoverTitle {...props} />;
}
function PopoverContent(props) {
  return <BasePopoverContent {...props} />;
}

const commonPropTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

PopoverTitle.propTypes = commonPropTypes;
PopoverContent.propTypes = commonPropTypes;

Popover.propTypes = {
  ...BasePopover.propTypes,
  /** An html id attribute, necessary for accessibility. */
  id: PropTypes.string.isRequired,
  /**
   * Sets the direction the Popover is positioned towards.
   *
   * This is generally provided by the `Overlay` component positioning the popover.
   */
  placement: PropTypes.oneOf(PLACEMENT_VARIANTS),
  /**
   * When this prop is set, it creates a `Popover` with
   * a `Popover.Title` inside passing the children directly to it.
   */
  title: PropTypes.string,
  /**
   * An `Overlay` injected set of props for positioning the popover arrow.
   *
   * This is generally provided by the `Overlay` component positioning the popover.
   */
  arrowProps: PropTypes.shape({
    ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.element }),
    ]),
    style: PropTypes.shape({}),
  }),
  /**
   * When this prop is set, it creates a `Popover` with
   * a `Popover.Content` inside passing the children directly to it.
   */
  content: PropTypes.bool,
  /** A `Popper.js` config object passed to the the underlying popper instance. */
  popper: PropTypes.shape({}),
  /** Whether the `Overlay` is shown. */
  show: PropTypes.bool,
  /** Specifies the content of the `Overlay` */
  children: PropTypes.node,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** The visual style of the `Overlay` */
  variant: PropTypes.string,
};

Popover.defaultProps = {
  ...BasePopover.defaultProps,
  placement: 'right',
  title: undefined,
  arrowProps: undefined,
  content: undefined,
  popper: undefined,
  show: undefined,
  children: undefined,
  className: undefined,
  variant: undefined,
};

PopoverTitle.defaultProps = {
  as: 'div',
  bsPrefix: 'popover-header',
};

PopoverContent.defaultProps = {
  as: 'div',
  bsPrefix: 'popover-body',
};

Popover.Title = PopoverTitle;
Popover.Content = PopoverContent;

export { PopoverTitle, PopoverContent };
export default Popover;
