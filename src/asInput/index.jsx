/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import newId from '../utils/newId';
import ValidationMessage from '../ValidationMessage/index';
import Variant from '../utils/constants';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

export const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';

export const inputProps = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  dangerIconDescription: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  onBlur: PropTypes.func,
  validator: PropTypes.func,
  isValid: PropTypes.bool,
  validationMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
  themes: PropTypes.arrayOf(PropTypes.string),
  inline: PropTypes.bool,
  inputGroupPrepend: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  inputGroupAppend: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  type: PropTypes.string,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
};

export const defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  onKeyPress: () => {},
  id: undefined,
  value: '',
  dangerIconDescription: '',
  description: undefined,
  disabled: false,
  required: false,
  validator: undefined,
  isValid: true,
  validationMessage: '',
  className: undefined,
  themes: [],
  inline: false,
  inputGroupPrepend: undefined,
  inputGroupAppend: undefined,
  type: undefined,
  inputRef: undefined,
};

const asInput = (WrappedComponent, inputType = undefined, labelFirst = true) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleBlur = this.handleBlur.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.renderInput = this.renderInput.bind(this);

      const id = this.props.id ? this.props.id : newId('asInput');
      const isValid = this.props.validator ? true : this.props.isValid;
      const validationMessage = this.props.validator ? '' : this.props.validationMessage;
      const dangerIconDescription = this.props.validator ? '' : this.props.dangerIconDescription;
      this.state = {
        id,
        value: this.props.value,
        isValid,
        validationMessage,
        dangerIconDescription,
      };
    }

    /* eslint-disable react/no-did-update-set-state */
    componentDidUpdate(prevProps) {
      const updatedState = {};
      if (this.props.value !== prevProps.value) {
        updatedState.value = this.props.value;
      }
      if (this.props.isValid !== prevProps.isValid && !this.props.validator) {
        updatedState.isValid = this.props.isValid;
      }
      if (this.props.validationMessage !== prevProps.validationMessage && !this.props.validator) {
        updatedState.validationMessage = this.props.validationMessage;
      }
      if (this.props.dangerIconDescription !== prevProps.dangerIconDescription
          && !this.props.validator) {
        updatedState.dangerIconDescription = this.props.dangerIconDescription;
      }
      // If validator goes away, revert to props
      if (this.props.validator !== prevProps.validator && !this.props.validator) {
        updatedState.isValid = this.props.isValid;
        updatedState.validationMessage = this.props.validationMessage;
        updatedState.dangerIconDescription = this.props.dangerIconDescription;
      }
      if (Object.keys(updatedState).length > 0) {
        this.setState(updatedState);
      }
    }

    handleChange(event) {
      this.setState({ value: event.target.value });

      this.props.onChange(
        event.target.type === 'checkbox' ? event.target.checked : event.target.value,
        this.props.name,
      );
    }

    handleKeyPress(event) {
      this.props.onKeyPress(event, this.props.name);
    }

    handleBlur(event) {
      const val = event.target.value;

      if (this.props.validator) {
        this.setState(this.props.validator(val));
      }
      this.props.onBlur(val, this.props.name);
    }

    getLabel() {
      return (
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label
          id={`label-${this.state.id}`}
          htmlFor={this.state.id}
          className={classNames({
            'form-check-label': this.isGroupedInput(),
          })}
        >
          {this.props.label}
        </label>
      );
    }

    getDescriptions() {
      // possible future work: multiple feedback msgs?
      const errorId = `error-${this.state.id}`;
      const descriptionId = `description-${this.state.id}`;
      const desc = {};

      // TODO: refactor this component to use Variants instead of the themes array.
      desc.error = (
        <ValidationMessage
          id={errorId}
          isValid={this.state.isValid}
          invalidMessage={this.state.validationMessage}
          variant={{
            status: this.hasDangerTheme() ? Variant.status.DANGER : Variant.status.INFO,
          }}
          variantIconDescription={this.state.dangerIconDescription}
        />
      );
      desc.describedBy = errorId;

      if (this.props.description) {
        desc.description = (
          <small className="form-text" id={descriptionId} key="1">
            {this.props.description}
          </small>
        );
        desc.describedBy = `${desc.describedBy} ${descriptionId}`.trim();
      }

      return desc;
    }

    getAddons({ addonElements, type }) {
      if (Array.isArray(addonElements)) {
        return addonElements.map((addon, index) => React.cloneElement(
          addon,
          { key: this.generateInputGroupAddonKey({ prefix: type, index }) },
        ));
      }
      return addonElements;
    }

    hasDangerTheme() {
      return this.props.themes.indexOf('danger') >= 0;
    }

    isGroupedInput() {
      switch (inputType) {
        case 'checkbox':
          return true;
        default:
          return false;
      }
    }

    generateInputGroupAddonKey({ prefix, index }) {
      return `${this.state.id}-${prefix}-${index}`;
    }

    renderInput(describedBy) {
      const {
        className,
        inputRef,
        type,
        isValid,
        // unused
        validator,
        themes,
        inline,
        inputGroupPrepend,
        inputGroupAppend,
        label,
        dangerIconDescription,
        description,
        validationMessage,
        ...others
      } = this.props;

      return (
        <WrappedComponent
          {...others}
          id={this.state.id}
          value={this.state.value}
          className={classNames(
            {
              'form-control': !this.isGroupedInput(),
              'form-check-input': this.isGroupedInput(),
              'is-invalid': !this.state.isValid,
              'is-invalid-nodanger': !this.hasDangerTheme(),
            },
            className,
          )}
          aria-describedby={describedBy}
          aria-invalid={!isValid}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onKeyPress={this.handleKeyPress}
          type={type}
          inputRef={inputRef}
        />
      );
    }

    renderInputGroupAppend() {
      return (
        <div className="input-group-append">
          {this.getAddons({ type: 'append', addonElements: this.props.inputGroupAppend })}
        </div>
      );
    }

    renderInputGroupPrepend() {
      return (
        <div className="input-group-prepend">
          {this.getAddons({ type: 'prepend', addonElements: this.props.inputGroupPrepend })}
        </div>
      );
    }

    render() {
      const { description, error, describedBy } = this.getDescriptions();
      return (
        <div className={classNames({
          'form-group': !this.isGroupedInput(),
          'form-inline': !this.isGroupedInput() && this.props.inline,
          'form-check': this.isGroupedInput(),
        })}
        >
          {labelFirst && this.getLabel()}
          {this.props.inputGroupPrepend || this.props.inputGroupAppend ? (
            <div className={classNames('input-group')} data-testid="input-group-id">
              {this.renderInputGroupPrepend()}
              {this.renderInput(describedBy)}
              {this.renderInputGroupAppend()}
            </div>
          ) : this.renderInput(describedBy)}
          {!labelFirst && this.getLabel()}
          {error}
          {description}
        </div>
      );
    }
  }

  NewComponent.displayName = `asInput(${getDisplayName(WrappedComponent)})`;

  NewComponent.propTypes = inputProps;

  NewComponent.defaultProps = defaultProps;

  return withDeprecatedProps(NewComponent, 'asInput', {
    className: {
      deprType: DeprTypes.FORMAT,
      expect: value => typeof value === 'string',
      transform: value => (Array.isArray(value) ? value.join(' ') : value),
      message: 'It should be a string.',
    },
    ariaLabel: {
      deprType: DeprTypes.MOVED,
      newName: 'aria-label',
    },
  });
};

export default asInput;
