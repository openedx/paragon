import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const classes = {
  dropdown: 'dropdown',
  active: 'active',
  toggle: 'btn dropdown-toggle',
  screenreader: 'sr-only',
  show: 'show',
  menu: 'dropdown-menu',
  menuItem: 'dropdown-item',
};

const triggerKeys = {
  openMenu: [
    'ArrowDown',
    'Space',
  ],
  closeMenu: [
    'Escape',
  ],
  navigateDown: [
    'ArrowDown',
  ],
  navigateUp: [
    'ArrowUp',
  ],
};

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleToggleKeyDown = this.handleToggleKeyDown.bind(this);
    this.handleMenuKeyDown = this.handleMenuKeyDown.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);

    this.menuItems = [];
    this.state = {
      open: false,
    };
  }

  componentWillUpdate(_, nextState) {
    if (nextState.open) {
      this.addEvents();
    } else {
      this.removeEvents();
    }
  }

  componentDidUpdate() {
    if (this.state.open) {
      this.menuItems[0].focus();
    }
  }

  addEvents() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeEvents() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  handleDocumentClick(e) {
    if (this.container.contains(e.target) && this.container !== e.target) {
      return;
    }
    this.toggle();
  }

  handleMenuKeyDown(e) {
    if (this.state.open && triggerKeys.closeMenu.indexOf(e.key) > -1) {
      this.toggle();
    }
  }

  handleToggleKeyDown(e) {
    if (!this.state.open && triggerKeys.openMenu.indexOf(e.key) > -1) {
      this.toggle();
    } else if (this.state.open && triggerKeys.closeMenu.indexOf(e.key) > -1) {
      this.toggle();
      this.toggleElem.focus();
    }
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  generateMenuItems(menuItems) {
    return menuItems.map((menuItem, i) => (
      <li className={classes.menuItem} key={i}>
        <a
          role="menuitem"
          href={menuItem.href}
          onKeyDown={this.handleMenuKeyDown}
          ref={(item) => {
            this.menuItems[i] = item;
          }}
        >
          {menuItem.label}
        </a>
      </li>
    ));
  }

  render() {
    const menuItems = this.generateMenuItems(this.props.menuItems);

    return (
      <div
        className={classNames([
          classes.dropdown,
        { [classes.show]: this.state.open },
        ])}
        ref={(container) => { this.container = container; }}
      >
        <button
          aria-expanded={this.state.open}
          aria-haspopup="true"
          className={classNames([
            classes.toggle,
            { [classes.active]: this.state.open },
          ])}
          onClick={this.toggle}
          onKeyDown={this.handleToggleKeyDown}
          type="button"
          ref={(toggleElem) => { this.toggleElem = toggleElem; }}
        >
          {this.props.title}
        </button>
        <ul
          aria-label={this.props.title}
          aria-hidden={!this.state.open}
          className={classes.menu}
          role="menu"
        >
          {menuItems}
        </ul>
      </div>
    );
  }
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
};

export default Dropdown;
