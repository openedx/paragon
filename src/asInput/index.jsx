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
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
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
  className: PropTypes.arrayOf(PropTypes.string),
  theme: PropTypes.arrayOf(PropTypes.string),
};

const asInput = (WrappedComponent, labelFirst = true) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleBlur = this.handleBlur.bind(this);

      const id = newId('asInput');
      this.state = {
        id,
        value: this.props.value,
        isValid: true,
        describedBy: [],
        errorId: `error-${id}`,
        descriptionId: `description-${id}`,
      };
    }

    getDescriptions() {
      // possible future work: multiple feedback msgs?
      const errorId = `error-${this.state.id}`;
      const descriptionId = `description-${this.state.id}`;
      const desc = {};

      if (!this.state.isValid) {
        desc.error = (

          <div className={classNames(styles['form-control-feedback'], styles['has-feedback'], { [styles['invalid-feedback']]: !this.state.isValid && this.props.theme.includes('danger') })} id={errorId} key="0">
            { this.props.theme.includes('danger') &&
            <span
              className={classNames(FontAwesomeStyles.fa, FontAwesomeStyles['fa-exclamation-circle'], styles['fa-icon-spacing'])}
              aria-hidden
            />
            }
            <span>
              {this.state.validationMessage}
            </span>
          </div>
        );
        desc.describedBy = errorId;
      }

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
        <div className={classNames(styles['form-group'])}>
          {labelFirst && <label htmlFor={this.state.id}>{this.props.label}</label>}
          <WrappedComponent
            {...this.props}
            {...this.state}
            className={[classNames(
              styles['form-control'],
              styles['form-inline'],
              { [styles['is-invalid']]: !this.state.isValid && this.props.theme.includes('danger') },
              { ...this.props.className },
            )]}
            describedBy={describedBy}
            onChange={this.handleChange}
            onBlur={this.handleBlur}
          />
          {!labelFirst && <label htmlFor={this.state.id}>{this.props.label}</label>}
          {error}
          {description}
        </div>
      );
    }
  }

  NewComponent.displayName = `asInput(${getDisplayName(WrappedComponent)})`;

  NewComponent.propTypes = inputProps;

  NewComponent.defaultProps = {
    onChange: () => {},
    onBlur: () => {},
    value: '',
    description: undefined,
    disabled: false,
    required: false,
    validator: undefined,
    className: [],
    theme: [],
  };

  return NewComponent;
};

export default asInput;
