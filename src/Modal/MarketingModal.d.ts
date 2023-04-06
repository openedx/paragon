import * as React from 'react';

export interface MarketingModalProps {
  children: React.ReactNode;
  title: string;
  isOpen?: boolean;
  isBlocking?: boolean;
  hasCloseButton?: boolean;
  onClose?: () => void;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
  closeLabel?: string;
  className?: string;
  isFullscreenScroll?: boolean;
  footerNode?: React.ReactNode;
  heroIsDark?: boolean;
  heroNode?: React.ReactNode;
  beforeBodyNode?: React.ReactNode;
  afterBodyNode?: React.ReactNode;
}

declare const MarketingModal = React.FC<MarketingModalProps>;

export default MarketingModal;
