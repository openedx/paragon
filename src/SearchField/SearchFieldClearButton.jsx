import React, { useContext } from 'react';

import { SearchFieldContext } from './SearchFieldAdvanced';

function SearchFieldClearButton(props) {
  const {
    screenReaderText, icons, value, disabled, refs,
  } = useContext(SearchFieldContext);

  if (!value) {
    return null;
  }

  const handleClick = () => {
    if (refs.input.current) {
      refs.input.current.focus();
    }
  };

  return (
    // eslint-disable-next-line react/button-has-type
    <button type="reset" className="btn" disabled={disabled} onClick={handleClick} {...props}>
      {icons.clear}
      <span className="sr-only">{screenReaderText.clearButton}</span>
    </button>
  );
}

export default SearchFieldClearButton;
