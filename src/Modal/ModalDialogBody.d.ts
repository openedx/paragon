import * as React from 'react';

export interface ModalDialogBodyProps {
  as?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  className?: string;
}

declare const ModalDialogBody = React.FC<ModalDialogBodyProps>;

export default ModalDialogBody;
