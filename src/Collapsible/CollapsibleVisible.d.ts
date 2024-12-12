import React from 'react';

export interface CollapsibleVisibleProps {
    children?: React.ReactNode;
    whenOpen?: boolean;
    whenClosed?: boolean;
}

declare const CollapsibleVisible: React.FC<CollapsibleVisibleProps>;

export default CollapsibleVisible;
