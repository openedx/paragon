import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import ModalContext from './ModalContext';

const ModalCloseButton = React.forwardRef(({
  as, children, onClick, ...props
}, ref) => {
  const { close } = useContext(ModalContext);

  return React.createElement(
    as,
    {
      ...props,
      onClick: () => {
        close();
        if (onClick) {
          onClick();
        }
      },
      ref,
    },
    children,
  );
});

ModalCloseButton.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

ModalCloseButton.defaultProps = {
  as: Button,
  onClick: undefined,
};

export default ModalCloseButton;
