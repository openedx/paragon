'use client';

import React, { forwardRef } from 'react';
import classNames from 'classnames';
import RBContainer from 'react-bootstrap/Container';
import PropTypes from 'prop-types';

const SIZE_CLASS_NAMES = {
  xs: 'container-mw-xs',
  sm: 'container-mw-sm',
  md: 'container-mw-md',
  lg: 'container-mw-lg',
  xl: 'container-mw-xl',
};

const Container = forwardRef(({ size, children, ...props }, ref) => (
  <RBContainer
    {...props}
    ref={ref}
    className={classNames(
      props.className,
      SIZE_CLASS_NAMES[size],
    )}
  >
    {children}
  </RBContainer>
));

Container.propTypes = {
  ...RBContainer.propTypes,
  /** Override the base element */
  as: PropTypes.elementType,
  /** Specifies the contents of the container */
  children: PropTypes.node,
  /** Fill all available space at any breakpoint */
  fluid: PropTypes.bool,
  /** Set the maximum width for the container */
  size: PropTypes.oneOf(Object.keys(SIZE_CLASS_NAMES)),
  /** Overrides underlying component base CSS class name */
  bsPrefix: PropTypes.string,
};

Container.defaultProps = {
  as: 'div',
  children: undefined,
  fluid: true,
  size: undefined,
  bsPrefix: 'container',
};

export default Container;
