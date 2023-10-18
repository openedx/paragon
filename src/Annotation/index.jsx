import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Annotation = React.forwardRef(({
  className,
  variant,
  children,
  arrowPlacement,
  ...props
}, ref) => (
  <span
    className={classNames(
      className,
      'pgn__annotation',
      `pgn__annotation-${variant}-${arrowPlacement}`,
    )}
    ref={ref}
    {...props}
  >
    {children}
  </span>
));

Annotation.defaultProps = {
  className: undefined,
  variant: 'success',
  arrowPlacement: 'bottom',
};

Annotation.propTypes = {
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies variant to use. */
  variant: PropTypes.oneOf(['error', 'success', 'warning', 'light', 'dark']),
  /** Specifies arrow position. */
  arrowPlacement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

export default Annotation;
