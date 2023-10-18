import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardBody = React.forwardRef(({ className, children, ...rest }, ref) => (
  <div className={classNames('pgn__card-body', className)} ref={ref} {...rest}>
    {children}
  </div>
));

CardBody.propTypes = {
  /** Specifies the content of the component. */
  children: PropTypes.node,
  /** The class to append to the base element. */
  className: PropTypes.string,
};

CardBody.defaultProps = {
  children: undefined,
  className: undefined,
};

export default CardBody;
