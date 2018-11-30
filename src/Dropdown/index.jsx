import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Dropdown.scss';
import Button from '../Button';

export const triggerKeys = {
  OPEN_MENU: ['ArrowDown'],
  CLOSE_MENU: ['Escape'],
  NAVIGATE_DOWN: ['ArrowDown', 'Tab'],
  NAVIGATE_UP: ['ArrowUp'],
  SELECT_MENU_ITEM: ['Enter', ' '],
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

  componentDidUpdate(prevProps, prevState) {
    if (this.state.open) {
      this.menuItems[this.state.focusIndex].focus();
    } else if (prevState.open && this.toggleElem) {
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
    } else if (Dropdown.isTriggerKey('SELECT_MENU_ITEM', e.key)) {
      e.target.click();
      this.setState({
        open: false,
      });
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
    return menuItems.map((menuItem, i) => {
      if (React.isValidElement(menuItem)) {
        const cloneProps = {
          ref: (item) => { this.menuItems[i] = item; },
          className: styles['dropdown-item'],
          key: i,
          onKeyDown: this.handleMenuKeyDown,
        };
        return React.cloneElement(menuItem, cloneProps);
      }
      return (
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
      );
    });
  }

  render() {
    const { open } = this.state;
    const {
      buttonType,
      iconElement,
      menuItems,
      title,
    } = this.props;
    const hasIconElement = React.isValidElement(iconElement);

    return (
      <div
        className={classNames([
          styles.dropdown,
          {
            [styles.show]: open,
            [styles['has-icon']]: hasIconElement,
            [styles.rounded]: hasIconElement,
            [styles.border]: hasIconElement,
            [styles['d-flex']]: hasIconElement,
            [styles['bg-white']]: hasIconElement,
          },
        ])}
        ref={(container) => { this.container = container; }}
      >
        { hasIconElement &&
          <div
            className={[classNames([
              styles['icon-container'],
              styles['d-flex'],
              styles['align-items-center'],
              styles['justify-content-center'],
              styles['border-right'],
            ])]}
          >
            {React.cloneElement(iconElement, {
              className: iconElement.props && Array.isArray(iconElement.props.className) ?
                [...iconElement.props.className, styles['rounded-left']] : styles['rounded-left'],
            })}
          </div>
        }
        <Button
          aria-expanded={open}
          aria-haspopup="true"
          buttonType={buttonType}
          label={title}
          onClick={this.toggle}
          onKeyDown={this.handleToggleKeyDown}
          className={[classNames([
            styles['dropdown-toggle'],
            {
              [styles['border-0']]: hasIconElement,
              [styles['rounded-0']]: hasIconElement,
              [styles['bg-white']]: hasIconElement,
            },
          ])]}
          type="button"
          inputRef={(toggleElem) => { this.toggleElem = toggleElem; }}
        />
        <div
          aria-label={title}
          aria-hidden={!open}
          className={classNames([
            styles['dropdown-menu'],
            { [styles.show]: open },
          ])}
          role="menu"
        >
          {this.generateMenuItems(menuItems)}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  buttonType: PropTypes.string,
  iconElement: PropTypes.element,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
    }),
    PropTypes.element,
  ).isRequired,
  title: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
  buttonType: 'light',
  iconElement: undefined,
};

export default Dropdown;
