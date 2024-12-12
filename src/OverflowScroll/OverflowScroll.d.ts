import React from 'react';
import { OverflowScrollItems } from './OverflowScrollItems';

export interface OverflowScrollProps {
    ariaLabel: string;
    children: React.ReactNode;
    childQuerySelector?: string;
    hasInteractiveChildren?: boolean;
    disableScroll?: boolean;
    disableOpacityMasks?: boolean;
    onScrollPrevious?: () => void;
    onScrollNext?: () => void;
    offset?: number | string;
    offsetType?: 'percentage' | 'fixed';
}

declare const OverflowScroll: React.FC<OverflowScrollProps> & {
    Items: React.FC<OverflowScrollItems>;
};

export default OverflowScroll;
