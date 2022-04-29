import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const componentName = React.forwardRef(({ className, children }, ref) => (
  <div ref={ref} className={classNames('pgn__css-class', className)}>
    {children}
  </div>
));

componentName.defaultProps = {
  className: undefined,
};

componentName.propTypes = {
  /** A class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies contents of the component. */
  children: PropTypes.node.isRequired,
};

export default componentName;
