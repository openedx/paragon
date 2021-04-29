import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Tooltip from 'react-bootstrap/Tooltip';

const WrapperTooltip = React.forwardRef(({
  children,
  variant,
  ...props
}, ref) => (
  <Tooltip
    {...props}
    className={classNames({ 'tooltip-light': variant === 'light' }, props.className)}
    ref={ref}
  >
    {children}
  </Tooltip>
));

WrapperTooltip.propTypes = {
  ...Tooltip.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
};

WrapperTooltip.defaultProps = {
  ...Tooltip.defaultProps,
  children: undefined,
  className: undefined,
  variant: undefined,
};

export default WrapperTooltip;
