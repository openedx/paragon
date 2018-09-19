import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';

import newId from '../utils/newId';
import Icon from '../Icon';
import InputText from '../InputText';
import Button from '../Button';

import styles from './SearchField.scss';

const defaultProps = {
  inputLabel: 'Search:',
  onBlur: () => {},
  onChange: () => {},
  onClear: () => {},
  onFocus: () => {},
  placeholder: '',
  screenReaderText: {
    clearButton: 'Clear search',
    searchButton: 'Submit search',
  },
  value: '',
};

const propTypes = {
  onSubmit: PropTypes.func.isRequired,
  inputLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onFocus: PropTypes.func,
  placeholder: PropTypes.string,
  screenReaderText: PropTypes.shape({
    clearButton: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    searchButton: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  }),
  value: PropTypes.string,
};

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      value: this.props.value,
    };

    this.textInput = null;
    this.searchButton = null;

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  getSearchActionButtons() {
    const { isFocused } = this.state;
    const { screenReaderText } = this.props;
    const inputTextHasValue = this.inputTextHasValue();
    const buttons = [
      <Button
        className={[classNames(
          styles['search-btn'],
          {
            [styles['border-left']]: !isFocused && inputTextHasValue,
            [styles['btn-outline-primary']]: isFocused && inputTextHasValue,
          },
        )]}
        label={
          <Icon className={['fa', 'fa-search']} screenReaderText={screenReaderText.searchButton} />
        }
        disabled={!inputTextHasValue}
        inputRef={(input) => { this.searchButton = input; }}
        onClick={this.handleSubmit}
      />,
    ];

    if (inputTextHasValue) {
      buttons.unshift((
        <Button
          className={[classNames(
            styles['clear-btn'],
            styles['ml-1'],
          )]}
          label={(
            <small>
              <Icon
                className={[classNames(
                  FontAwesomeStyles.fa,
                  FontAwesomeStyles['fa-times'],
                )]}
                id={newId('icon-SearchField')}
                screenReaderText={screenReaderText.clearButton}
              />
            </small>
          )}
          onClick={this.handleClear}
        />
      ));
    }

    return buttons;
  }

  inputTextHasValue() {
    const { value } = this.state;
    return value && value.length > 0;
  }

  handleFocus(event) {
    this.setState({ isFocused: true });
    this.props.onFocus(event);
  }

  handleBlur(event) {
    this.setState({ isFocused: false });
    this.props.onBlur(event);
  }

  handleChange(value) {
    this.setState({ value });
    this.props.onChange(value);
  }

  handleClear() {
    this.handleChange('');
    this.props.onClear();
    this.textInput.focus();
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && this.inputTextHasValue()) {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    const { value } = this.state;
    this.searchButton.focus();
    this.props.onSubmit(value);
  }

  render() {
    const { isFocused, value } = this.state;
    const { inputLabel, placeholder } = this.props;
    return (
      <div
        className={classNames(
          styles.border,
          styles['search-field'],
          {
            [styles.focused]: isFocused,
          },
        )}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <InputText
          className={[classNames(
            styles.input,
            {
              [styles['no-clear-btn']]: !this.inputTextHasValue(),
            },
          )]}
          name="search"
          autoComplete="off"
          label={inputLabel}
          placeholder={placeholder}
          value={value}
          role="searchbox"
          type="search"
          inline
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          inputGroupAppend={this.getSearchActionButtons()}
          inputRef={(input) => { this.textInput = input; }}
        />
      </div>
    );
  }
}

SearchField.propTypes = propTypes;
SearchField.defaultProps = defaultProps;

export default SearchField;
