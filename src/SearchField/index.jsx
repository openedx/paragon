import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import newId from '../utils/newId';
import Icon from '../Icon';
import InputText from '../InputText';

class SearchField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      hasSubmitted: false,
      value: this.props.value,
    };

    this.textInput = null;
    this.searchButton = React.createRef();

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { value } = this.props;

    if (value !== prevProps.value) {
      this.setState({ value }); // eslint-disable-line react/no-did-update-set-state
    }
  }

  getSearchActionButtons() {
    const { screenReaderText } = this.props;
    const inputTextHasValue = this.inputTextHasValue();
    const buttons = [
      <button
        className="search-btn"
        disabled={!inputTextHasValue}
        ref={this.searchButton}
        onClick={this.handleSubmit}
      >
        <Icon className="fa fa-search" screenReaderText={screenReaderText.searchButton} />
      </button>,
    ];

    if (this.shouldRenderClearButton()) {
      buttons.unshift((
        <button
          className="clear-btn ml-1"
          onClick={this.handleClear}
        >
          <small>
            <Icon
              className="fa fa-times"
              id={newId('icon-SearchField')}
              screenReaderText={screenReaderText.clearButton}
            />
          </small>
        </button>
      ));
    }

    return buttons;
  }

  inputTextHasValue() {
    const { value } = this.state;
    return value && value.length > 0;
  }

  shouldRenderClearButton() {
    const { hasSubmitted } = this.state;
    return hasSubmitted || this.inputTextHasValue();
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
    this.setState({ hasSubmitted: false });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter' && this.inputTextHasValue()) {
      this.handleSubmit();
    }
  }

  handleSubmit() {
    const { value } = this.state;
    this.searchButton.current.focus();
    this.props.onSubmit(value);
    this.setState({ hasSubmitted: true });
  }

  render() {
    const { isFocused, value } = this.state;
    const { inputLabel, placeholder } = this.props;
    return (
      <div
        className={classNames(
          'border',
          'search-field',
          {
            focused: isFocused,
          },
        )}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
      >
        <InputText
          className={classNames(
            'input',
            {
              'no-clear-btn': !this.shouldRenderClearButton(),
            },
          )}
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

SearchField.defaultProps = {
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

SearchField.propTypes = {
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

export default SearchField;
