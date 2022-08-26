import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuItem from '../Menu/MenuItem';

const FormAutosuggestOption = ({
  textContent,
  optClassName,
  ...props
}) => (
  <MenuItem className={classNames(optClassName, 'dropdown-item')} {...props}>
    {textContent}
  </MenuItem>
);

FormAutosuggestOption.defaultProps = {
  optClassName: null,
  textContent: null,
};

FormAutosuggestOption.propTypes = {
  /** Specifies class name to append to the base element. */
  optClassName: PropTypes.string,
  /** Specifies the text-content of the `FormAutosuggestOption`. */
  textContent: PropTypes.string,
};

export default FormAutosuggestOption;
