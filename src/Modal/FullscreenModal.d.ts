import React from 'react';
import { BaseModalProps } from './BaseModalProps';

export interface FullscreenModalProps extends BaseModalProps {
    beforeBodyNode?: React.ReactNode;
    afterBodyNode?: React.ReactNode;
    modalBodyClassName?: string;
}

declare const FullscreenModal: React.FC<FullscreenModalProps>;

export default FullscreenModal;
