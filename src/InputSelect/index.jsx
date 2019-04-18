import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import asInput, { inputProps } from '../asInput';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';

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
    const {
      ariaLabel,
      className,
      describedBy,
      inputRef,
      // Pull these out from props so html attrs can be passed through
      // eslint-disable no-unused-vars
      validator,
      isValid,
      themes,
      inline,
      inputGroupPrepend,
      inputGroupAppend,
      label,
      dangerIconDescription,
      description,
      validationMessage,
      errorId,
      descriptionId,
      // eslint-enable no-unused-vars
      ...others
    } = this.props;
    const options = this.getOptions();

    return (
      <select
        {...others}
        className={classNames(className)}
        type="select"
        aria-label={ariaLabel}
        aria-describedby={describedBy}
        ref={inputRef}
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

const InputSelect = asInput(withDeprecatedProps(Select, 'InputSelect', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}));

InputSelect.propTypes = {
  ...InputSelect.propTypes,
  ...Select.propTypes,
};


export default InputSelect;
