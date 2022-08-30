import React, {
  useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';
import { KeyboardArrowUp, KeyboardArrowDown } from '../../icons';
import Icon from '../Icon';
import { Form, IconButton, Spinner } from '../index';
import useArrowKeyNavigation from '../hooks/useArrowKeyNavigation';

const MAX_OPTION_LENGTH = 30;

const FormAutosuggest = ({
  children,
  arrowKeyNavigationSelector,
  value,
  isLoading,
  errorMessageText,
  onChange,
  helpMessage,
  ...props
}) => {
  const optItemsRef = useRef(null);
  const parentRef = useArrowKeyNavigation({ selectors: arrowKeyNavigationSelector });
  const [isClose, setIsClose] = useState(true);
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

    setIsClose(true);
  };

  function getItems(strToFind = '') {
    let childrenOpt = React.Children.map(children, (child) => {
      // eslint-disable-next-line no-shadow
      const { children, ...rest } = child.props;

      let newChildren = children;

      if (newChildren.length > MAX_OPTION_LENGTH) {
        newChildren = children.substring(0, MAX_OPTION_LENGTH).concat('...');
      }

      const modifiedOpt = React.cloneElement(child, {
        ...rest,
        children: newChildren,
        value: newChildren,
        onClick: (e) => handleItemClick(e, newChildren),
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
    setIsClose(!isClose);

    const newState = {
      dropDownItems: '',
    };

    if (isClose) {
      newState.dropDownItems = getItems(e.target.value);
      newState.errorMessage = '';
    }

    setState(prevState => ({
      ...prevState,
      ...newState,
    }));
  };

  const iconToggle = () => (
    <IconButton
      className="pgn__form-autosuggest__icon-button"
      src={isClose ? KeyboardArrowDown : KeyboardArrowUp}
      iconAs={Icon}
      size="sm"
      variant="secondary"
      alt="icon toggle"
      onClick={(e) => handleExpand(e, isClose)}
    />
  );

  const handleClickOutside = (e) => {
    if (optItemsRef.current && !optItemsRef.current.contains(e.target) && state.dropDownItems.length > 0) {
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessage: !state.displayValue ? errorMessageText : '',
      }));

      setIsClose(true);
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

      setIsClose(true);
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

      setIsClose(false);
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

      setIsClose(false);
    } else {
      setState(prevState => ({
        ...prevState,
        dropDownItems: '',
        errorMessageText,
      }));

      setIsClose(true);
    }

    setDisplayValue(e.target.value);
  };

  return (
    <div className="pgn__form-autosuggest__wrapper" ref={parentRef}>
      <Form.Group isInvalid={!!state.errorMessage}>
        <Form.Control
          aria-expanded={(state.dropDownItems.length > 0).toString()}
          value={state.displayValue}
          aria-invalid={state.errorMessage}
          onChange={handleOnChange}
          onClick={handleClick}
          trailingElement={iconToggle()}
          {...props}
        />

        {helpMessage && !state.errorMessage && (
          <Form.Control.Feedback type="default" key="help-text">
            {helpMessage}
          </Form.Control.Feedback>
        )}

        {state.errorMessage && (
          <Form.Control.Feedback type="invalid" key="error" feedback-for={props.name}>
            {errorMessageText}
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
  errorMessageText: null,
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
  errorMessageText: PropTypes.string,
  /** Specifies the name of the base input element. */
  name: PropTypes.string,
  /** Selected list item is read-only. */
  readOnly: PropTypes.bool,
  /** Specifies the content of the `FormAutosuggest`. */
  children: PropTypes.node,
};

export default FormAutosuggest;
