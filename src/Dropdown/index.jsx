import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
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
    this.state = {
      open: false,
      // focusIndex: 0,
    };
  }

  componentDidMount = () => {
    this.addEvents();
  }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.state.open) {
  //     this.menuItems[this.state.focusIndex].focus();
  //   } else if (prevState.open && this.toggleElem) {
  //     this.toggleElem.focus();
  //   }
  // }

  componentWillUnmount = () => {
    // remove open and close events
    this.removeEvents();
  }

  addEvents = () => {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  removeEvents = () => {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  handleDocumentClick = (e) => {
    if (this.container && this.container.contains(e.target) && this.container !== e.target) {
      return;
    }
    if (this.state.open) {
      this.toggle();
    }
  }

  // handleMenuKeyDown = (e) => {
  //   e.preventDefault();
  //   if (Dropdown.isTriggerKey('CLOSE_MENU', e.key)) {
  //     this.toggle();
  //   } else if (Dropdown.isTriggerKey('SELECT_MENU_ITEM', e.key)) {
  //     e.target.click();
  //     this.setState({
  //       open: false,
  //     });
  //   } else if (Dropdown.isTriggerKey('NAVIGATE_DOWN', e.key)) {
  //     this.setState({
  //       focusIndex: (this.state.focusIndex + 1) % this.props.menuItems.length,
  //     });
  //   } else if (Dropdown.isTriggerKey('NAVIGATE_UP', e.key)) {
  //     this.setState({
  //       focusIndex: ((this.state.focusIndex - 1) + this.props.menuItems.length) %
  //                   this.props.menuItems.length,
  //     });
  //   }
  // }
  //
  // handleToggleKeyDown = (e) => {
  //   if (!this.state.open && Dropdown.isTriggerKey('OPEN_MENU', e.key)) {
  //     this.toggle();
  //   } else if (this.state.open && Dropdown.isTriggerKey('CLOSE_MENU', e.key)) {
  //     this.toggle();
  //   }
  // }

  toggle = () => {
    this.setState({
      open: !this.state.open,
      // focusIndex: 0,
    });
  }

  render() {
    const { open } = this.state;
    const {
      buttonType,
      iconElement,
      buttonContent,
    } = this.props;
    const hasIconElement = React.isValidElement(iconElement);

    return (
      <div
        className={classNames(
          'dropdown',
          {
            show: open,
            'has-icon': hasIconElement,
            rounded: hasIconElement,
            border: hasIconElement,
            'd-flex': hasIconElement,
            'bg-white': hasIconElement,
          },
        )}
        ref={(container) => { this.container = container; }}
      >
        { hasIconElement &&
          <div
            className={classNames(
              'icon-container',
              'd-flex',
              'align-items-center',
              'justify-content-center',
              'border-right',
            )}
          >
            {React.cloneElement(iconElement, {
              className: iconElement.props ? classNames(iconElement.props.className, 'rounded-left') : null,
            })}
          </div>
        }
        <Button
          aria-expanded={open}
          aria-haspopup="true"
          buttonType={buttonType}
          onClick={this.toggle}
          onKeyDown={this.handleToggleKeyDown}
          className={classNames(
            'dropdown-toggle',
            {
              'border-0': hasIconElement,
              'rounded-0': hasIconElement,
              'bg-white': hasIconElement,
            },
          )}
          type="button"
          inputRef={(toggleElem) => { this.toggleElem = toggleElem; }}
        >
          {buttonContent}
        </Button>
        {this.state.open && (
          <div className="dropdown-menu show">
            {this.props.children}
          </div>
        )}

      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  buttonType: PropTypes.string,
  iconElement: PropTypes.element,
  buttonContent: PropTypes.string,
};

Dropdown.defaultProps = {
  children: null,
  buttonType: 'light',
  iconElement: undefined,
  buttonContent: 'Dropdown Name',
};

export default Dropdown;
