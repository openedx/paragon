import React, {
  useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { KeyboardArrowUp, KeyboardArrowDown } from '../../icons';
import Icon from '../Icon';
import FormGroup from './FormGroup';
import FormControl from './FormControl';
import FormControlFeedback from './FormControlFeedback';
import IconButton from '../IconButton';
import Spinner from '../Spinner';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigation';
import messages from './messages';

function FormAutosuggest({
  children,
  arrowKeyNavigationSelector,
  ignoredArrowKeysNames,
  screenReaderText,
  value,
  isLoading,
  errorMessageText,
  onChange,
  onSelected,
  helpMessage,
  ...props
}) {
  const intl = useIntl();
  const parentRef = useArrowKeyNavigation({
    selectors: arrowKeyNavigationSelector,
    ignoredKeys: ignoredArrowKeysNames,
  });
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [state, setState] = useState({
    displayValue: value || '',
    errorMessage: '',
    dropDownItems: [],
  });

  const setValue = (itemValue, optValue) => {
    if (value === itemValue) { return; }

    if (onSelected) { onSelected(itemValue); }

    if (optValue !== state.displayValue) {
      setState(prevState => ({
        ...prevState,
        displayValue: optValue,
      }));
    }
  };

  const handleItemClick = (e, optValue, onClick) => {
    setValue(e.target.value, optValue);

    setState(prevState => ({
      ...prevState,
      dropDownItems: '',
    }));

    setIsMenuClosed(true);

    if (onClick) {
      onClick(e);
    }
  };

  function getItems(strToFind = '') {
    let childrenOpt = React.Children.map(children, (child) => {
      // eslint-disable-next-line no-shadow
      const { children, onClick, ...rest } = child.props;

      const modifiedOpt = React.cloneElement(child, {
        ...rest,
        children,
        value: children,
        onClick: (e) => handleItemClick(e, children, onClick),
      });

      return modifiedOpt;
    });

    if (strToFind.length > 0) {
      childrenOpt = childrenOpt
        .filter((opt) => (opt.props.children.toLowerCase().includes(strToFind.toLowerCase())));
    }

    return childrenOpt;
  }

  const handleExpand = (e) => {
    setIsMenuClosed(!isMenuClosed);

    const newState = {
      dropDownItems: [],
    };

    if (isMenuClosed) {
      newState.dropDownItems = getItems(e.target.value);
      newState.errorMessage = '';
    }

    setState(prevState => ({
      ...prevState,
      ...newState,
    }));
  };

  const iconToggle = (
    <IconButton
      className="pgn__form-autosuggest__icon-button"
      src={isMenuClosed ? KeyboardArrowDown : KeyboardArrowUp}
      iconAs={Icon}
      size="sm"
      variant="secondary"
      alt={isMenuClosed
        ? intl.formatMessage(messages.iconButtonOpened)
        : intl.formatMessage(messages.iconButtonClosed)}
      onClick={(e) => handleExpand(e, isMenuClosed)}
    />
  );

  const handleClickOutside = (e) => {
    if (parentRef.current && !parentRef.current.contains(e.target) && state.dropDownItems.length > 0) {
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessage: !state.displayValue ? errorMessageText : '',
      }));

      setIsMenuClosed(true);
    }
  };

  const keyDownHandler = e => {
    if (e.key === 'Escape') {
      e.preventDefault();

      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessage: !state.displayValue ? errorMessageText : '',
      }));

      setIsMenuClosed(true);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  const setDisplayValue = (itemValue) => {
    const optValue = [];

    children.forEach(opt => {
      optValue.push(opt.props.children);
    });

    const normalized = itemValue.toLowerCase();
    const opt = optValue.find((o) => o.toLowerCase() === normalized);

    if (opt) {
      setState(prevState => ({
        ...prevState,
        displayValue: opt,
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        displayValue: itemValue,
      }));
    }
  };

  const handleClick = (e) => {
    const dropDownItems = getItems(e.target.value);

    if (dropDownItems.length > 1) {
      setState(prevState => ({
        ...prevState,
        dropDownItems,
        errorMessage: '',
      }));

      setIsMenuClosed(false);
    }
  };

  const handleOnChange = (e) => {
    const findStr = e.target.value;

    if (onChange) { onChange(findStr); }

    if (findStr.length) {
      const filteredItems = getItems(findStr);
      setState(prevState => ({
        ...prevState,
        dropDownItems: filteredItems,
        errorMessage: '',
      }));

      setIsMenuClosed(false);
    } else {
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessageText,
      }));

      setIsMenuClosed(true);
    }

    setDisplayValue(e.target.value);
  };

  return (
    <div className="pgn__form-autosuggest__wrapper" ref={parentRef}>
      <FormGroup isInvalid={!!state.errorMessage}>
        <FormControl
          aria-expanded={(state.dropDownItems.length > 0).toString()}
          aria-owns="pgn__form-autosuggest__dropdown-box"
          value={state.displayValue}
          aria-invalid={state.errorMessage}
          onChange={handleOnChange}
          onClick={handleClick}
          trailingElement={iconToggle}
          {...props}
        />

        {helpMessage && !state.errorMessage && (
          <FormControlFeedback type="default">
            {helpMessage}
          </FormControlFeedback>
        )}

        {state.errorMessage && (
          <FormControlFeedback type="invalid" feedback-for={props.name}>
            {errorMessageText}
          </FormControlFeedback>
        )}
      </FormGroup>

      <div
        id="pgn__form-autosuggest__dropdown-box"
        className="pgn__form-autosuggest__dropdown"
      >
        {isLoading ? (
          <div className="pgn__form-autosuggest__dropdown-loading">
            <Spinner animation="border" variant="dark" screenReaderText={screenReaderText} />
          </div>
        ) : state.dropDownItems.length > 0 && state.dropDownItems}
      </div>
    </div>
  );
}

FormAutosuggest.defaultProps = {
  arrowKeyNavigationSelector: 'a:not(:disabled),button:not(:disabled, .btn-icon),input:not(:disabled)',
  ignoredArrowKeysNames: ['ArrowRight', 'ArrowLeft'],
  isLoading: false,
  role: 'list',
  className: null,
  floatingLabel: null,
  onChange: null,
  onSelected: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  errorMessageText: null,
  readOnly: false,
  children: null,
  name: 'form-autosuggest',
  screenReaderText: 'loading',
};

FormAutosuggest.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: PropTypes.string,
  /** Specifies ignored hook keys. */
  ignoredArrowKeysNames: PropTypes.arrayOf(PropTypes.string),
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** An ARIA role describing the form autosuggest. */
  role: PropTypes.string,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies floating label to display for the input component. */
  floatingLabel: PropTypes.string,
  /** Specifies onChange event handler. */
  onChange: PropTypes.func,
  /** Specifies help information for the user. */
  helpMessage: PropTypes.string,
  /** Specifies the placeholder text for the input. */
  placeholder: PropTypes.string,
  /** Specifies values for the input. */
  value: PropTypes.string,
  /** Informs user has errors. */
  errorMessageText: PropTypes.string,
  /** Specifies the name of the base input element. */
  name: PropTypes.string,
  /** Selected list item is read-only. */
  readOnly: PropTypes.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: PropTypes.node,
  /** Specifies the screen reader text */
  screenReaderText: PropTypes.string,
  /** Function that receives the selected value. */
  onSelected: PropTypes.func,
};

export default FormAutosuggest;
