import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';
import { NavProps as BaseNavProps } from 'react-bootstrap/Nav';
import { NavItemProps as BaseNavItemProps } from 'react-bootstrap/NavItem';
import { NavLinkProps as BaseNavLinkProps } from 'react-bootstrap/NavLink';
import { NavDropdownProps as BaseNavDropdownProps } from 'react-bootstrap/NavDropdown';
import { DropdownItemProps as BaseDropdownItemProps } from 'react-bootstrap/esm/DropdownItem';

export interface NavProps extends BsPrefixProps, BaseNavProps {}

export interface NavItemProps extends BsPrefixProps, BaseNavItemProps {}

export interface NavLinkProps extends BsPrefixProps, Omit<BaseNavLinkProps, 'onSelect'> {
  title?: string;
}

export interface NavDropdownProps extends BsPrefixProps, BaseNavDropdownProps {
  menuVariant?: 'dark';
  onClick?: (event: React.SyntheticEvent) => void;
}

export interface NavDropdownItemProps extends BsPrefixProps, BaseDropdownItemProps {}

export interface NavDropdownDividerProps extends BsPrefixProps, BsPrefixRefForwardingComponent<'div', unknown> {}

declare const NavDropdownItem: React.ForwardRefExoticComponent<NavDropdownItemProps>;
declare const NavDropdownDivider: React.ForwardRefExoticComponent<NavDropdownDividerProps>;
declare const NavItem: React.ForwardRefExoticComponent<NavItemProps>;
declare const NavLink: React.ForwardRefExoticComponent<NavLinkProps>;
declare const NavDropdown: React.ForwardRefExoticComponent<NavDropdownProps> & {
  Item: React.ForwardRefExoticComponent<NavDropdownItemProps>;
  Divider: React.ForwardRefExoticComponent<NavDropdownDividerProps>;
};

declare const Nav: React.ForwardRefExoticComponent<NavProps> & {
  Item: React.ForwardRefExoticComponent<NavItemProps>;
  Link: React.ForwardRefExoticComponent<NavLinkProps>;
  Dropdown: React.ForwardRefExoticComponent<NavDropdownProps> & {
    Item: React.ForwardRefExoticComponent<NavDropdownItemProps>;
    Divider: React.ForwardRefExoticComponent<NavDropdownDividerProps>;
  };
};

export default Nav;
export {
  NavDropdownItem, NavDropdownDivider, NavItem, NavLink, NavDropdown,
};
