import * as React from 'react';

export interface Props {
  children: React.ReactNode;
  title: string;
  isOpen?: boolean;
  isBlocking?: boolean;
  hasCloseButton?: boolean;
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  variant?: 'default' | 'warning' | 'danger' | 'success' | 'dark';
  closeLabel?: string;
  className?: string;
  isFullscreenScroll?: boolean;
  footerNode?: React.ReactNode;
}

declare function AlertModal(props: Props): JSX.Element;

export default AlertModal;
