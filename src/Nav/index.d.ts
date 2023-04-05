import * as React from 'react';
import { HTMLAttributes } from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';

export interface NavProps extends BsPrefixProps, HTMLAttributes<HTMLElement> {
  activeKey?: string | number;
  as?: keyof JSX.IntrinsicElements;
  fill?: boolean;
  justify?: boolean;
  navbar?: boolean;
  onSelect?: string;
  role?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLElement>) => void;
  variant?: 'tabs' | 'pills';
}

export interface NavItemProps extends BsPrefixProps, HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
}

export interface NavLinkProps extends BsPrefixProps, HTMLAttributes<HTMLElement> {
  active?: boolean;
  as?: keyof JSX.IntrinsicElements;
  disabled?: boolean;
  eventKey?: string | number;
  href?: string;
  role?: string;
}

export interface NavDropdownProps extends BsPrefixProps, HTMLAttributes<HTMLElement> {
  id: string;
  title: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
  menuRole?: string;
  menuVariant?: 'dark';
  onClick?: (event: React.SyntheticEvent) => void;
  renderMenuOnMount?: boolean;
  rootCloseEvent?: string;
}

export interface NavDropdownItemProps extends BsPrefixProps, HTMLAttributes<HTMLElement> {}

export interface NavDropdownDividerProps extends BsPrefixProps, HTMLAttributes<HTMLElement> {}

declare const NavDropdownItem: React.ForwardRefExoticComponent<NavDropdownItemProps & React.RefAttributes<HTMLElement>>;
declare const NavDropdownDivider: React.ForwardRefExoticComponent<
NavDropdownDividerProps & React.RefAttributes<HTMLElement>>;
declare const NavItem: React.ForwardRefExoticComponent<NavItemProps & React.RefAttributes<HTMLElement>>;
declare const NavLink: React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLElement>>;

declare const Nav: React.ForwardRefExoticComponent<NavProps> & {
  Item: React.ForwardRefExoticComponent<NavItemProps & React.RefAttributes<HTMLElement>>;
  Link: React.ForwardRefExoticComponent<NavLinkProps & React.RefAttributes<HTMLElement>>;
  Dropdown: React.ForwardRefExoticComponent<NavDropdownProps & React.RefAttributes<HTMLElement>> & {
    Item: React.ForwardRefExoticComponent<NavDropdownItemProps & React.RefAttributes<HTMLElement>>;
    Divider: React.ForwardRefExoticComponent<NavDropdownDividerProps & React.RefAttributes<HTMLElement>>;
  };
};

export default Nav;
export {
  NavDropdownItem, NavDropdownDivider, NavItem, NavLink,
};
