import React from 'react';
import PropTypes from 'prop-types';
import { Label, FormGroup, FormFeedback, FormText } from 'reactstrap';

import newId from './newId';

const getDisplayName = WrappedComponent => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

const asInput = WrappedComponent => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleBlur = this.handleBlur.bind(this);

      const id = newId('textInput');
      this.state = {
        id: id,
        value: this.props.value,
        isValid: true,
        describedBy: [],
        errorId: `error-${id}`,
        descriptionId: `description-${id}`,
      };
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

    getDescriptions() {
      // possible future work: multiple feedback msgs?
      const errorId = `error-${this.state.id}`,
            descriptionId = `description-${this.state.id}`;

      let desc = {};

      if (!this.state.isValid) {
        desc.error = (
          <FormFeedback id={errorId} key="0">
            {this.state.validationMessage}
          </FormFeedback>
        );
        desc.describedBy = errorId;
      }

      if (this.props.description) {
        desc.description = (
          <FormText id={descriptionId} key="1">
            {this.props.description}
          </FormText>
        );
        desc.describedBy = `${desc.describedBy} ${descriptionId}`.trim();
      }

      return desc;
    }

    render() {
      const { description, error, describedBy } = this.getDescriptions();

      return (
        <FormGroup>
          <Label for={this.state.id}>{this.props.label}</Label>
          <WrappedComponent
            {...this.props}
            {...this.state}
            describedBy={describedBy}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {error}
          {description}
        </FormGroup>
      );
    }
  }

  NewComponent.displayName = `asInput(${getDisplayName(WrappedComponent)})`;

  NewComponent.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element
    ]),
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    onChange: PropTypes.func
  };

  return NewComponent;
};

export default asInput;
