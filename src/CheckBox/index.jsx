import React from 'react';
import PropTypes from 'prop-types';

import asInput from '../asInput';

class Check extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);

    this.state = {
      checked: props.checked || false,
    };
  }

  onChange(event) {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.onChange(event);
  }


  render() {
    const props = { ...this.props };

    return (
      <input
        id={props.id}
        type="checkbox"
        name={props.name}
        defaultChecked={this.state.checked}
        aria-checked={this.state.checked}
        onChange={this.onChange}
        disabled={props.disabled}
      />
    );
  }
}

Check.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

Check.defaultProps = {
  checked: false,
  onChange: () => {},
};

const CheckBox = asInput(Check, false);

export default CheckBox;
