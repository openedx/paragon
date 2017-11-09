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

    this.onClick = this.onClick.bind(this);
    this.setRefs = this.setRefs.bind(this);
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
    this.props.inputRef(input);
    this.buttonRef = input;
  }

  render() {
    const {
      buttonType,
      className,
      label,
      inputRef,
      isClose,
      onBlur,
      onClick,
      onKeyDown,
      type,
      ...other
    } = this.props;

    return (
      <button
        className={classNames([
          ...className,
          styles.btn,
        ], {
          [styles[`btn-${buttonType}`]]: buttonType !== undefined,
        }, {
          [styles.close]: isClose,
        })}
        onBlur={onBlur}
        onClick={onClick}
        onKeyDown={onKeyDown}
        type={type}
        ref={this.setRefs}
        {...other}
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
  onClick: () => {},
  onKeyDown: () => {},
  type: 'button',
};

export default Button;
