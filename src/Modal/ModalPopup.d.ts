import * as React from 'react';
import { PopoverPlacements } from './PopoverElement';

export interface ModalPopupProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
  isBlocking?: boolean;
  withPortal?: boolean;
  positionRef?: ((instance: HTMLElement | null) => void) | React.RefObject<HTMLElement>;
  placement?: PopoverPlacements;
  hasArrow?: boolean;
}

declare const ModalPopup = React.FC<ModalPopupProps>;

export default ModalPopup;
