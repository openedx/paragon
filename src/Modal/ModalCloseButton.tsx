import {
  useContext, ReactNode, ElementType, forwardRef, createElement,
} from 'react';
import classNames from 'classnames';
import ModalContext from './ModalContext';
import Button from '../Button';

export interface ModalCloseButtonProps {
  /** Specifies the base element */
  as?: ElementType;
  /** Specifies the content of the button */
  children?: ReactNode;
  /** Specifies class name to append to the base element */
  className?: string;
  /** Specifies the callback function when the close button is clicked */
  onClick?: () => void;
  [key: string]: any; // For spreading other props
}

const ModalCloseButton = forwardRef(({
  as = Button,
  children = null,
  className,
  onClick,
  ...props
}: ModalCloseButtonProps, ref: React.Ref<HTMLButtonElement>) => {
  const { onClose } = useContext(ModalContext);
  const type = as;
  const componentProps = {
    ...props,
    className: classNames('pgn__modal-close-button', className),
    onClick: () => {
      onClose();
      if (onClick) {
        onClick();
      }
    },
    ref,
  };

  // Use the non-jsx syntax to create this element so we can more
  // finely control the component type (defaulted to Button via defaultProps)
  return createElement(type, componentProps, children);
});

ModalCloseButton.displayName = 'ModalCloseButton';

export default ModalCloseButton;
