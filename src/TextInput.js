import React, { Component } from 'react';
import { Input, Label, FormGroup, FormFeedback, FormText } from 'reactstrap';
import PropTypes from 'prop-types';

import { newId } from './utils';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.state = {
      uuid: newId('textInput'),
      value: this.props.value,
      isValid: true,
      validationMessage: ''
    };
  }

  getDescriptionElements() {
    let descriptionElements = {},
        descriptionId,
        descriptionMessages = [];
    if (this.props.description) {
      descriptionId = `description-${this.state.uuid}`;
      descriptionMessages.push(
        <FormText id={descriptionId} key="0">
          {this.props.description}
        </FormText>
      );
    }
    if (!this.state.isValid) {
      const errorId = `error-${this.state.uuid}`;
      descriptionId = `${errorId} ${descriptionId}`
      descriptionMessages = [(
        <FormFeedback id={errorId} key="1">
          {this.state.validationMessage}
        </FormFeedback>),
        ...descriptionMessages
      ];
    }
    descriptionElements = {
      descriptionId,
      description: descriptionMessages
    }
    return descriptionElements;
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value, this.props.name);
  }

  handleBlur(event) {
    if (this.props.validator) {
      this.setState(this.props.validator);
    }
  }

  render() {
    const { descriptionId, description } = this.getDescriptionElements(),
          inputState = (!this.state.isValid) ? 'warning' : '';

    return (
      <div className={this.props.className}>
        <FormGroup color={inputState}>
          <Label for={this.state.uuid}>{this.props.label}</Label>
          <Input
            id={this.state.uuid}
            type="text"
            name={this.props.name}
            value={this.state.value}
            placeholder={this.props.placeholder}
            aria-describedby={descriptionId}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
            aria-invalid={!this.state.isValid}
            state={inputState}
          />
          {description}
        </FormGroup>
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
