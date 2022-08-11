import React from 'react';
import PropTypes from 'prop-types';

import asInput from '../asInput';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

class Select extends React.Component {
  static getOption(option, i, multiple, multiselectDefaultValues) {
    const { disabled } = option;
    let { label, value } = option;

    if (typeof option === 'string') {
      label = option;
      value = option;
    }

    let componentProps = {
      key: `option-${i}`,
      value: value,
      disabled: disabled,
    }

    if (multiple && multiselectDefaultValues && Array.isArray(multiselectDefaultValues)) {
      if (multiselectDefaultValues.includes(value)) {
        componentProps.selected = true;
      }
    }

    return (
      <option
        {...componentProps}
      >
        {label}
      </option>
    );
  }

  getOptions() {
    const { multiple, value, options } = this.props;
    return options.map((option, i) => {
      let section;
      if (option.options) {
        const groupOpts = option.options.map((opt, j) => Select.getOption(opt, j, multiple, value));
        section = (
          <optgroup label={option.label} key={option.label}>
            {groupOpts}
          </optgroup>
        );
      } else {
        section = Select.getOption(option, i, multiple, value);
      }
      return section;
    });
  }

  render() {
    const {
      className,
      inputRef,
      multiple,
      ...others
    } = this.props;
    const options = this.getOptions();

    if (multiple || !others.value) {
      delete others.value;
    }

    return (
      <select
        {...others}
        className={className}
        type="select"
        ref={inputRef}
        multiple={multiple}
      >
        {options}
      </select>
    );
  }
}

Select.propTypes = {
  className: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
  multiple: PropTypes.bool,
  value: PropTypes.oneOf(PropTypes.string, PropTypes.arrayOf(PropTypes.string)),
};

Select.defaultProps = {
  className: undefined,
  inputRef: undefined,
  multiple: false,
  value: undefined,
};

const InputSelect = asInput(withDeprecatedProps(Select, 'InputSelect', {
  className: {
    deprType: DeprTypes.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}));

export default InputSelect;
