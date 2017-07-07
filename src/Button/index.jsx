import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Button.scss';

function Button(props) {
  const {
    buttonType,
    className,
    display,
    inputRef,
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
      })}
      onBlur={onBlur}
      onClick={onClick}
      onKeyDown={onKeyDown}
      type={type}
      ref={inputRef}
      {...other}
    >
      {display}
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string,
  className: PropTypes.arrayOf(PropTypes.string),
  display: PropTypes.string.isRequired,
  inputRef: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  buttonType: undefined,
  className: [],
  inputRef: () => {},
  onBlur: () => {},
  onClick: () => {},
  onKeyDown: () => {},
  type: 'button',
};

export default Button;
