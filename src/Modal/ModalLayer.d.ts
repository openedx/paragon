import React from 'react';

export interface ModalLayerProps {
    children: React.ReactNode;
    onClose: () => void;
    isOpen: boolean;
    isBlocking?: boolean;
    zIndex?: number;
}

export function ModalBackdrop(props: { onClick?: () => void }): JSX.Element;

export function ModalContentContainer(props: { children?: React.ReactNode }): JSX.Element;

export default function ModalLayer(props: ModalLayerProps): JSX.Element;
