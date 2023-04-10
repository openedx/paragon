import React from 'react';

export interface ModalContextValue {
  onClose: () => void;
  isOpen: boolean;
  isBlocking: boolean;
}

export interface ModalContextProviderProps {
  children?: React.ReactNode;
  onClose: () => void;
  isBlocking?: boolean;
  isOpen: boolean;
}

declare const ModalContext: React.FC<ModalContextValue>;

declare function ModalContextProvider(props: ModalContextProviderProps): JSX.Element;

export { ModalContextProvider };
export default ModalContext;
