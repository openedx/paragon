import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';
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

interface DropdownItemProps extends React.HTMLAttributes, React.LinkHTMLAttributes<string>{}

declare const DropdownToggle: React.ForwardRefExoticComponent<DropdownToggleProps>;

declare const DropdownItem: React.ForwardRefExoticComponent<DropdownItemProps>;

declare const Dropdown: React.ForwardRefExoticComponent<DropdownProps> & {
    Toggle: React.FC<DropdownToggleProps>;
    Item: React.FC<DropdownItemProps>
    Menu: React.FC<DropdownMenuProps>;
    Header: typeof BaseDropdown.Header;
    Divider: typeof BaseDropdown.Divider;
};

export default Dropdown;
export { DropdownToggle, DropdownItem };

export { default as DropdownButton } from 'react-bootstrap/DropdownButton';
export { default as SplitButton } from 'react-bootstrap/SplitButton';
