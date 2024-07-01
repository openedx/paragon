import React from 'react';
import { Placement } from '@popperjs/core';
import { TransitionProps } from 'react-transition-group/Transition';
import { FadeProps } from 'react-bootstrap/Fade';

export interface OverlayProps extends React.HTMLAttributes<HTMLDivElement> {
    show: boolean;
    onHide: () => void;
    placement?: Placement;
    container?: React.ReactElement | (() => React.ReactElement | null) | null;
    flip?: boolean;
    popperConfig?: Object;
    rootClose?: boolean;
    rootCloseEvent?: 'click' | 'mousedown';
    transition?: FadeProps | TransitionProps;
    onEnter?: () => void;
    onEntered?: () => void;
    onEntering?: () => void;
    onExit?: () => void;
    onExited?: () => void;
    onExiting?: () => void;
    target: Element | (() => Element | null) | null;
}

export interface OverlayTriggerProps extends OverlayProps {
    trigger: 'click' | 'hover' | 'focus';
    delay?: number | { show: number; hide: number };
    defaultShow?: boolean;
    onToggle?: (show: boolean) => void;
    overlay: React.ReactNode | ((props: any) => React.ReactNode);
}

declare const Overlay: React.FC<OverlayProps>;
declare const OverlayTrigger: React.FC<OverlayTriggerProps>;

export { OverlayTrigger };

export default Overlay;
