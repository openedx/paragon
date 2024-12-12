import React from 'react';
import { BaseModalProps } from './BaseModalProps';

export interface MarketingModalProps extends BaseModalProps {
    heroIsDark?: boolean;
    heroNode?: React.ReactNode;
    beforeBodyNode?: React.ReactNode;
    afterBodyNode?: React.ReactNode;
}

declare const MarketingModal: React.FC<MarketingModalProps>;

export default MarketingModal;
