import React from 'react';
import PropTypes from 'prop-types';

import asInput, { inputProps, defaultProps } from '../asInput';

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
      describedBy,
      // Pull these out from props so html attrs can be passed through
      // eslint-disable no-unused-vars
      onChange,
      isValid,
      validator,
      themes,
      inline,
      inputGroupPrepend,
      inputGroupAppend,
      label,
      dangerIconDescription,
      description,
      validationMessage,
      errorId,
      descriptionId,
      // eslint-enable no-unused-vars
      ...others
    } = this.props;
    return (
      <input
        {...others}
        type="checkbox"
        checked={this.state.checked}
        aria-checked={this.state.checked}
        aria-describedby={describedBy}
        onChange={this.onChange}
      />
    );
  }
}

Check.propTypes = {
  ...inputProps,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  describedBy: PropTypes.string,
};

Check.defaultProps = {
  ...defaultProps,
  checked: false,
  onChange: () => {},
  describedBy: undefined,
};

const CheckBox = asInput(Check, 'checkbox', false);

export default CheckBox;
