import React, { useContext } from 'react';

import { SearchFieldContext } from './SearchFieldAdvanced';

const SearchFieldClearButton = () => {
  const {
    screenReaderText, icons, value,
  } = useContext(SearchFieldContext);

  if (!value) {
    return null;
  }

  return (
    <button type="reset" className="btn">
      {icons.clear}
      <span className="sr-only">{screenReaderText.clearButton}</span>
    </button>
  );
};

export default SearchFieldClearButton;
