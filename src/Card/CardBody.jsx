import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardBody = ({ className, children }) => (
  <div className={classNames('pgn__card-body', className)}>
    {children}
  </div>
);

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
