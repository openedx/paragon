import React, { useContext } from 'react';

import { SearchFieldContext } from './SearchFieldAdvanced';

const SearchFieldSubmitButton = (props) => {
  const { screenReaderText, icons, refs } = useContext(SearchFieldContext);

  return (
    <button
      type="submit"
      className="btn"
      ref={refs.submitButton}
      {...props}
    >
      {icons.submit}
      <span className="sr-only">{screenReaderText.submitButton}</span>
    </button>
  );
};

export default SearchFieldSubmitButton;
