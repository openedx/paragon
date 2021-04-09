import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalDialogFooter = ({
  as: Component,
  children,
  ...props
}) => (
  <Component
    className={classNames('pgn__modal-footer', props.className)}
  >
    {children}
  </Component>
);

ModalDialogFooter.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalDialogFooter.defaultProps = {
  as: 'div',
  className: undefined,
};

export default ModalDialogFooter;
