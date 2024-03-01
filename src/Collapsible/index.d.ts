import React from 'react';
import { CollapsibleAdvancedProps } from './CollapsibleAdvanced';
import { CollapsibleBodyProps } from './CollapsibleBody';
import { CollapsibleTriggerProps } from './CollapsibleTrigger';
import { CollapsibleVisibleProps } from './CollapsibleVisible';

export interface CollapsibleProps {
    children: React.ReactNode;
    className?: string;
    defaultOpen?: boolean;
    iconWhenClosed?: React.ReactElement;
    iconWhenOpen?: React.ReactElement;
    onClose?: () => void;
    onOpen?: () => void;
    onToggle?: () => void;
    open?: boolean;
    styling?: 'basic' | 'card' | 'card-lg';
    title: React.ReactNode;
    unmountOnExit?: boolean;
}

declare const Collapsible: React.ForwardRefExoticComponent<CollapsibleProps> & {
    Advanced: React.FC<CollapsibleAdvancedProps>;
    Body: React.FC<CollapsibleBodyProps>;
    Trigger: React.FC<CollapsibleTriggerProps>;
    Visible: React.FC<CollapsibleVisibleProps>;
    Context: React.FC<CollapsibleAdvancedProps>;
};

export default Collapsible;
