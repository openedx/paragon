import React from 'react';
import classNames from 'classnames';

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
};

export default class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.addEvents = this.addEvents.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleToggleKeyDown = this.handleToggleKeyDown.bind(this);
    this.removeEvents = this.removeEvents.bind(this);
    this.toggle = this.toggle.bind(this);

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
      this.firstItem.focus();
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

  render() {
    const props = {
      title: 'Settings',
    };

    return (
      <div>
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
            {props.title}
          </button>
          <ul
            aria-label={props.title}
            aria-hidden={!this.state.open}
            className={classes.menu}
            role="menu"
          >
            <li className={classes.menuItem}>
              <a role="menuitem" href="http://google.com" ref={(firstItem) => { this.firstItem = firstItem; }}>Option 1</a>
            </li>
            <li className={classes.menuItem}>
              <a role="menuitem" href="http://google.com">Option 2</a>
            </li>
            <li className={classes.menuItem}>
              <a role="menuitem" href="http://google.com">Option 3</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
