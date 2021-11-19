import React from 'react';
import BaseNavbar from 'react-bootstrap/Navbar';
import PropTypes from 'prop-types';

const Navbar = (props) => <BaseNavbar {...props} />;
const NavbarBrand = (props) => <Navbar.Brand {...props} />;
const NavbarToggle = (props) => <Navbar.Toggle {...props} />;
const NavbarCollapse = (props) => <Navbar.Collapse {...props} />;

Navbar.propTypes = {
  ...Navbar.propTypes,
  as: PropTypes.elementType,
  bg: PropTypes.string,
  collapseOnSelect: PropTypes.bool,
  expand: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl']),
  expanded: PropTypes.bool,
  fixed: PropTypes.oneOf(['top', 'bottom']),
  onSelect: PropTypes.func,
  onToggle: PropTypes.func,
  role: PropTypes.string,
  sticky: PropTypes.oneOf(['top']),
  variant: PropTypes.oneOf(['light', 'dark']),
  bsPrefix: PropTypes.string,
};

NavbarBrand.propTypes = {
  ...NavbarBrand.propTypes,
};

NavbarToggle.propTypes = {
  ...NavbarToggle.propTypes,
};

NavbarCollapse.propTypes = {
  ...NavbarCollapse.propTypes,
};

Navbar.defaultProps = {
  as: 'nav',
  bg: undefined,
  collapseOnSelect: false,
  expand: true,
  expanded: undefined,
  fixed: undefined,
  onSelect: () => {},
  onToggle: () => {},
  role: 'navigation',
  sticky: undefined,
  variant: 'light',
  bsPrefix: 'navbar',
};

export { NavbarBrand, NavbarToggle, NavbarCollapse };
export default Navbar;
