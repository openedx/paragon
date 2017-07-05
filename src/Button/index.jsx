import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import buttons from 'bootstrap/scss/_buttons.scss';

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
        buttons.btn,
        ...props.className,
      ], {
        [buttons[`btn-${props.buttonType}`]]: props.buttonType !== undefined,
      })}
      onBlur={props.onBlur}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      type={props.type}
      ref={props.inputRef}
      {...other}
    >
      {props.display}
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
