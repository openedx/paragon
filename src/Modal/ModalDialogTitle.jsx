import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ModalDialogTitle = ({
  as,
  children,
  ...props
}) => React.createElement(
  as,
  {
    ...props,
    className: classNames('pgn__modal-title', props.className),
  },
  children,
);

ModalDialogTitle.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ModalDialogTitle.defaultProps = {
  as: 'h2',
  className: undefined,
};

export default ModalDialogTitle;
