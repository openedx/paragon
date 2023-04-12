import React from 'react';
import { BsPrefixProps, BsPrefixRefForwardingComponent } from 'react-bootstrap/helpers';
import BaseDropdown, { DropdownProps as BaseDropdownProps } from 'react-bootstrap/Dropdown';
import { DropdownToggleProps as BaseDropdownToggleProps } from 'react-bootstrap/DropdownToggle';
import { DropdownMenuProps } from 'react-bootstrap/DropdownMenu';

interface DropdownProps extends BaseDropdownProps {
    autoClose?: boolean | 'inside' | 'outside';
    className?: string;
    variant?: 'light' | 'dark';
}

interface DropdownToggleProps extends BsPrefixProps, BaseDropdownToggleProps {
    id: string | number;
}

interface DropdownItemProps extends React.LinkHTMLAttributes<string>{
    className?: string;
}

declare const DropdownToggle: BsPrefixRefForwardingComponent<'button', DropdownToggleProps>;

declare const DropdownItem: BsPrefixRefForwardingComponent<'button', DropdownItemProps>;

declare const Dropdown: BsPrefixRefForwardingComponent<'div', DropdownProps> & {
    Toggle: React.FC<DropdownToggleProps>;
    Item: React.FC<DropdownItemProps>
    Menu: React.FC<DropdownMenuProps>;
    Header: typeof BaseDropdown.Header;
    Divider: typeof BaseDropdown.Divider;
};

export default Dropdown;
export { DropdownToggle, DropdownItem };
