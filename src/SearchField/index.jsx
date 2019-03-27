import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon';


class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.form = React.createRef();

    this.state = {
      isFocused: false,
      value: this.props.initialValue,
    };

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFocus(e) {
    this.setState({ isFocused: true });
    if (this.props.onFocus) this.props.onFocus(e);
  }

  handleBlur(e) {
    this.setState({ isFocused: false });
    if (this.props.onBlur) this.props.onBlur(e);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.onSubmit) this.props.onSubmit(new FormData(this.form));
  }

  render() {
    const {
      className,
      inputId,
      label,
      submitLabel,
      initialValue,
      ...other
    } = this.props;

    const {
      value,
      isFocused,
    } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        ref={this.form}
        className={classNames(
          'paragon-search-field',
          'form-control d-inline-block w-auto',
          className,
          {
            focus: isFocused,
          },
        )}
        {...other}
      >
        <label htmlFor={inputId}>
          <span>{label}</span>
          &nbsp;
          <input
            id={inputId}
            name="query"
            type="search"
            value={value}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            autoComplete="off"
          />
        </label>
        <button type="submit" aria-label={submitLabel}>
          <Icon className="fa fa-search" />
        </button>
      </form>
    );
  }
}

SearchField.defaultProps = {
  label: 'Search:',
  inputId: 'search',
  submitLabel: 'Submit Search',
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  initialValue: undefined,
  className: undefined,
};

SearchField.propTypes = {
  inputId: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.node,
  submitLabel: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  initialValue: PropTypes.string,
  className: PropTypes.string,
};

export default SearchField;
