import React, { useContext } from 'react';
import classNames from 'classnames';

import { SearchFieldContext } from './SearchFieldAdvanced';

const SearchFieldClearButton = () => {
  const {
    screenReaderText, icons, value, handleClear,
  } = useContext(SearchFieldContext);

  return (
    <button
      type="reset"
      className={classNames('btn px-2', { 'd-none': !value })}
      onClick={handleClear}
    >
      {icons.clear}
      <span className="sr-only">{screenReaderText.clearButton}</span>
    </button>
  );
};

export default SearchFieldClearButton;
