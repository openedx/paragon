import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ExpandMore, Close } from '../../icons';
import Button from '../Button/index';
import { Form } from '../index';
import Chip from '../Chip';

export const MULTISELECT_NO_OPTIONS_TEXT = 'No options';

const FormMultiselect = React.forwardRef(({
  floatingLabel,
  options,
  noOptionsText,
  selectedOptions,
  setSelectedOptions,
  errorText,
  disabled,
  variant,
}, ref) => {
  const defaultOptions = (options || []).filter(item => !selectedOptions.includes(item));
  const [isOpen, setIsOpen] = useState(false);
  const [isActiveInput, setIsActiveInput] = useState(false);
  const [optionItems, setOptionItems] = useState(defaultOptions);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);
  const dropdownOptions = searchValue
    ? optionItems.filter(item => item.toLowerCase().includes(searchValue.toLowerCase()))
    : optionItems;

  const handleInputFocus = () => {
    setIsActiveInput(true);
    setIsOpen(true);
  };

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
    setIsOpen(true);
  };

  const handleRemove = (option) => {
    setOptionItems([...optionItems, option]);
    setSelectedOptions(selectedOptions.filter(item => item !== option));
  };

  const handleReset = () => {
    setSelectedOptions([]);
    setOptionItems(options);
  };

  const handleSelect = (option) => {
    setOptionItems(optionItems.filter(item => item !== option));
    setSelectedOptions([...selectedOptions, option]);
    inputRef.current.focus();
    setSearchValue('');
  };

  return (
    <div className="pgn__form-multiselect" ref={ref}>
      <div
        className={classNames('pgn__form-multiselect-field', {
          error: !!errorText,
          disabled,
        })}
      >
        <div className="pgn__form-multiselect-field-wrapper">
          <div className={classNames('pgn__form-multiselect-field-label',
            isActiveInput || !!selectedOptions.length ? 'slide-up' : 'slide-down', {
              dark: variant === 'dark',
            })}
          >
            {floatingLabel}
          </div>
          {selectedOptions.map((item) => (
            <Chip
              iconAfter={Close}
              onClick={() => handleRemove(item)}
              className="pgn__form-multiselect-field-chip"
              key={item}
            >
              <span className="pgn__form-multiselect-field-chip-title">
                {item}
              </span>
            </Chip>
          ))}
          <Form.Control
            ref={inputRef}
            className="pgn__form-multiselect-search"
            type="text"
            value={searchValue}
            onChange={handleSearch}
            placeholder={(isActiveInput || selectedOptions.length) ? '' : floatingLabel}
            onFocus={handleInputFocus}
            onBlur={() => setIsActiveInput(false)}
          />
        </div>
        <div className="pgn__form-multiselect-button-group">
          {!!selectedOptions.length && (
          <Button
            className="pgn__form-multiselect-field-hide-btn"
            iconAfter={Close}
            onClick={handleReset}
          />
          )}
          <span className="pgn__form-multiselect-button-group-border" />
          <Button
            className="pgn__form-multiselect-field-show-btn"
            onClick={() => setIsOpen(!isOpen)}
            iconAfter={ExpandMore}
          />
        </div>
      </div>
      <span className={classNames('pgn__form-multiselect-field-error', {
        error: !!errorText,
      })}
      >
        {errorText}
      </span>
      <div className={classNames('pgn__form-multiselect-items', isOpen ? 'show' : 'none')}>
        {dropdownOptions.length ? dropdownOptions.map(item => (
          <button
            className={classNames('pgn__form-multiselect-item ')}
            key={`option-${item}`}
            type="button"
            onClick={() => handleSelect(item)}
          >
            {item}
          </button>
        )) : (
          <span className="pgn__form-multiselect-items-text">{noOptionsText}</span>
        )}
      </div>
    </div>
  );
});

FormMultiselect.propTypes = {
  /** Specifies the contents of the options rows. */
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  /** Specifies floating label to display for the select component. */
  floatingLabel: PropTypes.node,
  /** Specifies the default message if there is no options in the dropdown. */
  noOptionsText: PropTypes.string,
  /** Specifies selected options. */
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  /** Specifies function that changes `selectedOptions`. */
  setSelectedOptions: PropTypes.func,
  /** Informs user if there are errors. */
  errorText: PropTypes.string,
  /** Specifies whether the `Multiselect` is disabled. */
  disabled: PropTypes.bool,
  /** The `Multiselect` style variant to use. */
  variant: PropTypes.oneOf(['dark']),
};

FormMultiselect.defaultProps = {
  floatingLabel: undefined,
  noOptionsText: MULTISELECT_NO_OPTIONS_TEXT,
  selectedOptions: [],
  setSelectedOptions: () => {},
  errorText: '',
  disabled: false,
  variant: undefined,
};

export default FormMultiselect;
