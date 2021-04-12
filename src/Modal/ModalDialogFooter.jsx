import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalDialogFooter = ({
  as,
  children,
  ...props
}) => React.createElement(
  as,
  {
    ...props,
    className: classNames('pgn__modal-footer', props.className),
  },
  children,
);

ModalDialogFooter.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalDialogFooter.defaultProps = {
  as: 'div',
  className: undefined,
};

export default ModalDialogFooter;
