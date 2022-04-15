import React from 'react';
import BaseNavbar from 'react-bootstrap/Navbar';
import BaseNavbarBrand from 'react-bootstrap/NavbarBrand';
import BaseNavbarToggle from 'react-bootstrap/NavbarToggle';
import BaseNavbarCollapse from 'react-bootstrap/NavbarCollapse';
import PropTypes from 'prop-types';

export const NAVBAR_LABEL = 'Toggle navigation';

const Navbar = (props) => <BaseNavbar {...props} />;
const NavbarBrand = (props) => <BaseNavbarBrand {...props} />;
const NavbarToggle = (props) => <BaseNavbarToggle {...props} />;
const NavbarCollapse = (props) => <BaseNavbarCollapse {...props} />;

Navbar.propTypes = {
  ...Navbar.propTypes,
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /**
   * A convenience prop for adding `bg-*` utility classes since they
   * are so commonly used here. `light` and `dark` are common choices
   * but any `bg-*` class is supported, including any custom ones you might define.
   *
   * Pairs nicely with the `variant` prop.
   */
  bg: PropTypes.string,
  /**
   * Toggles `expanded` to `false` after the onSelect event of a descendant of a child
   * `<Nav>` fires. Does nothing if no `<Nav>` or `<Nav>` descendants exist.
   *
   * Manually controlling `expanded` via the onSelect callback is recommended instead,
   * for more complex operations that need to be executed after the `select` event of `<Nav>` descendants.
   */
  collapseOnSelect: PropTypes.bool,
  /**
   * The breakpoint, below which, the Navbar will collapse.
   * When `true` the Navbar will always be expanded regardless of screen size.
   */
  expand: PropTypes.oneOf([true, 'sm', 'md', 'lg', 'xl']),
  /** Controls the visibility of the navbar body */
  expanded: PropTypes.bool,
  /**
   * Create a fixed navbar along the top or bottom of the screen,
   * that scrolls with the page. A convenience prop for the `fixed-*` positioning classes.
   */
  fixed: PropTypes.oneOf(['top', 'bottom']),
  /** A callback fired when a descendant of a child `<Nav>` is selected. */
  onSelect: PropTypes.func,
  /**
   * A callback fired when the `<Navbar>` body collapses or expands.
   * Fired when a `<Navbar.Toggle>` is clicked and called with the new `expanded` boolean value.
   *
   * Controls `expanded`.
   */
  onToggle: PropTypes.func,
  /**
   * The ARIA role for the navbar, will default to 'navigation'
   * for Navbars whose as is something other than `<nav>`.
   */
  role: PropTypes.string,
  /**
   * Position the navbar at the top of the viewport, but only after scrolling past it.
   * A convenience prop for the `sticky-top` positioning class.
   */
  sticky: PropTypes.oneOf(['top']),
  /**
   * The general visual variant a the `Navbar`.
   * Use in combination with the `bg` prop,
   * `background-color` utilities, or your own background styles.
   */
  variant: PropTypes.oneOf(['light', 'dark']),
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string,
};

NavbarBrand.propTypes = {
  ...NavbarBrand.propTypes,
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /** An href, when provided the Brand will render as an `<a>` element (unless `as` is provided). */
  href: PropTypes.string,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string,
};

NavbarToggle.propTypes = {
  ...NavbarToggle.propTypes,
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /** The toggle content. When empty, the default toggle will be rendered. */
  children: PropTypes.node,
  /** An accessible ARIA label for the toggler button. */
  label: PropTypes.string,
  /** Specifies the callback function when the toggle is clicked. */
  onClick: PropTypes.func,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string,
};

NavbarCollapse.propTypes = {
  ...NavbarCollapse.propTypes,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string,
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

NavbarBrand.defaultProps = {
  as: 'nav',
  href: undefined,
  bsPrefix: 'navbar',
};

NavbarToggle.defaultProps = {
  as: 'button',
  children: undefined,
  label: NAVBAR_LABEL,
  onClick: () => {},
  bsPrefix: 'navbar-toggler',
};

NavbarCollapse.defaultProps = {
  bsPrefix: 'navbar-collapse',
};

Navbar.Brand = NavbarBrand;
Navbar.Toggle = NavbarToggle;
Navbar.Collapse = NavbarCollapse;

export { NavbarBrand };
export default Navbar;
