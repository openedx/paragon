import React from 'react';

export interface StandardModalProps {
    children: React.ReactNode;
    title: string;
    onClose: () => void;
    isOpen?: boolean;
    hasCloseButton?: boolean;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen';
    variant?: 'default' | 'warning' | 'danger' | 'success' | 'dark';
    closeLabel?: string;
    className?: string;
    isFullscreenScroll?: boolean;
    footerNode?: React.ReactNode;
    beforeBodyNode?: React.ReactNode;
    afterBodyNode?: React.ReactNode;
}

declare const StandardModal: React.FC<StandardModalProps>;

export default StandardModal;
