import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

import { newId } from './utils';

class SelectInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      uuid: newId('textInput'),
      value: this.props.value
    };
  }

  getDescriptionElements() {
    let descriptionElements = {};
    if (this.props.description) {
      const descriptionId = `description-${this.state.uuid}"`;

      descriptionElements = {
        descriptionId,
        description: (
          <span className="input-description" id={descriptionId}>
            {this.props.description}
          </span>
        )
      }
    }
    return descriptionElements;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  getOptions() {
    return this.props.options.map(option => {
      return (
        <option>{option}</option>
      );
    });
  }

  render() {
    const { descriptionId, description } = this.getDescriptionElements(),
          options = this.getOptions();

    return (
      <div className={this.props.className}>
        <Label for={this.state.uuid}>{this.props.label}</Label>
        <Input
          id={this.state.uuid}
          type="select"
          name={this.props.name}
          value={this.props.value}
          aria-describedby={descriptionId}
          onChange={this.handleChange}
        >
          {options}
        </Input>
        {description}
      </div>
    );
  }
}

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

SelectInput.defaultProps = {
  onChange: () => {}
};

export default SelectInput;
