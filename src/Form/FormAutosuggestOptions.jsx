import React from 'react';
import MenuItem from '../Menu/MenuItem';
import PropTypes from 'prop-types';

const FormAutosuggestOptions = ({
  type,
  className,
  value,
  key,
  onClick,
  children,
}) => (
  <MenuItem type={type} className={className} value={value} key={key} onClick={onClick}>
    {children}
  </MenuItem>
);

FormAutosuggestOptions.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
  key: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
};

FormAutosuggestOptions.defaultProps = {
  type: null,
  className: null,
  value: null,
  key: null,
  onClick: null,
  children: null,
};

export default FormAutosuggestOptions;
