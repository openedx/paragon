import React, { useContext, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import ModalContext from './ModalContext';

const ModalCloseButton = ({
  children, tag, onClick, ...props
}) => {
  const { close } = useContext(ModalContext);

  const handleClick = useCallback((e) => {
    close();
    if (onClick) onClick(e);
  })

  return React.createElement(
    tag,
    {
      ...props,
      onClick: handleClick,
    },
    children
  );
}

ModalCloseButton.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.elementType,
  handleClick: PropTypes.func,
};

ModalCloseButton.defaultProps = {
  children: undefined,
  tag: 'button',
  handleClick: undefined,
};

export default ModalCloseButton;

