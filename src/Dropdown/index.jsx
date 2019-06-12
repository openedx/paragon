import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from '../Button';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.menuItems = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        this.focusFirst();
      } else {
        this.toggleButton.focus();
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  getFocusableElements() {
    const selector = 'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])';
    return Array.from(this.menuItems.current.querySelectorAll(selector));
  }

  focusFirst() {
    this.getFocusableElements()[0].focus();
  }

  focusNext() {
    const allFocusableElements = this.getFocusableElements();
    const activeIndex = allFocusableElements.indexOf(document.activeElement);
    const nextIndex = (activeIndex + 1) % allFocusableElements.length;
    allFocusableElements[nextIndex].focus();
  }

  focusPrevious() {
    const allFocusableElements = this.getFocusableElements();
    const activeIndex = allFocusableElements.indexOf(document.activeElement);
    const previousIndex =
      ((activeIndex - 1) + allFocusableElements.length) % allFocusableElements.length;
    allFocusableElements[previousIndex].focus();
  }

  handleDocumentClick = (e) => {
    if (this.container && this.container.contains(e.target) && this.container !== e.target) {
      return;
    }
    if (this.state.open) {
      this.close();
    }
  }

  handleMenuKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowUp':
        e.preventDefault();
        this.focusPrevious();
        break;
      case 'ArrowDown':
        e.preventDefault();
        this.focusNext();
        break;
      case 'Tab':
        e.preventDefault();
        if (e.shiftKey) {
          this.focusPrevious();
        } else {
          this.focusNext();
        }
        break;
      case 'Escape':
        e.stopPropagation();
        this.close();
        break;
      default:
        break;
    }
  }

  open() {
    // adding event listener here so the user can close dropdown on click outside of the dropdown
    document.addEventListener('click', this.handleDocumentClick, true);
    this.setState({
      open: true,
    });
  }

  close() {
    document.removeEventListener('click', this.handleDocumentClick, true);
    this.setState({
      open: false,
    });
  }

  toggle = () => {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  }

  render() {
    const {
      buttonClassName,
      buttonContent,
      className,
      ...other
    } = this.props;

    return (
      <div
        {...other}
        className={classNames(
          'dropdown',
          className,
          {
            show: this.state.open,
          },
        )}
        ref={(container) => { this.container = container; }}
      >
        <Button
          className={classNames(
            'dropdown-toggle',
            buttonClassName,
          )}
          aria-expanded={this.state.open}
          aria-haspopup="true"
          onClick={this.toggle}
          type="button"
          inputRef={(toggleButton) => { this.toggleButton = toggleButton; }}
        >
          {buttonContent}
        </Button>
        {/* eslint-disable-next-line jsx-a11y/interactive-supports-focus */}
        <div
          className={classNames(
            'dropdown-menu',
            {
              show: this.state.open,
            },
          )}
          aria-label={buttonContent}
          aria-hidden={!this.state.open}
          role="menu"
          ref={this.menuItems}
          onKeyDown={this.handleMenuKeyDown}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  className: PropTypes.string,
  buttonClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  buttonContent: PropTypes.node.isRequired,
};

Dropdown.defaultProps = {
  className: null,
  buttonClassName: 'btn-light',
};

export default Dropdown;

Dropdown.Item = (props) => {
  const {
    tag, children, className, ...other
  } = props;
  const item = React.createElement(
    tag,
    {
      ...other,
      className: classNames(
        'dropdown-item',
        className,
      ),
    },
    children,
  );
  return item;
};

Dropdown.Item.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

Dropdown.Item.defaultProps = {
  tag: 'a',
  children: undefined,
  className: null,
};
