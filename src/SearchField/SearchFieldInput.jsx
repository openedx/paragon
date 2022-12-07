import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { FormControl } from '../Form';
import { SearchFieldContext } from './SearchFieldAdvanced';

function SearchFieldInput(props) {
  const {
    inputId, value, handleChange, handleFocus, handleBlur, refs, disabled,
  } = useContext(SearchFieldContext);

  return (
    <FormControl
      {...props}
      ref={refs.input}
      type="text"
      role="searchbox"
      id={inputId.current}
      name="searchfield-input"
      value={value}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      disabled={disabled}
    />
  );
}

SearchFieldInput.propTypes = {
  /** specifies a custom class name. */
  className: PropTypes.string,
  /** specifies the placeholder text for the input. */
  placeholder: PropTypes.string,
};

SearchFieldInput.defaultProps = {
  className: undefined,
  placeholder: undefined,
};

export default SearchFieldInput;
