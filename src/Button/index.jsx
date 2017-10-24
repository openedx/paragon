import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.scss';

function Button(props) {
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
  } = props;

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
      ref={inputRef}
      {...other}
    >
      {label}
    </button>
  );
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
