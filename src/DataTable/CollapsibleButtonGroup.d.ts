import React from 'react';

export interface CollapsibleButtonGroupProps {
    className?: string;
    actions: {
        component: React.ReactNode;
        args?: Record<string, any>;
    };
}

declare const CollapsibleButtonGroup: React.FC<CollapsibleButtonGroupProps>;

export default CollapsibleButtonGroup;
