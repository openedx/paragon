import React from 'react';
import { ModalDialogHeaderProps } from './ModalDialogHeader';
import { ModalDialogFooterProps } from './ModalDialogFooter';
import { ModalDialogTitleProps } from './ModalDialogTitle';
import { ModalCloseButtonProps } from './ModalCloseButton';
import { ModalDialogHeroProps } from './ModalDialogHero';
import { ModalDialogBodyProps } from './ModalDialogBody';
import { ModalDialogHeroContentProps } from './ModalDialogHeroContent';
import { ModalDialogHeroBackgroundProps } from './ModalDialogHeroBackground';
import { BaseModalProps } from './BaseModalProps';

export interface ModalDialogProps extends Omit<BaseModalProps, 'footerNode'> {
    isFullscreenOnMobile?: boolean;
    zIndex?: number;
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
