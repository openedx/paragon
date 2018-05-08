/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import newId from '../utils/newId';
import styles from './asInput.scss';
import ValidationMessage from '../ValidationMessage/index';
import Variant from '../utils/constants';

export const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

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
  className: PropTypes.arrayOf(PropTypes.string),
  themes: PropTypes.arrayOf(PropTypes.string),
  inline: PropTypes.bool,
  inputGroupPrepend: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  inputGroupAppend: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
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
  className: [],
  themes: [],
  inline: false,
  inputGroupPrepend: undefined,
  inputGroupAppend: undefined,
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
        describedBy: [],
        errorId: `error-${id}`,
        descriptionId: `description-${id}`,
      };
    }

    componentWillReceiveProps(nextProps) {
      const updatedState = {};
      if (nextProps.value !== this.props.value) {
        updatedState.value = nextProps.value;
      }
      if (nextProps.isValid !== this.props.isValid && !nextProps.validator) {
        updatedState.isValid = nextProps.isValid;
      }
      if (nextProps.validationMessage !== this.props.validationMessage && !nextProps.validator) {
        updatedState.validationMessage = nextProps.validationMessage;
      }
      if (nextProps.dangerIconDescription !== this.props.dangerIconDescription &&
          !nextProps.validator) {
        updatedState.dangerIconDescription = nextProps.dangerIconDescription;
      }
      // If validator goes away, revert to props
      if (nextProps.validator !== this.props.validator && !nextProps.validator) {
        updatedState.isValid = nextProps.isValid;
        updatedState.validationMessage = nextProps.validationMessage;
        updatedState.dangerIconDescription = nextProps.dangerIconDescription;
      }
      if (Object.keys(updatedState).length > 0) {
        this.setState(updatedState);
      }
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
          <small className={styles['form-text']} id={descriptionId} key="1">
            {this.props.description}
          </small>
        );
        desc.describedBy = `${desc.describedBy} ${descriptionId}`.trim();
      }

      return desc;
    }

    getAddons({ addonElements, type }) {
      if (Array.isArray(addonElements)) {
        return addonElements.map((addon, index) =>
          React.cloneElement(
            addon,
            { key: this.generateInputGroupAddonKey({ prefix: type, index }) },
          ));
      }
      return addonElements;
    }

    getLabel() {
      return (
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label
          id={`label-${this.state.id}`}
          htmlFor={this.state.id}
          className={classNames({
            [styles['form-check-label']]: this.isGroupedInput(),
          })}
        >
          {this.props.label}
        </label>
      );
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

    handleBlur(event) {
      const val = event.target.value;

      if (this.props.validator) {
        this.setState(this.props.validator(val));
      }
      this.props.onBlur(val, this.props.name);
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

    generateInputGroupAddonKey({ prefix, index }) {
      return `${this.state.id}-${prefix}-${index}`;
    }

    renderInput(describedBy) {
      const { className } = this.props;

      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          className={[classNames(
            {
              [styles['form-control']]: !this.isGroupedInput(),
              [styles['form-check-input']]: this.isGroupedInput(),
              [styles['is-invalid']]: !this.state.isValid,
              [styles['is-invalid-nodanger']]: !this.hasDangerTheme(),
            },
            className,
          ).trim()]}
          describedBy={describedBy}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          onKeyPress={this.handleKeyPress}
        />
      );
    }

    renderInputGroupAppend() {
      return (
        <div className={styles['input-group-append']}>
          {this.getAddons({ type: 'append', addonElements: this.props.inputGroupAppend })}
        </div>
      );
    }

    renderInputGroupPrepend() {
      return (
        <div className={styles['input-group-prepend']}>
          {this.getAddons({ type: 'prepend', addonElements: this.props.inputGroupPrepend })}
        </div>
      );
    }

    render() {
      const { description, error, describedBy } = this.getDescriptions();
      return (
        <div className={classNames({
          [styles['form-group']]: !this.isGroupedInput(),
          [styles['form-inline']]: !this.isGroupedInput() && this.props.inline,
          [styles['form-check']]: this.isGroupedInput(),
        })}
        >
          {labelFirst && this.getLabel()}
          {this.props.inputGroupPrepend || this.props.inputGroupAppend ? (
            <div className={classNames(styles['input-group'])}>
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

  return NewComponent;
};

export default asInput;
