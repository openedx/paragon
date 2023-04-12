import React from 'react';

export interface CollapsibleTriggerProps {
    children?: React.ReactNode;
    tag?: React.ElementType | string;
    openOnly?: boolean;
    closeOnly?: boolean;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

declare const CollapsibleTrigger: React.FC<CollapsibleTriggerProps>;
export default CollapsibleTrigger;
