import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { KeyboardArrowUp, KeyboardArrowDown } from '../../icons';
import Icon from '../Icon';
import { Form, IconButton, Spinner } from '../index';

const FormAutosuggest = ({
  value,
  isLoading,
  handleChange,
  name,
  errorMessage,
  helpMessage,
  autoComplete,
  controlClassName,
  className,
  // options,
  handleBlur,
  handleFocus,
  ...props
}) => {
  const dropDownItemsRef = useRef(null);
  const [state, setState] = useState({
    displayValue: '',
    // eslint-disable-next-line no-use-before-define
    icon: expandMoreButton(),
    errorMessage: '',
    dropDownItems: [],
  });

  function expandMoreButton() {
    return (
      <IconButton
        className="expand-more"
        src={KeyboardArrowDown}
        iconAs={Icon}
        size="sm"
        variant="secondary"
        alt="expand-more"
        /* eslint-disable-next-line no-use-before-define */
        onClick={(e) => { handleExpandMore(e); }}
      />
    );
  }

  function expandLessButton() {
    return (
      <IconButton
        className="expand-less"
        src={KeyboardArrowUp}
        iconAs={Icon}
        size="sm"
        variant="secondary"
        alt="expand-less"
        /* eslint-disable-next-line no-use-before-define */
        onClick={(e) => { handleExpandLess(e); }}
      />
    );
  }

  const handleClickOutside = (e) => {
    if (dropDownItemsRef.current && !dropDownItemsRef.current.contains(e.target) && state.dropDownItems.length > 0) {
      const msg = state.displayValue === '' ? errorMessage : '';
      setState(() => ({
        icon: expandMoreButton(),
        dropDownItems: '',
        errorMessage: msg,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  function setValue(valueItem) {
    if (value === valueItem) { return; }

    if (handleChange) {
      handleChange(valueItem);
    }

    const opt = props.options.find((o) => o === valueItem);
    if (opt && opt !== state.displayValue) {
      setState(prevState => ({
        ...prevState,
        displayValue: opt,
      }));
    }
  }

  function handleItemClick(e) {
    setValue(e.target.value);
    setState(prevState => ({
      ...prevState,
      dropDownItems: '',
      // eslint-disable-next-line no-use-before-define
      icon: expandMoreButton(),
    }));
  }

  // eslint-disable-next-line react/sort-comp
  function getItems(strToFind = '') {
    let { options } = props;
    if (strToFind.length > 0) {
      options = options.filter((option) => (option.toLowerCase().includes(strToFind.toLowerCase())));
    }

    return options.map((opt) => {
      // eslint-disable-next-line no-shadow
      let value = opt;
      if (value.length > 30) {
        value = value.substring(0, 30).concat('...');
      }

      return (
        <button
          type="button"
          className="dropdown-item data-hj-suppress"
          value={value}
          key={value}
          onClick={(e) => { handleItemClick(e); }}
        >
          {value}
        </button>
      );
    });
  }

  function setDisplayValue(valueItem) {
    const normalized = valueItem.toLowerCase();
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
        displayValue: valueItem,
      }));
    }
  }

  const handleClick = (e) => {
    const dropDownItems = getItems(e.target.value);
    if (dropDownItems.length > 1) {
      setState(prevState => ({
        ...prevState,
        dropDownItems,
        icon: expandLessButton(),
        errorMessage: '',
      }));
    }

    if (state.dropDownItems.length > 0) {
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        icon: expandMoreButton(),
        errorMessage: '',
      }));
    }
  };

  const handleOnChange = (e) => {
    const findstr = e.target.value;

    if (findstr.length) {
      const filteredItems = getItems(findstr);
      setState(prevState => ({
        ...prevState,
        dropDownItems: filteredItems,
        icon: expandLessButton(),
        errorMessage: '',
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        icon: expandMoreButton(),
        errorMessage,
      }));
    }

    setDisplayValue(e.target.value);
  };

  function handleExpandLess() {
    setState(prevState => ({
      ...prevState,
      dropDownItems: '',
      icon: expandMoreButton(),
    }));
  }

  function handleExpandMore(e) {
    const dropDownItems = getItems(e.target.value);
    setState(prevState => ({
      ...prevState,
      dropDownItems,
      icon: expandLessButton(),
      errorMessage: '',
    }));
  }

  if (handleFocus) {
    handleFocus();
  }

  if (handleBlur) {
    handleBlur();
  }

  return (
    <div className="dropdown-group-wrapper">
      <Form.Group isInvalid={!!errorMessage} className={className}>
        <Form.Control
          name={name}
          type="text"
          value={state.displayValue}
          aria-invalid={errorMessage}
          autoComplete={autoComplete ? 'on' : 'off'}
          onChange={handleOnChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
          trailingElement={state.icon}
          {...props}
        >
          {/* {options || null} */}
        </Form.Control>

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

      <div className="dropdown-container" ref={dropDownItemsRef}>
        {isLoading ? (
          <div className="dropdown-container__loading">
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
  handleFocus: null,
  handleChange: null,
  handleBlur: null,
  helpMessage: '',
  placeholder: '',
  value: null,
  errorMessage: null,
  readOnly: false,
  controlClassName: '',
  className: null,
  autoComplete: null,
  isLoading: false,
};

FormAutosuggest.propTypes = {
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  autoComplete: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  floatingLabel: PropTypes.string,
  handleFocus: PropTypes.func,
  handleChange: PropTypes.func,
  handleBlur: PropTypes.func,
  helpMessage: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  name: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
  controlClassName: PropTypes.string,
};

export default FormAutosuggest;
