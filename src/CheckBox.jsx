import React from 'react';

import { inputProps } from './utils/asInput';
import newId from './utils/newId';


class CheckBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    if (this.props.onChange) {
      this.onChange = this.props.onChange.bind(this);
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
    if (this.onChange) {
      this.onChange();
    }
  }


  render() {
    const props = { ...this.props };

    return (
      <label htmlFor={this.state.id}>
        <input
          id={this.state.id}
          name={props.name}
          type="checkbox"
          defaultChecked={this.state.checked}
          aria-describedby={props.describedBy}
          aria-checked={this.state.checked}
          tabIndex="0"
          onClick={this.handleClick}
          disabled={props.disabled}
        />
        {props.label}
      </label>
    );
  }
}

CheckBox.propTypes = inputProps;

export default CheckBox;
