import React from 'react';
import PropTypes from 'prop-types';

import asInput from '../asInput';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';


class Check extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      checked: props.checked || false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.checked !== this.props.checked) {
      this.setState({
        checked: nextProps.checked,
      });
    }
  }

  onChange(event) {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.onChange(event);
  }

  render() {
    const {
      inputRef,
      ...others
    } = this.props;
    return (
      <input
        {...others}
        type="checkbox"
        ref={inputRef}
        checked={this.state.checked}
        aria-checked={this.state.checked}
        onChange={this.onChange}
      />
    );
  }
}


Check.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  inputRef: PropTypes.func,
};

Check.defaultProps = {
  checked: false,
  onChange: () => {},
  inputRef: undefined,
};


const CheckBox = asInput(withDeprecatedProps(Check, 'Checkbox', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}), 'checkbox', false);

export default CheckBox;
