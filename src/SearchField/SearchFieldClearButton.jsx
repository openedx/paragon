import React, { useContext } from 'react';

import { SearchFieldContext } from './SearchFieldAdvanced';

const SearchFieldClearButton = (props) => {
  const {
    screenReaderText, icons, value, disabled,
  } = useContext(SearchFieldContext);

  if (!value) {
    return null;
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button type="reset" className="btn" {...props} disabled={disabled}>
      {icons.clear}
      <span className="sr-only">{screenReaderText.clearButton}</span>
    </button>
  );
};

export default SearchFieldClearButton;
