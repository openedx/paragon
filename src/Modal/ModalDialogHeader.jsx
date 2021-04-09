import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalDialogHeader = ({
  as: Component,
  children,
  variant,
  ...props
}) => (
  <div className={classNames('pgn__modal-header', props.className)}>
    {children}
  </div>
);

ModalDialogHeader.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalDialogHeader.defaultProps = {
  as: 'div',
  variant: 'default',
  className: undefined,
};

export default ModalDialogHeader;
