import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Popover from 'react-bootstrap/Popover';
import PopoverContent from 'react-bootstrap/PopoverContent';
import PopoverTitle from 'react-bootstrap/PopoverTitle';

const WrapperPopover = React.forwardRef(({
  children,
  variant,
  ...props
}, ref) => (
  <Popover
    {...props}
    className={classNames(`popover-${variant}`, props.className)}
    ref={ref}
  >
    {children}
  </Popover>
));

WrapperPopover.propTypes = {
  ...Popover.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  variant: PropTypes.string,
};

WrapperPopover.defaultProps = {
  ...Popover.defaultProps,
  children: undefined,
  className: undefined,
  variant: undefined,
};

WrapperPopover.Content = PopoverContent;
WrapperPopover.Title = PopoverTitle;

export default WrapperPopover;
export { default as PopoverTitle } from 'react-bootstrap/PopoverTitle';
export { default as PopoverContent } from 'react-bootstrap/PopoverContent';
export { default as ProgressBar } from 'react-bootstrap/ProgressBar';
