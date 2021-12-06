/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import SearchFieldAdvanced, { SearchFieldContext } from './SearchFieldAdvanced';
import SearchFieldLabel from './SearchFieldLabel';
import SearchFieldInput from './SearchFieldInput';
import SearchFieldClearButton from './SearchFieldClearButton';
import SearchFieldSubmitButton from './SearchFieldSubmitButton';

const STYLE_VARIANTS = [
  'light',
  'dark',
];

const BUTTON_LOCATION_VARIANTS = [
  'internal',
  'external',
];

const SearchField = (props) => {
  const {
    label,
    placeholder,
    inputProps,
    variant,
    submitButtonLocation,
    buttonText,
    ...others
  } = props;

  const Wrapper = (wrapperProps) => (submitButtonLocation === 'external'
    ? <div className="pgn__searchfield_wrapper">{wrapperProps.children}</div>
    : <>{wrapperProps.children}</>);

  return (
    <>
      <SearchField.Advanced {...others} submitButtonLocation={submitButtonLocation}>
        <Wrapper>
          <SearchField.Label>{label}</SearchField.Label>
          <SearchField.Input placeholder={placeholder} {...inputProps} />
          <SearchField.ClearButton />
        </Wrapper>
        <SearchField.SubmitButton
          variant={variant}
          submitButtonLocation={submitButtonLocation}
          buttonText={buttonText}
        />
      </SearchField.Advanced>
    </>
  );
};

SearchField.propTypes = {
  /** specifies a callback function for when the `SearchField` is submitted by the user. For example:
  ```jsx
  <SearchField onSubmit={(value) => { console.log(value); } />
  ``` */
  onSubmit: PropTypes.func.isRequired,
  /** specifies the label to use for the input field (e.g., for i18n translations). */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** specifies a custom class name. */
  className: PropTypes.string,
  /** specifies a callback function for when the user loses focus in the `SearchField` component. The default is an empty function. For example:
  ```jsx
  <SearchField onBlur={event => console.log(event)} />
  ``` */
  onBlur: PropTypes.func,
  /** specifies a callback function for when the value in `SearchField` is changed by the user. The default is an empty function. For example:
  ```jsx
  <SearchField onChange={value => console.log(value)} />
  ``` */
  onChange: PropTypes.func,
  /** specifies a callback function for when the value in `SearchField` is cleared by the user. The default is an empty function. For example:
  ```jsx
  <SearchField onClear={() => console.log('search cleared')} />
  ``` */
  onClear: PropTypes.func,
  /** specifies a callback function for when the user focuses in the `SearchField` component. The default is an empty function. For example:
  ```jsx
  <SearchField onFocus={event => console.log(event)} />
  ``` */
  onFocus: PropTypes.func,
  /** specifies the placeholder text for the input. */
  placeholder: PropTypes.string,
  /** specifies the screenreader text for both the clear and submit buttons (e.g., for i18n translations). The default is `{ label: 'search', clearButton: 'clear search', searchButton: 'submit search' }`. */
  screenReaderText: PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    submitButton: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    clearButton: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  }),
  /** specifies the initial value for the input. The default is an empty string. */
  value: PropTypes.string,
  /** specifies the icon element(s) to use for the clear and submit buttons. The default is `{ submit: <FontAwesomeIcon icon={faSearch} />, clear: <FontAwesomeIcon icon={faTimes} /> }`. */
  icons: PropTypes.shape({
    submit: PropTypes.element.isRequired,
    clear: PropTypes.element,
  }),
  /** specifies the aria-label attribute on the form element. This is useful if you use the `SearchField` component more than once on a page. */
  formAriaLabel: PropTypes.string,
  /** Props to be passed to the form input */
  inputProps: PropTypes.shape({}),
  /** The button style variant to use. */
  variant: PropTypes.oneOf(STYLE_VARIANTS),
  /** Specifies whether the `SearchField` is disabled. */
  disabled: PropTypes.bool,
  /** Controls whether the search button is internal as an icon or external as a button. */
  submitButtonLocation: PropTypes.oneOf(BUTTON_LOCATION_VARIANTS),
  /**
   * Specifies a text that is displayed on the button.
   * The `submitButtonLocation` prop should be set to `external`.
   */
  buttonText: PropTypes.string,
};

SearchField.defaultProps = {
  label: undefined,
  placeholder: undefined,
  className: undefined,
  formAriaLabel: undefined,
  value: '',
  screenReaderText: {
    label: 'search',
    submitButton: 'submit search',
    clearButton: 'clear search',
  },
  icons: {
    clear: <FontAwesomeIcon icon={faTimes} />,
    submit: <FontAwesomeIcon icon={faSearch} />,
  },
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onClear: () => {},
  inputProps: {},
  variant: 'light',
  disabled: false,
  submitButtonLocation: 'internal',
  buttonText: 'Search',
};

SearchField.Advanced = SearchFieldAdvanced;
SearchField.Label = SearchFieldLabel;
SearchField.Input = SearchFieldInput;
SearchField.ClearButton = SearchFieldClearButton;
SearchField.SubmitButton = SearchFieldSubmitButton;
SearchField.Context = SearchFieldContext;

export default SearchField;
