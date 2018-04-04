/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';

import newId from '../utils/newId';
import styles from './asInput.scss';

export const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'Component';

export const inputProps = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  validator: PropTypes.func,
  isValid: PropTypes.bool,
  validationMessage: PropTypes.string,
  className: PropTypes.arrayOf(PropTypes.string),
  themes: PropTypes.arrayOf(PropTypes.string),
  inline: PropTypes.bool,
};

export const defaultProps = {
  onChange: () => {},
  onBlur: () => {},
  id: newId('asInput'),
  value: '',
  description: undefined,
  disabled: false,
  required: false,
  validator: undefined,
  isValid: true,
  validationMessage: '',
  className: [],
  themes: [],
  inline: false,
};

const asInput = (WrappedComponent, inputType = undefined, labelFirst = true) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleBlur = this.handleBlur.bind(this);

      const id = this.props.id ? this.props.id : newId('asInput');
      const isValid = this.props.validator ? true : this.props.isValid;
      const validationMessage = this.props.validator ? '' : this.props.validationMessage;
      this.state = {
        id,
        value: this.props.value,
        isValid,
        validationMessage,
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
      // If validator goes away, revert to props
      if (nextProps.validator !== this.props.validator && !nextProps.validator) {
        updatedState.isValid = nextProps.isValid;
        updatedState.validationMessage = nextProps.validationMessage;
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

      const hasDangerTheme = this.hasDangerTheme();

      desc.error = (
        <div
          className={classNames(
            styles['form-control-feedback'],
            { [styles['invalid-feedback']]: hasDangerTheme },
          )}
          id={errorId}
          key="0"
          aria-live="polite"
        >
          { this.state.isValid ? (
            <span />
          ) : [
            (hasDangerTheme &&
            <span key="0">
              <span
                className={classNames(
                  FontAwesomeStyles.fa,
                  FontAwesomeStyles['fa-exclamation-circle'],
                  styles['fa-icon-spacing'],
                )}
                aria-hidden
              />
              <span
                className={classNames(styles['sr-only'])}
              >
                {this.state.dangerIconDescription}
              </span>
            </span>
            ),
            <span key="1">
              {this.state.validationMessage}
            </span>,
          ]}
        </div>
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

    getLabel() {
      return (
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label
          id={`label-${this.state.id}`}
          htmlFor={this.state.id}
          className={[classNames({
            [styles['form-check-label']]: this.isGroupedInput(),
          })]}
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

    render() {
      const { description, error, describedBy } = this.getDescriptions();
      return (
        <div className={[classNames({
            [styles['form-group']]: !this.isGroupedInput(),
            [styles['form-inline']]: !this.isGroupedInput() && this.props.inline,
            [styles['form-check']]: this.isGroupedInput(),
          })]}
        >
          {labelFirst && this.getLabel()}
          <WrappedComponent
            {...this.props}
            {...this.state}
            className={[classNames(
              {
                [styles['form-control']]: !this.isGroupedInput(),
                [styles['form-check-input']]: this.isGroupedInput(),
                [styles['is-invalid']]: !this.state.isValid && this.hasDangerTheme(),
              },
              { ...this.props.className },
            )]}
            describedBy={describedBy}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
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
