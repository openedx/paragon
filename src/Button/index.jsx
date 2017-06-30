import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import buttons from 'bootstrap/scss/_buttons.scss';

function Button(props) {
  return (
    <button
      className={classNames([
        buttons.btn,
        ...props.classNames,
      ], {
        [buttons[`btn-${props.buttonType}`]]: props.buttonType !== undefined,
      })}
      onBlur={props.onBlur}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      type={props.type}
      ref={props.inputRef}
      {...props}
    >
      {props.display}
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  display: PropTypes.string.isRequired,
  inputRef: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  buttonType: undefined,
  classNames: [],
  inputRef: () => {},
  onBlur: () => {},
  onClick: () => {},
  onKeyDown: () => {},
  type: 'button',
};

export default Button;
