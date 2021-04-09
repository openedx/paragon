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
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

ModalDialogTitle.defaultProps = {
  as: 'h3',
  className: undefined,
};

export default ModalDialogTitle;
