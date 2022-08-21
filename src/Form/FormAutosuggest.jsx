import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { KeyboardArrowUp, KeyboardArrowDown } from '../../icons';
import Icon from '../Icon';
import { Form, IconButton, Spinner } from '../index';

const FormAutosuggest = ({
  value,
  isLoading,
  onChange,
  name,
  errorMessage,
  helpMessage,
  controlClassName,
  className,
  ...props
}) => {
  const dropDownItemsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [state, setState] = useState({
    displayValue: '',
    errorMessage: '',
    dropDownItems: [],
  });

  const setValue = (itemValue) => {
    if (value === itemValue) { return; }

    if (onChange) { onChange(itemValue); }

    const opt = props.options.find((o) => o === itemValue);

    if (opt && opt !== state.displayValue) {
      setState(prevState => ({
        ...prevState,
        displayValue: opt,
      }));
    }
  };

  const handleItemClick = (e) => {
    setValue(e.target.value);

    setState(prevState => ({
      ...prevState,
      dropDownItems: '',
    }));

    setIsOpen(false);
  };

  function getItems(strToFind = '') {
    let { options } = props;

    if (strToFind.length > 0) {
      options = options.filter((option) => (option.toLowerCase().includes(strToFind.toLowerCase())));
    }

    return options.map((opt) => {
      let optValue = opt;
      if (optValue.length > 30) {
        optValue = optValue.substring(0, 30).concat('...');
      }

      return (
        <button
          type="button"
          className="dropdown-item data-hj-suppress"
          value={optValue}
          key={optValue}
          onClick={(e) => { handleItemClick(e); }}
        >
          {optValue}
        </button>
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
    if (dropDownItemsRef.current && !dropDownItemsRef.current.contains(e.target) && state.dropDownItems.length > 0) {
      const msg = state.displayValue === '' ? errorMessage : '';

      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessage: msg,
      }));

      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  const setDisplayValue = (itemValue) => {
    const normalized = itemValue.toLowerCase();
    const opt = props.options.find((o) => o.toLowerCase() === normalized);

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
    const findstr = e.target.value;

    if (findstr.length) {
      const filteredItems = getItems(findstr);
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
    <div className="pgn__form-autosuggest__wrapper">
      <Form.Group isInvalid={!!errorMessage} className={className}>
        <Form.Control
          name={name}
          type="text"
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

      <div className="pgn__form-autosuggest__dropdown" ref={dropDownItemsRef}>
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
  options: null,
  floatingLabel: null,
  onChange: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  errorMessage: null,
  readOnly: false,
  controlClassName: '',
  className: null,
  isLoading: false,
};

FormAutosuggest.propTypes = {
  /** Specifies loading state. */
  isLoading: PropTypes.bool,
  /** Specifies class name to append to the base element. */
  className: PropTypes.string,
  /** Specifies array list elements. */
  options: PropTypes.arrayOf(PropTypes.string),
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
  name: PropTypes.string.isRequired,
  /** Selected list item is read-only. */
  readOnly: PropTypes.bool,
  /** Specifies class name for the control component. */
  controlClassName: PropTypes.string,
};

export default FormAutosuggest;
