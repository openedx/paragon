import React from 'react';

export interface CollapsibleBodyProps {
    children?: React.ReactNode;
    tag?: string,
    transitionWrapper?: React.ReactElement,
}

declare const CollapsibleBody: React.FC<CollapsibleBodyProps>;

export default CollapsibleBody;
