import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import buttons from 'bootstrap/scss/_buttons.scss';

function Button(props) {
  const classes = [
    buttons.btn,
  ];

  if (props.buttonType) {
    classes.push(buttons[`btn-${props.buttonType}`]);
  }

  return (
    <button
      className={classNames([
        ...classes,
        ...props.classNames,
      ])}
      onBlur={props.onBlur}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      type={props.type}
    >
      {props.display}
    </button>
  );
}

Button.propTypes = {
  buttonType: PropTypes.string,
  classNames: PropTypes.arrayOf(PropTypes.string),
  display: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  type: PropTypes.string,
};

Button.defaultProps = {
  buttonType: undefined,
  classNames: [],
  onBlur: () => {},
  onClick: () => {},
  onKeyDown: () => {},
  type: 'button',
};

export default Button;
