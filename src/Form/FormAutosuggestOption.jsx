import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '../Menu/MenuItem';

function FormAutosuggestOption({
  children,
  className,
  onClick,
  ...props
}) {
  return (
    <MenuItem
      as="li"
      role="option"
      tabindex="-1"
      onClick={onClick}
      className={classNames(className, 'dropdown-item')}
      {...props}
    >
      {children}
    </MenuItem>
  );
}

FormAutosuggestOption.defaultProps = {
  className: null,
  children: null,
  onClick: null,
};

FormAutosuggestOption.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: PropTypes.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: PropTypes.func,
};

export default FormAutosuggestOption;
