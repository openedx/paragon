import React from 'react';

export type ModalSizes = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
export type ModalVariants = 'default' | 'warning' | 'danger' | 'success' | 'dark';

export interface BaseModalProps {
    children: React.ReactNode;
    title: string;
    isOpen?: boolean;
    hasCloseButton?: boolean;
    onClose?: () => void;
    size?: ModalSizes;
    variant?: ModalVariants;
    closeLabel?: string;
    className?: string;
    isFullscreenScroll?: boolean;
    footerNode?: React.ReactNode;
    isBlocking?: boolean;
}
