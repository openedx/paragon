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
  }

  onClick(e) {
    this.buttonRef.focus();
    this.props.onClick(e);
  }

  getRefs(input) {
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
          ...this.props.className,
          styles.btn,
        ], {
          [styles[`btn-${this.props.buttonType}`]]: this.props.buttonType !== undefined,
        }, {
          [styles.close]: this.props.isClose,
        })}
        onBlur={this.props.onBlur}
        onClick={this.onClick}
        onKeyDown={this.props.onKeyDown}
        type={this.props.type}
        ref={(input) => { this.getRefs(input); }}
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
