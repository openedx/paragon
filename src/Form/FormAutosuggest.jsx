import React, {
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { KeyboardArrowUp, KeyboardArrowDown } from '../../icons';
import Icon from '../Icon';
import { Form, IconButton, Spinner } from '../index';
import FormAutosuggestOption from './FormAutosuggestOption';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigation';

const FormAutosuggest = ({
  children,
  arrowKeyNavigationSelector,
  name,
  value,
  isLoading,
  errorMessage,
  onChange,
  helpMessage,
  className,
  ...props
}) => {
  const optItemsRef = useRef(null);
  const parentRef = useArrowKeyNavigation({ selectors: arrowKeyNavigationSelector });
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    displayValue: '',
    errorMessage: '',
    dropDownItems: [],
  });

  const setValue = (itemValue, optValue) => {
    if (value === itemValue) { return; }

    if (onChange) { onChange(itemValue); }

    if (optValue !== state.displayValue) {
      setState(prevState => ({
        ...prevState,
        displayValue: optValue,
      }));
    }
  };

  const handleItemClick = (e, optValue) => {
    setValue(e.target.value, optValue);

    setState(prevState => ({
      ...prevState,
      dropDownItems: '',
    }));

    setIsOpen(false);
  };

  function getItems(strToFind = '') {
    let optItems = children;
    console.log('optItems', optItems);

    if (strToFind.length > 0) {
      optItems = optItems
        .filter((opt) => (opt.props.children.toLowerCase().includes(strToFind.toLowerCase())));
    }

    return optItems.map((opt) => {
      // eslint-disable-next-line no-shadow
      const { children, role, className } = opt.props;

      let optValue = children;

      if (optValue.length > 30) {
        optValue = optValue.substring(0, 30).concat('...');
      }

      return (
        <FormAutosuggestOption
          role={role}
          type="button"
          className={className}
          value={optValue}
          key={optValue}
          onClick={(e) => { handleItemClick(e, optValue); }}
        >
          {optValue}
        </FormAutosuggestOption>
      );
    });
  }

  const handleExpandLess = (e) => {
    if (isOpen) {
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
      }));
    } else {
      const dropDownItems = getItems(e.target.value);

      setState(prevState => ({
        ...prevState,
        dropDownItems,
        errorMessage: '',
      }));
    }
  };

  const iconToggle = () => (
    <IconButton
      className="pgn__form-autosuggest__icon-button"
      src={isOpen ? KeyboardArrowUp : KeyboardArrowDown}
      iconAs={Icon}
      size="sm"
      variant="secondary"
      alt="icon toggle"
      onClick={(e) => {
        setIsOpen(!isOpen);
        handleExpandLess(e);
      }}
    />
  );

  const handleClickOutside = (e) => {
    if (optItemsRef.current && !optItemsRef.current.contains(e.target) && state.dropDownItems.length > 0) {
      const msg = state.displayValue === '' ? errorMessage : '';

      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessage: msg,
      }));

      setIsOpen(false);
    }
  };

  const keyDownHandler = e => {
    const msg = state.displayValue === '' ? errorMessage : '';
    if (e.key === 'Escape') {
      e.preventDefault();
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessage: msg,
      }));

      setIsOpen(false);
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
      setValue(opt);
      setState(prevState => ({
        ...prevState,
        displayValue: opt,
      }));
    } else {
      setValue(null);
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
      setIsOpen(true);
    }

    if (state.dropDownItems.length > 0) {
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessage: '',
      }));

      setIsOpen(false);
    }
  };

  const handleOnChange = (e) => {
    const findStr = e.target.value;

    if (findStr.length) {
      const filteredItems = getItems(findStr);
      setState(prevState => ({
        ...prevState,
        dropDownItems: filteredItems,
        errorMessage: '',
      }));

      setIsOpen(true);
    } else {
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessage,
      }));

      setIsOpen(false);
    }

    setDisplayValue(e.target.value);
  };

  return (
    <div className="pgn__form-autosuggest__wrapper" ref={parentRef}>
      <Form.Group isInvalid={!!errorMessage}>
        <Form.Control
          className={className}
          aria-expanded={state.dropDownItems.length > 0 ? 'true' : 'false'}
          name={name}
          value={state.displayValue}
          aria-invalid={errorMessage}
          onChange={handleOnChange}
          onClick={handleClick}
          trailingElement={iconToggle()}
          {...props}
        />

        {helpMessage && !errorMessage && (
          <Form.Control.Feedback type="default" key="help-text">
            {helpMessage}
          </Form.Control.Feedback>
        )}

        {errorMessage && (
          <Form.Control.Feedback type="invalid" key="error" feedback-for={name}>
            {errorMessage}
          </Form.Control.Feedback>
        )}
      </Form.Group>

      <div className="pgn__form-autosuggest__dropdown" ref={optItemsRef}>
        {isLoading ? (
          <div className="pgn__form-autosuggest__dropdown-loading">
            <Spinner animation="border" variant="dark" screenReaderText="loading" />
          </div>
        ) : state.dropDownItems.length > 0 && state.dropDownItems}
      </div>
    </div>
  );
};

FormAutosuggest.defaultProps = {
  arrowKeyNavigationSelector: 'a:not(:disabled),button:not(:disabled, .btn-icon),input:not(:disabled)',
  isLoading: false,
  role: 'list',
  className: null,
  floatingLabel: null,
  onChange: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  errorMessage: null,
  readOnly: false,
  children: null,
  name: 'form-autosuggest',
};

FormAutosuggest.propTypes = {
  /**
   * Specifies the CSS selector string that indicates to which elements
   * the user can navigate using the arrow keys
  */
  arrowKeyNavigationSelector: PropTypes.string,
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
  errorMessage: PropTypes.string,
  /** Specifies the name of the base input element. */
  name: PropTypes.string,
  /** Selected list item is read-only. */
  readOnly: PropTypes.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: PropTypes.node,
};

export default FormAutosuggest;
