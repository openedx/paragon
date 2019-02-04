import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import asInput, { inputProps } from '../asInput';

class Select extends React.Component {
  static getOption(option, i) {
    const { disabled } = option;
    let { label, value } = option;

    if (typeof option === 'string') {
      label = option;
      value = option;
    }

    return (
      <option
        key={`option-${i}`}
        value={value}
        disabled={disabled}
      >
        {label}
      </option>
    );
  }

  getOptions() {
    return this.props.options.map((option, i) => {
      let section;
      if (option.options) {
        const groupOpts = option.options.map((opt, j) => Select.getOption(opt, j));
        section = (
          <optgroup label={option.label} key={option.label}>
            {groupOpts}
          </optgroup>
        );
      } else {
        section = Select.getOption(option, i);
      }
      return section;
    });
  }

  render() {
    const props = { ...this.props };
    const options = this.getOptions();

    return (
      <select
        id={props.id}
        className={classNames(props.className)}
        type="select"
        name={props.name}
        value={props.value}
        aria-label={props.ariaLabel}
        aria-describedby={props.describedBy}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={props.inputRef}
        disabled={props.disabled}
        required={props.required}
      >
        {options}
      </select>
    );
  }
}

Select.propTypes = {
  ...inputProps,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.object),
  ]).isRequired,
};

const InputSelect = asInput(Select);

InputSelect.propTypes = {
  ...InputSelect.propTypes,
  ...Select.propTypes,
};

export default InputSelect;
