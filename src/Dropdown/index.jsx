import React from 'react';
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
      focusIndex: 0,
    };
  }

  componentDidMount = () => {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  componentDidUpdate = (prevProps, prevState) => {
    // const menuItem = this.props.children[this.state.focusIndex].props;
    if (this.state.open) {
      // menuItem.focus();
    } else if (prevState.open && this.toggleElem) {
      this.toggleElem.focus();
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  handleDocumentClick = (e) => {
    if (this.container && this.container.contains(e.target) && this.container !== e.target) {
      this.disableScroll();
      return;
    }
    if (this.state.open) {
      this.toggle();
    }
  }

  disableScroll = () => {
    document.body.style.overflow = 'hidden';
  }

  handleMenuKeyDown = (e) => {
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
        focusIndex: (this.state.focusIndex + 1) % this.props.children.length,
      });
    } else if (Dropdown.isTriggerKey('NAVIGATE_UP', e.key)) {
      this.setState({
        focusIndex: ((this.state.focusIndex - 1) + this.props.children.length) %
                    this.props.children.length,
      });
    }
  }

  handleToggleKeyDown = (e) => {
    if (!this.state.open && Dropdown.isTriggerKey('OPEN_MENU', e.key)) {
      this.toggle();
    } else if (this.state.open && Dropdown.isTriggerKey('CLOSE_MENU', e.key)) {
      this.toggle();
    }
  }

  toggle = () => {
    this.setState({
      open: !this.state.open,
      focusIndex: 0,
    });
  }

  render() {
    const { open } = this.state;
    const {
      buttonType,
      buttonClassName,
      buttonContent,
    } = this.props;

    return (
      <div
        className={this.state.open ? 'dropdown show' : 'dropdown'}
        ref={(container) => { this.container = container; }}
      >
        <Button
          aria-expanded={open}
          aria-haspopup="true"
          className={buttonClassName}
          buttonType={buttonType}
          onClick={this.toggle}
          onKeyDown={this.handleToggleKeyDown}
          type="button"
          focusIndex={this.state.focusIndex}
          inputRef={(toggleElem) => { this.toggleElem = toggleElem; }}
        >
          {buttonContent}
        </Button>
        {this.state.open && (
          <div className="dropdown-menu show" aria-label="primary">
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
  buttonClassName: PropTypes.string,
  buttonContent: PropTypes.string,
};

Dropdown.defaultProps = {
  children: null,
  buttonType: 'light',
  buttonClassName: 'dropdown-toggle',
  buttonContent: 'Dropdown Name',
};

export default Dropdown;
