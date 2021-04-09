import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalDialogHeader = ({
  as,
  children,
  ...props
}) => React.createElement(
  as,
  {
    ...props,
    className: classNames('pgn__modal-header', props.className),
  },
  children,
);

ModalDialogHeader.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalDialogHeader.defaultProps = {
  as: 'div',
  className: undefined,
};

export default ModalDialogHeader;
