import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';

interface MenuItemProps extends BsPrefixProps, React.HTMLAttributes<HTMLElement> {
    defaultSelected?: boolean;
    children?: React.ReactNode;
    iconBefore?: React.ReactNode;
    iconAfter?: React.ReactNode;
    disabled?: boolean;
    href?: string;
    variant?: string;
    size?: string;
}

declare const MenuItem: React.FC<MenuItemProps>;

export default MenuItem;
