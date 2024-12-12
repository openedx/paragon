import React from 'react';

export interface ButtonProps {
    children?: React.ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    variant?: string;
    type?: string;
}

export interface ModalProps {
    open?: boolean;
    parentSelector?: string;
    title: string | React.ReactNode;
    body: string | React.ReactNode;
    buttons?: (React.ReactNode | ButtonProps)[];
    closeText?: string | React.ReactNode;
    onClose: () => void;
    variant?: {
        status?: string;
    };
    renderDefaultCloseButton?: boolean;
    renderHeaderCloseButton?: boolean;
    dialogClassName?: string;
}

export default class Modal extends React.Component<ModalProps> {}
