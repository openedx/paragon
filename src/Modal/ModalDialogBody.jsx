import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalDialogBody = ({
  as,
  children,
  ...props
}) => React.createElement(
  as,
  {
    ...props,
    className: classNames('pgn__modal-body', props.className),
  },
  children,
);

ModalDialogBody.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalDialogBody.defaultProps = {
  as: 'div',
  className: undefined,
};

export default ModalDialogBody;
