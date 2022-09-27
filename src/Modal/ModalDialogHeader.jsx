import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ModalDialogHeader({
  as,
  children,
  ...props
}) {
  return React.createElement(
    as,
    {
      ...props,
      className: classNames('pgn__modal-header', props.className),
    },
    children,
  );
}

ModalDialogHeader.propTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the contents of the header */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
};

ModalDialogHeader.defaultProps = {
  as: 'div',
  className: undefined,
};

export default ModalDialogHeader;
