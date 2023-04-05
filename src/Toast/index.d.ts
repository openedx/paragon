import * as React from 'react';

export interface ToastActionProps {
  label: string;
  href?: string;
  onClick?: () => void;
}

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  onClose: () => void;
  show: boolean;
  action?: ToastActionProps;
  closeLabel?: string;
  delay?: number;
  className?: string;
}

// export const TOAST_CLOSE_LABEL_TEXT: string;
// export const TOAST_DELAY: number;

declare function Toast(props: ToastProps): JSX.Element;

export default Toast;
