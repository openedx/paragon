import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const ModalFooter = ({
  children, tag, className, ...props
}) => React.createElement(
  tag,
  {
    ...props,
    className: classNames('modal-footer', className),
  },
  children
);

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.elementType,
};

ModalFooter.defaultProps = {
  children: undefined,
  className: undefined,
  tag: 'div',
};

export default ModalFooter;
