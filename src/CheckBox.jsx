import React from 'react';

import { inputProps } from './utils/asInput';


class CheckBox extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    if (this.props.onChange) {
      this.onChange = this.props.onChange.bind(this);
    }

    if (props.checked === 'true') {
      this.state = {
        checked: true,
      };
    } else {
      this.state = {
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
    if(this.onChange) {
      this.onChange();
    }
  }


  render() {
    const props = { ...this.props };

    return (
      <label>
        <input
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
