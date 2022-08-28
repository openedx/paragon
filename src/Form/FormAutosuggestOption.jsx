import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '../Menu/MenuItem';

const FormAutosuggestOption = ({
  children,
  className,
  ...props
}) => (
  <MenuItem className={classNames(className, 'dropdown-item')} {...props}>
    {children}
  </MenuItem>
);

FormAutosuggestOption.defaultProps = {
  className: null,
  children: null,
};

FormAutosuggestOption.propTypes = {
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  children: PropTypes.string,
};

export default FormAutosuggestOption;
