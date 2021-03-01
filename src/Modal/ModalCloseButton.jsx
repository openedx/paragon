import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '..';
import ModalContext from './ModalContext';

const ModalCloseButton = React.forwardRef(({ as, children, ...props }, ref) => {
  const { onClose } = useContext(ModalContext);
  const type = as;
  const componentProps = {
    ...props,
    onClick: () => {
      onClose();
      if (props.onClick) {
        props.onClick();
      }
    },
    ref,
  };

  // Use the non-jsx syntax to create this element so we can more
  // finely control the component type (defaulted to Button via defaultProps)
  return React.createElement(type, componentProps, children);
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
