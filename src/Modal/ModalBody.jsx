import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ModalBody = ({
  children, tag, className, ...props
}) => React.createElement(
  tag,
  {
    ...props,
    className: classNames('modal-body', className),
  },
  children
);

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType,
};

ModalBody.defaultProps = {
  children: undefined,
  className: undefined,
  tag: 'div',
};

export default ModalBody;
