import BaseNav from 'react-bootstrap/Nav';
import BaseNavDropdown from 'react-bootstrap/NavDropdown';
import BaseNavItem from 'react-bootstrap/NavItem';
import BaseNavLink from 'react-bootstrap/NavLink';
import PropTypes from 'prop-types';

const Nav = BaseNav;
const NavItem = BaseNavItem;
const NavLink = BaseNavLink;
const NavDropdown = BaseNavDropdown;
const NavDropdownItem = BaseNavDropdown.Item;
const NavDropdownDivider = BaseNavDropdown.Divider;

Nav.propTypes = {
  ...Nav.propTypes,
  /** Marks the NavItem with a matching eventKey (or href if present) as active. */
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  cardHeaderBsPrefix: PropTypes.string,
  /** Have all `NavItems` proportionately fill all available width. */
  fill: PropTypes.bool,
  /** Have all `NavItems` evenly fill all available width. */
  justify: PropTypes.bool,
  /**
   * Apply styling an alignment for use in a `Navbar`.
   * This prop will be set automatically when the `Nav` is used inside a `Navbar`.
   */
  navbar: PropTypes.bool,
  navbarBsPrefix: PropTypes.string,
  /** Enable vertical scrolling within the toggleable contents of a collapsed Navbar. */
  navbarScroll: PropTypes.bool,
  onKeyDown: PropTypes.func,
  /** A callback fired when a NavItem is selected. */
  onSelect: PropTypes.string,
  /**
   * ARIA role for the `Nav`, in the context of a `TabContainer`,
   * the default will be set to "tablist", but can be overridden by the `Nav` when set explicitly.
   */
  role: PropTypes.string,
  /** The visual variant of the nav items. */
  variant: PropTypes.oneOf(['tabs', 'pills']),
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string,
};

NavItem.propTypes = {
  ...NavItem.propTypes,
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string,
};

NavLink.propTypes = {
  ...NavLink.propTypes,
  /** The active state of the `NavItem` item. */
  active: PropTypes.bool,
  /** You can use a custom element type for this component. */
  as: PropTypes.elementType,
  /** The disabled state of the `NavItem` item. */
  disabled: PropTypes.bool,
  /**
   * Uniquely identifies the `NavItem` amongst its siblings,
   * used to determine and control the active state of the parent `Nav`
   */
  eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The HTML href attribute for the `NavLink` */
  href: PropTypes.string,
  /** The ARIA role for the `NavLink`, In the context of a 'tablist' parent `Nav`, the role defaults to 'tab' */
  role: PropTypes.string,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string,
};

NavDropdown.propTypes = {
  ...NavDropdown.propTypes,
  /** An html id attribute for the `Toggle` button, necessary for assistive technologies, such as screen readers. */
  id: PropTypes.string.isRequired,
  /** The content of the non-toggle Button. */
  title: PropTypes.node.isRequired,
  /** Style the toggle `NavLink` as active */
  active: PropTypes.bool,
  /** Disables the toggle `NavLink` */
  disabled: PropTypes.bool,
  /** An ARIA accessible role applied to the `Menu` component. */
  menuRole: PropTypes.string,
  /** Menu color variant. Omitting this will use the default light color. */
  menuVariant: PropTypes.oneOf(['dark']),
  /** An `onClick` handler passed to the `Toggle` component */
  onClick: PropTypes.func,
  /** Whether to render the dropdown menu in the DOM before the first time it is shown. */
  renderMenuOnMount: PropTypes.bool,
  /** Which event when fired outside the component will cause it to be closed. */
  rootCloseEvent: PropTypes.string,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string,
};

Nav.defaultProps = {
  activeKey: undefined,
  as: undefined,
  cardHeaderBsPrefix: undefined,
  fill: false,
  justify: false,
  navbar: undefined,
  navbarBsPrefix: undefined,
  navbarScroll: undefined,
  onKeyDown: undefined,
  onSelect: undefined,
  role: undefined,
  variant: undefined,
  bsPrefix: 'nav',
};

NavDropdown.defaultProps = {
  active: undefined,
  disabled: undefined,
  menuRole: undefined,
  menuVariant: undefined,
  onClick: undefined,
  renderMenuOnMount: undefined,
  rootCloseEvent: undefined,
  bsPrefix: undefined,
};

NavItem.defaultProps = {
  as: 'div',
  bsPrefix: 'nav-item',
};

NavLink.defaultProps = {
  active: undefined,
  as: 'a',
  disabled: false,
  eventKey: undefined,
  href: undefined,
  role: undefined,
  bsPrefix: 'nav-link',
};

Nav.Item = NavItem;
Nav.Link = NavLink;
NavDropdown.Item = NavDropdownItem;
NavDropdown.Divider = NavDropdownDivider;

export { NavDropdown, NavItem, NavLink };
export default Nav;
