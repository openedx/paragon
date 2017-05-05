import React, { Component } from 'react';
import { Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

import { newId } from './utils';

class TextInput extends React.Component {
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
    this.props.onChange(event.target.value, this.props.name);
  }

  render() {
    const { descriptionId, description } = this.getDescriptionElements();

    return (
      <div className={this.props.className}>
        <Label for={this.state.uuid}>{this.props.label}</Label>
        <Input
          id={this.state.uuid}
          type="text"
          name={this.props.name}
          value={this.state.value}
          placeholder={this.props.placeholder}
          aria-describedby={descriptionId}
          onChange={this.handleChange}
        />
        {description}
      </div>
    );
  }
}

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  disabled: PropTypes.bool,
  onChange: PropTypes.func
};

TextInput.defaultProps = {
  onChange: () => {}
};

export default TextInput;
