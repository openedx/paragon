import React from 'react';
import BaseNav from 'react-bootstrap/Nav';
import BaseNavDropdown from 'react-bootstrap/NavDropdown';
import BaseNavItem from 'react-bootstrap/NavItem';
import BaseNavLink from 'react-bootstrap/NavLink';
import PropTypes from 'prop-types';

function Nav(props) {
  return <BaseNav {...props} />;
}
function NavItem(props) {
  return <BaseNavItem {...props} />;
}
function NavLink(props) {
  return <BaseNavLink {...props} />;
}
function NavDropdown(props) {
  return <BaseNavDropdown {...props} />;
}
function NavDropdownItem(props) {
  return <BaseNavDropdown.Item {...props} />;
}
function NavDropdownDivider(props) {
  return <BaseNavDropdown.Divider {...props} />;
}

Nav.propTypes = {
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  cardHeaderBsPrefix: PropTypes.string,
  /** Specifies default active nav (uncontrolled usage). */
  defaultActiveKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Marks the NavItem with a matching eventKey (or href if present) as active. */
  activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /** Have all `NavItems` proportionately fill all available width. */
  fill: PropTypes.bool,
  /** Have all `NavItems` evenly fill all available width. */
  justify: PropTypes.bool,
  /**
   * Apply styling an alignment for use in a `Navbar`.
   * This prop will be set automatically when the `Nav` is used inside a `Navbar`.
   */
  navbar: PropTypes.bool,
  /** Callback fired when a key is pressed. */
  onKeyDown: PropTypes.func,
  /** A callback fired when a NavItem is selected. */
  onSelect: PropTypes.func,
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
  /** The ARIA role for the `NavItem` */
  role: PropTypes.string,
  /** Set a custom element for this component. */
  as: PropTypes.elementType,
  /** Change the underlying component CSS base class name and modifier class names prefix. */
  bsPrefix: PropTypes.string,
};

NavLink.propTypes = {
  /** Callback fired when the active item changes. */
  onSelect: PropTypes.string,
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
  ...BaseNav.defaultProps,
};

NavDropdown.defaultProps = {
  ...BaseNavDropdown.defaultProps,
};

NavItem.defaultProps = {
  ...BaseNavItem.defaultProps,
};

NavLink.defaultProps = {
  ...BaseNavLink.defaultProps,
};

Nav.Item = NavItem;
Nav.Link = NavLink;
NavDropdown.Item = NavDropdownItem;
NavDropdown.Divider = NavDropdownDivider;

export { NavDropdown, NavItem, NavLink };
export default Nav;
