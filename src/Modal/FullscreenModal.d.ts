import * as React from 'react';

export interface FullscreenModalProps {
  children: React.ReactNode;
  className?: string;
  title: string;
  onClose: () => void;
  isOpen?: boolean;
  hasCloseButton?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  variant?: 'default' | 'warning' | 'danger' | 'success' | 'dark';
  closeLabel?: string;
  isFullscreenScroll?: boolean;
  footerNode?: React.ReactNode;
  beforeBodyNode?: React.ReactNode;
  afterBodyNode?: React.ReactNode;
  modalBodyClassName?: string;
}

export const FullscreenModal: React.FC<FullscreenModalProps>;

export default FullscreenModal;
