/* eslint-disable no-unused-vars */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import borders from 'bootstrap/scss/utilities/_borders.scss';
import buttons from 'bootstrap/scss/_buttons.scss';

function Button(props) {
  const styles = [
    ...props.classNames,
    'buttons.btn',
  ];

  if (props.buttonType) {
    styles.push(`buttons.btn-${props.buttonType}`);
  }

  return (
    <button
      onBlur={props.onBlur}
      onClick={props.onClick}
      onKeyDown={props.onKeyDown}
      styleName={classNames(styles)}
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
  onBlur: PropTypes.function,
  onClick: PropTypes.function,
  onKeyDown: PropTypes.function,
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
