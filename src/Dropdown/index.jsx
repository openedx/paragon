import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      focusIndex: 0,
    };
    this.dropdownItem = React.createRef();
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

  handleDocumentClick = (e) => {
    if (this.container && this.container.contains(e.target) && this.container !== e.target) {
      return;
    }
    if (this.state.open) {
      this.toggle();
    }
  }

  handleMenuKeyDown = () => {
    console.log('handleMenuKeyDown');
    // on key up and down, preventDefault
    // prevent component from knowing the event happened to stop window from scrolling
  }

  handleToggleKeyDown = (e) => {
    console.log('handleToggleKeyDown', e.key);
    if (e.key === 'Enter' || e.key === 'ArrowDown') {
      this.toggle();
    } else if (this.state.open && e.key === 'Escape') {
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
          onKeyDown={this.handleToggleKeyDown}
          type="button"
          focusIndex={this.state.focusIndex}
          inputRef={(toggleElem) => { this.toggleElem = toggleElem; }}
        >
          {buttonContent}
        </Button>
        {this.state.open && (
          <div className="dropdown-menu show" aria-label={buttonContent} aria-hidden={!open} role="menu">
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
