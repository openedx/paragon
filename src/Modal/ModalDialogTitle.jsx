import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function ModalDialogTitle({
  as,
  children,
  ...props
}) {
  return React.createElement(
    as,
    {
      ...props,
      className: classNames('pgn__modal-title', props.className),
    },
    children,
  );
}

ModalDialogTitle.propTypes = {
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the contents of the header */
  children: PropTypes.node.isRequired,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
};

ModalDialogTitle.defaultProps = {
  as: 'h2',
  className: undefined,
};

export default ModalDialogTitle;
