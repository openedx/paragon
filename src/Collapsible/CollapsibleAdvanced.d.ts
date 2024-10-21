import React from 'react';

export interface CollapsibleAdvancedProps {
    children?: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
    open?: boolean;
    onToggle?: () => void;
    onOpen?: () => void;
    onClose?: () => void;
    unmountOnExit?: boolean;
}

declare class CollapsibleAdvanced extends React.Component<CollapsibleAdvancedProps> {}

export default CollapsibleAdvanced;
