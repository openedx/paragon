import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export interface ModalCloseButtonProps extends BsPrefixProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

declare const ModalCloseButton: React.ForwardRefExoticComponent<ModalCloseButtonProps & React.RefAttributes<HTMLButtonElement>>;

export default ModalCloseButton;
