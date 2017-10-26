import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Dropdown.scss';
import Button from '../Button';

export const triggerKeys = {
  OPEN_MENU: ['ArrowDown', 'Space'],
  CLOSE_MENU: ['Escape'],
  NAVIGATE_DOWN: ['ArrowDown', 'Tab'],
  NAVIGATE_UP: ['ArrowUp'],
};

class Dropdown extends React.Component {
  static isTriggerKey(action, keyName) {
    return triggerKeys[action].indexOf(keyName) > -1;
  }

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
      focusIndex: 0,
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
      this.menuItems[this.state.focusIndex].focus();
    } else if (this.toggleElem) {
      this.toggleElem.focus();
    }
  }

  addEvents() {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeEvents() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  handleDocumentClick(e) {
    if (this.container && this.container.contains(e.target) && this.container !== e.target) {
      return;
    }
    this.toggle();
  }

  handleMenuKeyDown(e) {
    e.preventDefault();
    if (Dropdown.isTriggerKey('CLOSE_MENU', e.key)) {
      this.toggle();
    } else if (Dropdown.isTriggerKey('NAVIGATE_DOWN', e.key)) {
      this.setState({
        focusIndex: (this.state.focusIndex + 1) % this.props.menuItems.length,
      });
    } else if (Dropdown.isTriggerKey('NAVIGATE_UP', e.key)) {
      this.setState({
        focusIndex: ((this.state.focusIndex - 1) + this.props.menuItems.length) %
                    this.props.menuItems.length,
      });
    }
  }

  handleToggleKeyDown(e) {
    if (!this.state.open && Dropdown.isTriggerKey('OPEN_MENU', e.key)) {
      this.toggle();
    } else if (this.state.open && Dropdown.isTriggerKey('CLOSE_MENU', e.key)) {
      this.toggle();
    }
  }

  toggle() {
    this.setState({
      open: !this.state.open,
      focusIndex: 0,
    });
  }

  generateMenuItems(menuItems) {
    return menuItems.map((menuItem, i) => (
      <a
        className={styles['dropdown-item']}
        href={menuItem.href}
        key={i}
        onKeyDown={this.handleMenuKeyDown}
        ref={(item) => {
          this.menuItems[i] = item;
        }}
        role="menuitem"
      >
        {menuItem.label}
      </a>
    ));
  }

  render() {
    const menuItems = this.generateMenuItems(this.props.menuItems);
    return (
      <div
        className={classNames([
          styles.dropdown,
          { [styles.show]: this.state.open },
        ])}
        ref={(container) => { this.container = container; }}
      >
        <Button
          aria-expanded={this.state.open}
          aria-haspopup="true"
          buttonType={this.props.buttonType}
          label={this.props.title}
          onClick={this.toggle}
          onKeyDown={this.handleToggleKeyDown}
          className={[
            styles['dropdown-toggle'],
          ]}
          type="button"
          inputRef={(toggleElem) => { this.toggleElem = toggleElem; }}
        />
        <div
          aria-label={this.props.title}
          aria-hidden={!this.state.open}
          className={classNames([
            styles['dropdown-menu'],
            { [styles.show]: this.state.open },
          ])}
          role="menu"
        >
          {menuItems}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  buttonType: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
  title: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
  buttonType: 'light',
};

export default Dropdown;
