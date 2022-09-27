import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// eslint-disable-next-line import/no-cycle
import DropdownButton from './DropdownButton';
// eslint-disable-next-line import/no-cycle
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';

import withDeprecatedProps, { DeprTypes } from '../../withDeprecatedProps';

const { Provider, Consumer } = React.createContext();

class Dropdown extends React.Component {
  // eslint-disable-next-line react/sort-comp
  static idCounter = 0; // For creating unique ids

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    // Used for aria labelling. Increment the id counter so the next id can be unique
    this.uniqueId = Dropdown.idCounter;
    Dropdown.idCounter += 1;
    this.triggerId = `pgn__dropdown-trigger-${this.uniqueId}`;

    this.containerRef = React.createRef();
    this.menuRef = React.createRef();
    this.buttonRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== this.state.open) {
      if (this.state.open) {
        this.focusFirst();
      } else {
        this.buttonRef.current.focus();
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  getFocusableElements() {
    const selector = 'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])';
    return Array.from(this.menuRef.current.querySelectorAll(selector));
  }

  handleDocumentClick = (e) => {
    if (this.containerRef.current.contains(e.target) && this.containerRef.current !== e.target) {
      return;
    }
    if (this.state.open) {
      this.close();
    }
  };

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
  };

  toggle = () => {
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
  };

  close() {
    document.removeEventListener('click', this.handleDocumentClick, true);
    this.setState({
      open: false,
    });
  }

  open() {
    // adding event listener here so the user can close dropdown on click outside of the dropdown
    document.addEventListener('click', this.handleDocumentClick, true);
    this.setState({
      open: true,
    });
  }

  focusFirst() {
    const focusableElements = this.getFocusableElements();
    if (focusableElements.length) { focusableElements[0].focus(); }
  }

  focusNext() {
    const allFocusableElements = this.getFocusableElements();
    if (allFocusableElements.length === 0) { return; }
    const activeIndex = allFocusableElements.indexOf(document.activeElement);
    const nextIndex = (activeIndex + 1) % allFocusableElements.length;
    allFocusableElements[nextIndex].focus();
  }

  focusPrevious() {
    const allFocusableElements = this.getFocusableElements();
    if (allFocusableElements.length === 0) { return; }
    const activeIndex = allFocusableElements.indexOf(document.activeElement);
    const previousIndex = ((activeIndex - 1) + allFocusableElements.length) % allFocusableElements.length;
    allFocusableElements[previousIndex].focus();
  }

  render() {
    const { children, ...other } = this.props;

    return (
      <div
        {...other}
        className={classNames(
          'dropdown',
          { show: this.state.open },
          other.className,
        )}
        ref={this.containerRef}
      >
        <Provider
          value={{
            buttonRef: this.buttonRef,
            handleMenuKeyDown: this.handleMenuKeyDown,
            isOpen: this.state.open,
            menuRef: this.menuRef,
            toggle: this.toggle,
            triggerId: this.triggerId,
          }}
        >
          {children}
        </Provider>
      </div>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
};

Dropdown.Item = DropdownItem;
Dropdown.Button = DropdownButton;
Dropdown.Menu = DropdownMenu;

const DropdownWithDeprecatedProps = withDeprecatedProps(Dropdown, 'Dropdown', {
  menuItems: {
    deprType: DeprTypes.MOVED_AND_FORMAT,
    message: 'They should be components sent as children.',
    newName: 'children',
    transform: (menuItems, allProps) => {
      if (!Array.isArray(menuItems)) { return null; }
      return (
        <>
          <DropdownButton>
            {React.isValidElement(allProps.iconElement) ? allProps.iconElement : null }
            {allProps.title}
          </DropdownButton>
          <DropdownMenu>
            {menuItems.map((menuItem, i) => {
            /* eslint-disable react/no-array-index-key */
              if (React.isValidElement(menuItem)) {
                return React.cloneElement(menuItem, {
                  className: 'dropdown-item',
                  key: i,
                });
              }
              return <DropdownItem key={i} href={menuItem.href}>{menuItem.label}</DropdownItem>;
            /* eslint-enable react/no-array-index-key */
            })}
          </DropdownMenu>
        </>
      );
    },
  },
  title: {
    deprType: DeprTypes.REMOVED,
    message: 'It should be specified inside the Dropdown.Button component',
  },
  buttonType: {
    deprType: DeprTypes.REMOVED,
    message: 'It should be specified as a className prop',
  },
  iconElement: {
    deprType: DeprTypes.REMOVED,
    message: 'It should be specified inside the buttonContent prop.',
  },
});

DropdownWithDeprecatedProps.propTypes = Dropdown.propTypes;
DropdownWithDeprecatedProps.defaultProps = Dropdown.defaultProps;
DropdownWithDeprecatedProps.Item = Dropdown.Item;
DropdownWithDeprecatedProps.Button = Dropdown.Button;
DropdownWithDeprecatedProps.Menu = Dropdown.Menu;

export { Provider, Consumer };
export default DropdownWithDeprecatedProps;
