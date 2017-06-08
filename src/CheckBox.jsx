import React from 'react';
import { Input } from 'reactstrap';
import PropTypes from 'prop-types';

import asInput, { inputProps } from './utils/asInput';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: "false"
    };
  }

  handleClick() {
    if (this.state.pressed == "true") {
      this.setState({
        pressed: "false",
    }) } else {
      this.setState({
        pressed: "true"
      });
    }
  }


  render() {
    const props = {...this.props};

    return (
      <form>
        <label class="form-check-label">
          <input
            type="checkbox"
            class="form-check-input"
            name={props.name}
            aria-descrivedby={props.describedby}
            aria-checked={this.state.pressed}
            tabindex="0"
            onClick={() => this.handleClick()}
            />
          {props.checkLabel}
        </label>
      </form>
    );
  }
}

CheckBox.propTypes = {
  ...inputProps,
  checkLabel : PropTypes.string.isRequired
};

export default CheckBox;
