import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
// import listenForOutsideClicks from 'react-onclickoutside';
import { ExpandLess, ExpandMore } from '../../icons';
import Icon from '../Icon';
import { IconButton } from '../index';
// eslint-disable-next-line import/no-cycle
import { FormCustomGroup } from './index';

const FormAutosuggest = (props, { value, handleChange }) => {
  const [state, setState] = useState({
    displayValue: '',
    icon: expandMoreButton(),
    errorMessage: '',
    dropDownItems: [],
  });

  function shouldComponentUpdate(nextProps) {
    if (value !== nextProps.value && nextProps.value !== null) {
      const opt = options.find((o) => o === nextProps.value);
      if (opt && opt !== state.displayValue) {
        setState(prevState => ({
          ...prevState,
          displayValue: opt,
        }));
      }
      return false;
    }

    return true;
  }

  // eslint-disable-next-line react/sort-comp
  function getItems(strToFind = '') {
    let { options } = props;
    if (strToFind.length > 0) {
      options = options.filter((option) => (option.toLowerCase().includes(strToFind.toLowerCase())));
    }

    return options.map((opt) => {
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

  function setValue(valueItem) {
    if (value === valueItem) {
      return;
    }

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
        errorMessage: props.errorMessage,
      }));
    }

    setDisplayValue(e.target.value);
  };

  const handleClickOutside = () => {
    if (state.dropDownItems.length > 0) {
      const msg = state.displayValue === '' ? props.errorMessage : '';
      setState(() => ({
        icon: expandMoreButton(),
        dropDownItems: '',
        errorMessage: msg,
      }));
    }
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

  const handleFocus = useCallback((e) => {
    if (props.handleFocus) {
      props.handleFocus(e);
    }
  }, [props]);

  const handleOnBlur = useCallback((e) => {
    if (props.handleBlur) {
      props.handleBlur(e);
    }
  }, [props]);

  function handleItemClick(e) {
    setValue(e.target.value);
    setState(prevState => ({
      ...prevState,
      dropDownItems: '',
      // eslint-disable-next-line no-use-before-define
      icon: expandMoreButton(),
    }));
  }

  function expandMoreButton() {
    return (
      <IconButton
        className="expand-more"
        src={ExpandMore}
        iconAs={Icon}
        size="sm"
        variant="secondary"
        alt="expand-more"
        onClick={(e) => { handleExpandMore(e); }}
      />
    );
  }

  function expandLessButton() {
    return (
      <IconButton
        className="expand-less"
        src={ExpandLess}
        iconAs={Icon}
        size="sm"
        variant="secondary"
        alt="expand-less"
        onClick={(e) => { handleExpandLess(e); }}
      />
    );
  }

  return (
    <div className="dropdown-group-wrapper">
      <FormCustomGroup
        name={props.name}
        type="text"
        value={state.displayValue}
        readOnly={props.readOnly}
        controlClassName={props.controlClassName}
        errorMessage={state.errorMessage}
        trailingElement={state.icon}
        floatingLabel={props.floatingLabel}
        placeholder={props.placeholder}
        helpText={props.helpMessage}
        handleChange={handleOnChange}
        handleClick={handleClick}
        handleBlur={handleOnBlur}
        handleFocus={handleFocus}
      />
      <div className="dropdown-container">
        { state.dropDownItems.length > 0 ? state.dropDownItems : null }
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
};

FormAutosuggest.propTypes = {
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
