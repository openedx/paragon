import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ModalHeader = ({
  children, tag, className, ...props
}) => React.createElement(
  tag,
  {
    ...props,
    className: classNames('modal-header', className),
  },
  children
);

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType,
};

ModalHeader.defaultProps = {
  children: undefined,
  className: undefined,
  tag: 'div',
};

export default ModalHeader;
