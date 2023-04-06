import * as React from 'react';

export interface ModalCloseButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

declare const ModalCloseButton: React.ForwardRefExoticComponent<
ModalCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;

export default ModalCloseButton;
