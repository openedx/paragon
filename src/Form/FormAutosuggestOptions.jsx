import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from '../Menu/MenuItem';

const FormAutosuggestOptions = ({
  value,
  optionClassName,
  onClick,
  children,
  role,
  ...props
}) => (
  <MenuItem
    className={optionClassName}
    value={value}
    role={role}
    onClick={onClick}
    {...props}
  >
    {children}
  </MenuItem>
);

FormAutosuggestOptions.propTypes = {
  role: PropTypes.string,
  type: PropTypes.string,
  optionClassName: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

FormAutosuggestOptions.defaultProps = {
  type: null,
  optionClassName: 'dropdown-item',
  value: null,
  role: null,
  onClick: null,
  children: null,
};

export default FormAutosuggestOptions;
