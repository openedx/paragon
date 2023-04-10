import React from 'react';
import { BsPrefixProps } from 'react-bootstrap/helpers';
import { NavbarProps as BaseNavbarProps } from 'react-bootstrap/Navbar';
import { NavbarBrandProps as BaseNavbarBrandProps } from 'react-bootstrap/NavbarBrand';
import { NavbarToggleProps as BaseNavbarToggleProps } from 'react-bootstrap/NavbarToggle';
import { NavbarCollapseProps as BaseNavbarCollapseProps } from 'react-bootstrap/NavbarCollapse';

export interface NavbarProps extends BsPrefixProps, BaseNavbarProps {}

export interface NavbarBrandProps extends BsPrefixProps, BaseNavbarBrandProps {}

export interface NavbarToggleProps extends BsPrefixProps, BaseNavbarToggleProps {
  children?: React.ReactNode;
}

export interface NavbarCollapseProps extends BsPrefixProps, BaseNavbarCollapseProps, React.HTMLAttributes<HTMLElement> {}

declare const Navbar: React.FC<NavbarProps> & {
  Brand: React.FC<NavbarBrandProps>;
  Toggle: React.FC<NavbarToggleProps>;
  Collapse: React.FC<NavbarCollapseProps>;
};

export default Navbar;
