import React from 'react';

export interface MenuProps {
    className?: string;
    arrowKeyNavigationSelector?: string;
    as?: keyof JSX.IntrinsicElements;
    children?: React.ReactNode;
}

declare const Menu: React.FC<MenuProps>;

export default Menu;
