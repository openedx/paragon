import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.dropdownItemRef = React.createRef();
  }

  componentDidMount = () => {
    document.addEventListener('click', this.handleDocumentClick, true);
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.open && this.toggleElem) {
      this.toggleElem.focus();
    }
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleDocumentClick, true);
  }

  getFocusableElements = () => {
    const selector = 'button:not([disabled]), [href]:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"]):not([disabled])';
    return this.dropdownItemRef.current.querySelectorAll(selector);
  }

  focusFirst = () => {
    this.getFocusableElements()[0].focus();
  }

  focusNext = () => {
    const allFocusableElements = Array.from(this.getFocusableElements());
    const activeIndex = allFocusableElements.indexOf(document.activeElement);
    const nextIndex = (activeIndex + 1) % allFocusableElements.length;
    allFocusableElements[nextIndex].focus();
  }

  focusPrevious = () => {
    const allFocusableElements = Array.from(this.getFocusableElements());
    const activeIndex = allFocusableElements.indexOf(document.activeElement);
    const previousIndex =
      ((activeIndex - 1) + allFocusableElements.length) % allFocusableElements.length;
    allFocusableElements[previousIndex].focus();
  }

  // handleDocumentClick = (e) => {
  //   if (this.container && this.container.contains(e.target) && this.container !== e.target) {
  //     return;
  //   }
  //   if (this.state.open) {
  //     // this.toggle();
  //   }
  // }

  handleMenuKeyDown = (e) => {
    e.preventDefault();
    if (e.key === 'ArrowUp') {
      this.focusPrevious();
    } else if (e.key === 'ArrowDown' || 'Tab') {
      this.focusNext();
    }
    if (e.key === 'Escape') {
      this.toggle();
    }
  }

  // refactor to Open() and Close() set state on each function
  // settimeout on Open
  // handleToggleOpen = (e) => {
  //   if (e.key === 'Enter' || e.key === 'ArrowDown') {
  //     console.log('enter pressed');
  //     this.setState({
  //       open: true,
  //     });
  //   } else if (this.state.open && e.key === 'Escape') {
  //     console.log('escape pressed');
  //     this.setState({
  //       open: false,
  //     });
  //   }
  // }

  open = (e) => {
    setTimeout(() => { this.focusFirst(); }, 1);
    this.setState({
      open: true,
    });
  }

  close = (e) => {
    this.setState({
      open: false,
    });
  }

  toggle = () => {
    // conditional here for open close, but could be on Button onClick
    if (this.state.open) {
      this.close();
    } else {
      this.open();
    }
    // this.setState({
    //   open: !this.state.open,
    // });
  }

  render() {
    const { open } = this.state;
    const {
      buttonType,
      buttonClassName,
      buttonContent,
      ...other
    } = this.props;

    return (
      <div
        className={this.state.open ? 'dropdown show' : 'dropdown'}
        ref={(container) => { this.container = container; }}
      >
        <Button
          {...other}
          aria-expanded={open}
          aria-haspopup="true"
          className={buttonClassName}
          buttonType={buttonType}
          onClick={this.toggle}
          type="button"
          inputRef={(toggleElem) => { this.toggleElem = toggleElem; }}
        >
          {buttonContent}
        </Button>
        <div className={this.state.open ? 'dropdown-menu show' : 'dropdown-menu'} aria-label={buttonContent} aria-hidden={!open} role="menu" ref={this.dropdownItemRef} onKeyDown={this.handleMenuKeyDown}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  buttonType: PropTypes.string,
  buttonClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  buttonContent: PropTypes.string.isRequired,
};

Dropdown.defaultProps = {
  buttonType: 'light',
  buttonClassName: 'dropdown-toggle',
};

export default Dropdown;
