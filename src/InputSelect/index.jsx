import React from 'react';
import PropTypes from 'prop-types';

import asInput from '../asInput';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

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
      className,
      inputRef,
      ...others
    } = this.props;
    const options = this.getOptions();

    return (
      <select
        {...others}
        className={className}
        type="select"
        ref={inputRef}
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
};

Select.defaultProps = {
  className: undefined,
  inputRef: undefined,
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
