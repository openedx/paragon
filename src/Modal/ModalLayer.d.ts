import * as React from 'react';

export interface ModalLayerProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  isBlocking?: boolean;
  zIndex?: number;
}

export function ModalBackdrop({ onClick }: { onClick?: () => void }): JSX.Element;

export function ModalContentContainer({ children }: { children?: React.ReactNode }): JSX.Element;

export default function ModalLayer(props: ModalLayerProps): JSX.Element;
