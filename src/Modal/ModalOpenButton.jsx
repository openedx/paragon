import React, { useContext, useCallback } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { ModalContext } from './index';

const ModalOpenButton = ({
  children, tag, onClick, ...props
}) => {
  const { open } = useContext(ModalContext);

  const handleClick = useCallback((e) => {
    open();
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

ModalOpenButton.propTypes = {
  children: PropTypes.node,
  tag: PropTypes.elementType,
  handleClick: PropTypes.func,
};

ModalOpenButton.defaultProps = {
  children: undefined,
  tag: 'button',
  handleClick: undefined,
};

export default ModalOpenButton;

