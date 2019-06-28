import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownButton from './DropdownButton';
import DropdownMenu from './DropdownMenu';
import DropdownItem from './DropdownItem';

import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

const { Provider, Consumer } = React.createContext();
// const DropdownContext = React.createContext();

class Dropdown extends React.Component {
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

  focusFirst() {
    const focusableElements = this.getFocusableElements();
    if (focusableElements.length) focusableElements[0].focus();
  }

  focusNext() {
    const allFocusableElements = this.getFocusableElements();
    if (allFocusableElements.length === 0) return;
    const activeIndex = allFocusableElements.indexOf(document.activeElement);
    const nextIndex = (activeIndex + 1) % allFocusableElements.length;
    allFocusableElements[nextIndex].focus();
  }

  focusPrevious() {
    const allFocusableElements = this.getFocusableElements();
    if (allFocusableElements.length === 0) return;
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
      children,
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
        <Provider
          value={{
            toggle: this.toggle,
            triggerId: this.triggerId,
            buttonRef: this.buttonRef,
            ariaExpanded: this.state.open,
            ariaHasPopup: true,
            className: classNames({
                show: this.state.open,
              }),
            handleMenuKeyDown: this.handleMenuKeyDown,
            menuRef: this.menuRef,
            ariaLabelledBy: this.triggerId,
            ariaHidden: !this.state.open,
              }}
        >
          {children}
        </Provider>
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

const DropdownWithDeprecatedProps = withDeprecatedProps(Dropdown, 'Dropdown', {
  menuItems: {
    deprType: DEPR_TYPES.MOVED_AND_FORMAT,
    message: 'They should be components sent as children.',
    newName: 'children',
    transform: (menuItems, allProps) => {
      if (!Array.isArray(menuItems)) return null;
      return (
        <React.Fragment>
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
        </React.Fragment>);
    },
  },
  title: {
    deprType: DEPR_TYPES.REMOVED,
    message: 'It should be specified inside the Dropdown.Button component',
  },
  buttonType: {
    deprType: DEPR_TYPES.REMOVED,
    message: 'It should be specified as a className prop',
  },
  iconElement: {
    deprType: DEPR_TYPES.REMOVED,
    message: 'It should be specified inside the buttonContent prop.',
  },
});

DropdownWithDeprecatedProps.propTypes = Dropdown.propTypes;
DropdownWithDeprecatedProps.defaultProps = Dropdown.defaultProps;
DropdownWithDeprecatedProps.Item = DropdownItem;
DropdownWithDeprecatedProps.Button = DropdownButton;
DropdownWithDeprecatedProps.Menu = DropdownMenu;

// Dropdown.Button = DropdownButton;
// export const DropdownConsumer = DropdownContext.Consumer;
export { Provider, Consumer };
export default DropdownWithDeprecatedProps;
