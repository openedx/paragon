import React from 'react';

import asInput, { inputProps } from '../asInput';
import newId from '../utils/newId';

class Check extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    if (this.props.onChangeState) {
      this.onChangeState = this.props.onChangeState.bind(this);
    }

    const id = newId('checkbox');
    if (props.checked === 'true') {
      this.state = {
        id,
        checked: true,
      };
    } else {
      this.state = {
        id,
        checked: false,
      };
    }
  }

  handleClick() {
    if (this.state.checked === true) {
      this.setState({
        checked: false,
      });
    } else {
      this.setState({
        checked: true,
      });
    }
    if (this.onChangeState) {
      this.onChangeState();
    }
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
        onClick={this.handleClick}
        disabled={props.disabled}
      />
    );
  }
}

Check.propTypes = inputProps;

const CheckBox = asInput(Check, false);

CheckBox.propTupes = {
  ...Check.propTypes,
  ...CheckBox.propTypes,
};

export default CheckBox;
