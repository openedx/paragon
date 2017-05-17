import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

import asInput from './utils/asInput';

class Select extends React.Component {
  getOption(option, i) {
    let { label, value } = option;

    if (typeof option === 'string') {
      label = value = option;
    }

    return (
      <option value={value} key={`option-${i}`}>{label}</option>
    );
  }

  getOptions() {
    return this.props.options.map((option, i) => {
      let section;
      if (option.options) {
        const groupOpts = option.options.map((opt, j) => this.getOption(opt, j));
        section = (
          <optgroup label={option.label} key={`group-${i}`}>
            {groupOpts}
          </optgroup>
        );
      } else {
        section = this.getOption(option, i);
      }
      return section;
    });
  }

  render() {
    const props = { ...this.props },
      options = this.getOptions();

    return (
      <Input
        id={this.props.id}
        type="select"
        name={this.props.name}
        value={this.props.value}
        aria-describedby={props.describedBy}
        onChange={props.onChange}
        onBlur={props.onBlur}
      >
        {options}
      </Input>
    );
  }
}

const SelectInput = asInput(Select);

SelectInput.propTypes = {
  ...SelectInput.propTypes,
  options: PropTypes.array.isRequired
};

export default SelectInput;
