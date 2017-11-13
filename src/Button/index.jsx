import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.scss';

class Button extends React.Component {
  constructor(props) {
    super(props);

    const {
      onBlur,
      onKeyDown,
    } = props;

    this.onBlur = onBlur.bind(this);
    this.onKeyDown = onKeyDown.bind(this);

    this.setRefs = this.setRefs.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  /*
    The button component is given focus explicitly in its onClick to account
    for the fact that an HTML <button> element in Firefox and Safari does not get
    focus on onClick.

    See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button.
  */
  onClick(e) {
    this.buttonRef.focus();
    this.props.onClick(e);
  }

  setRefs(input) {
    this.buttonRef = input;
    this.props.inputRef(input);
  }

  render() {
    const {
      buttonType,
      className,
      label,
      inputRef,
      isClose,
      type,
      ...other
    } = this.props;

    return (
      <button
        {...other}
        className={classNames([
          ...className,
          styles.btn,
        ], {
          [styles[`btn-${buttonType}`]]: buttonType !== undefined,
        }, {
          [styles.close]: this.props.isClose,
        })}
        onBlur={this.onBlur}
        onClick={this.onClick}
        onKeyDown={this.onKeyDown}
        type={type}
        ref={this.setRefs}

      >
        {this.props.label}
      </button>
    );
  }
}

export const buttonPropTypes = {
  buttonType: PropTypes.string,
  className: PropTypes.arrayOf(PropTypes.string),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  inputRef: PropTypes.func,
  isClose: PropTypes.bool,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  type: PropTypes.string,
};

Button.propTypes = buttonPropTypes;

Button.defaultProps = {
  buttonType: undefined,
  className: [],
  inputRef: () => {},
  isClose: false,
  onBlur: () => {},
  onKeyDown: () => {},
  onClick: () => {},
  type: 'button',
};

export default Button;
