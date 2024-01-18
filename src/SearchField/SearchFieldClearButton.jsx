import React, { useContext } from 'react';

import { SearchFieldContext } from './SearchFieldAdvanced';
import Icon from '../Icon';
import IconButton from '../IconButton';

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
    <IconButton
      className="pgn__searchfield__iconbutton-reset"
      type="reset"
      src={icons.clear}
      size="sm"
      iconAs={Icon}
      alt={screenReaderText.clearButton}
      disabled={disabled}
      onClick={handleClick}
      {...props}
    />
  );
}

export default SearchFieldClearButton;
