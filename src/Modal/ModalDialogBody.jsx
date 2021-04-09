import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalDialogBody = ({
  as: Component,
  children,
  ...props
}) => {
  const className = classNames('pgn__modal-body', props.className);

  return (
    <Component {...props} className={className}>
      {children}
    </Component>
  );
};

ModalDialogBody.propTypes = {
  as: PropTypes.elementType,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalDialogBody.defaultProps = {
  as: 'div',
  className: undefined,
};

export default ModalDialogBody;
