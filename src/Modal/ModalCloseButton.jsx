import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ModalContext from './ModalContext';
import Button from '../Button';

const ModalCloseButton = React.forwardRef(({ as, children, ...props }, ref) => {
  const { onClose } = useContext(ModalContext);
  const type = as;
  const componentProps = {
    ...props,
    className: classNames('pgn__modal-close-button', props.className),
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
  /** Specifies the base element */
  as: PropTypes.elementType,
  /** Specifies the content of the button */
  children: PropTypes.node,
  /** Specifies class name to append to the base element */
  className: PropTypes.string,
  /** Specifies the callback function when the close button is clicked */
  onClick: PropTypes.func,
};

ModalCloseButton.defaultProps = {
  as: Button,
  onClick: undefined,
  className: undefined,
  children: null,
};

export default ModalCloseButton;
