import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

import asInput, { inputProps } from './utils/asInput';

class Select extends React.Component {
  static getOption(option, i) {
    let { label, value } = option;

    if (typeof option === 'string') {
      label = option;
      value = option;
    }

    return (
      <option value={value} key={`option-${i}`}>{label}</option>
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
      <Input
        id={props.id}
        type="select"
        name={props.name}
        value={props.value}
        aria-describedby={props.describedBy}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        {options}
      </Input>
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

const SelectInput = asInput(Select);

SelectInput.propTypes = {
  ...SelectInput.propTypes,
  ...Select.propTypes,
};

export default SelectInput;
