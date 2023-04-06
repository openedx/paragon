import * as React from 'react';
import { ModalDialogHeaderProps } from './ModalDialogHeader';
import { ModalDialogFooterProps } from './ModalDialogFooter';
import { ModalDialogTitleProps } from './ModalDialogTitle';
import { ModalCloseButtonProps } from './ModalCloseButton';
import { ModalDialogHeroProps } from './ModalDialogHero';
import { ModalDialogBodyProps } from './ModalDialogBody';
import { ModalDialogHeroContentProps } from './ModalDialogHeroContent';
import { ModalDialogHeroBackgroundProps } from './ModalDialogHeroBackground';

export type ModalDialogSizes = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
export type ModalDialogVariants = 'default' | 'warning' | 'danger' | 'success' | 'dark';

export interface ModalDialogProps {
  children: React.ReactNode;
  title: string;
  isOpen?: boolean;
  onClose: () => void;
  hasCloseButton?: boolean;
  size?: ModalDialogSizes;
  variant?: ModalDialogVariants;
  closeLabel?: string;
  className?: string;
  isFullscreenScroll?: boolean;
  isFullscreenOnMobile?: boolean;
  isBlocking?: boolean;
  zIndex?: number | undefined;
}

declare const ModalDialog: React.FC<ModalDialogProps> & {
  Header: React.FC<ModalDialogHeaderProps>;
  Title: React.FC<ModalDialogTitleProps>;
  Footer: React.FC<ModalDialogFooterProps>;
  CloseButton: React.FC<ModalCloseButtonProps>;
  Body: React.FC<ModalDialogBodyProps>;
  Hero: React.FC<ModalDialogHeroProps> & {
    Content: React.FC<ModalDialogHeroContentProps>;
    Background: React.FC<ModalDialogHeroBackgroundProps>;
  }
};

export default ModalDialog;
