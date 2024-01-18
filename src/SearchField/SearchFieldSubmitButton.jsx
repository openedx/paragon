import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { SearchFieldContext } from './SearchFieldAdvanced';
import Button from '../Button';
import IconButton from '../IconButton';
import Icon from '../Icon';

const STYLE_VARIANTS = [
  'light',
  'dark',
];

const BUTTON_LOCATION_VARIANTS = [
  'internal',
  'external',
];

function SearchFieldSubmitButton(props) {
  const {
    variant, submitButtonLocation, buttonText, ...others
  } = props;
  const {
    screenReaderText, icons, refs, value, disabled,
  } = useContext(SearchFieldContext);

  if (submitButtonLocation === 'internal' && value.length) {
    return null;
  }

  return submitButtonLocation === 'external' ? (
    <Button
      type="submit"
      ref={refs.submitButton}
      variant={variant === 'light' ? 'primary' : 'brand'}
      className="pgn__searchfield__button"
      disabled={disabled}
      {...others}
    >
      {buttonText}
      <span className="sr-only">{screenReaderText.submitButton}</span>
    </Button>
  ) : (
    <IconButton
      className="pgn__searchfield__iconbutton-submit"
      type="submit"
      src={icons.submit}
      iconAs={Icon}
      alt={screenReaderText.submitButton}
      disabled={disabled}
      ref={refs.submitButton}
      {...others}
    />
  );
}

SearchFieldSubmitButton.propTypes = {
  /** The button style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Controls whether the search button is internal as an icon or external as a button. */
  submitButtonLocation: PropTypes.oneOf(BUTTON_LOCATION_VARIANTS),
  /**
   * Specifies a text that is displayed on the button.
   * The `submitButtonLocation` prop should be set to `external`.
   */
  buttonText: PropTypes.string,
};

SearchFieldSubmitButton.defaultProps = {
  variant: 'light',
  submitButtonLocation: 'internal',
  buttonText: 'Search',
};

export default SearchFieldSubmitButton;
