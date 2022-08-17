import React from 'react';
import PropTypes from 'prop-types';

import asInput from '../asInput';
import withDeprecatedProps, { DeprTypes } from '../withDeprecatedProps';

class Check extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      checked: props.checked || false,
    };
  }

  /* eslint-disable react/no-did-update-set-state */
  componentDidUpdate(prevProps) {
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }
  }

  onChange(event) {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
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
  // eslint-disable-next-line max-len
  /** (`Boolean`): `true` if the state should be checked, `false` otherwise. This prop can be used to manage the Checkbox more directly, overriding the default Checkbox checked state. */
  checked: PropTypes.bool,
  /** (`Boolean`): `true` if the checkbox should be disabled, `false` otherwise */
  onChange: PropTypes.func,
  /** function to be called when the checkbox changes state */
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(PropTypes.element) }),
  ]),
};

Check.defaultProps = {
  checked: false,
  onChange: () => {},
  inputRef: undefined,
};

const CheckBox = asInput(withDeprecatedProps(Check, 'Checkbox', {
  className: {
    deprType: DeprTypes.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
}), 'checkbox', false);

export default CheckBox;
