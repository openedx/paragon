import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '../Menu/MenuItem';

const FormAutosuggestOption = ({
  children,
  className,
  role,
  onClick,
  ...props
}) => (
  <MenuItem
    onClick={(e) => onClick(e)}
    className={classNames(className, 'dropdown-item')}
    role={role}
    {...props}
  >
    {children}
  </MenuItem>
);

FormAutosuggestOption.defaultProps = {
  className: null,
  children: null,
  onClick: null,
  role: 'option',
};

FormAutosuggestOption.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: PropTypes.string,
  /** A click handler for the `FormAutosuggestOption` */
  onClick: PropTypes.func,
  /** An ARIA role describing the `FormAutosuggestOption`. */
  role: PropTypes.string,
};

export default FormAutosuggestOption;
