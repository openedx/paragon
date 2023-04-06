/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
import * as React from 'react';

export interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  variant?: string;
  type?: string;
}

export interface ModalProps {
  open?: boolean;
  parentSelector?: string;
  title: string | React.ReactNode;
  body: string | React.ReactNode;
  buttons?: (React.ReactNode | ButtonProps)[];
  closeText?: string | React.ReactNode;
  onClose: () => void;
  variant?: {
    status?: string;
  };
  renderDefaultCloseButton?: boolean;
  renderHeaderCloseButton?: boolean;
  dialogClassName?: string;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Modal extends React.Component<ModalProps> {}
