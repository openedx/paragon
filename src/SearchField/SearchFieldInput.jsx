import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Input from '../Input';
import { SearchFieldContext } from './SearchFieldAdvanced';

const SearchFieldInput = (props) => {
  const { className, ...others } = props;

  const {
    inputId, value, handleChange, handleFocus, handleBlur, refs,
  } = useContext(SearchFieldContext);

  return (
    <Input
      {...others}
      ref={refs.input}
      type="search"
      role="searchbox"
      id={inputId.current}
      name="searchfield-input"
      className={classNames(className, 'border-0')}
      value={value}
      autoComplete="off"
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
    />
  );
};

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
