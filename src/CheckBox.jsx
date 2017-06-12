import React from 'react';
import PropTypes from 'prop-types';

import { inputProps } from './utils/asInput';


class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    if (props.checked === 'true') {
      this.state = {
        pressed: props.checked,
        checked: true,
      };
    } else {
      this.state = {
        pressed: props.checked,
        checked: false,
      };
    }
  }

  handleClick() {
    if (this.state.pressed === 'true') {
      this.setState({
        pressed: 'false',
        checked: false,
      });
    } else {
      this.setState({
        pressed: 'true',
        checked: true,
      });
    }
    if (this.props.fun) {
      this.props.fun();
    }
  }


  render() {
    const props = { ...this.props };

    return (
      <form>
        <label htmlFor={props.checkLabel} className="form-check-label">
          <input
            name={props.name}
            type="checkbox"
            defaultChecked={this.state.checked}
            className="form-check-input"
            aria-describedby={props.describedby}
            aria-checked={this.state.pressed}
            tabIndex="0"
            onClick={() => this.handleClick()}
            disabled={props.disable}
          />
          {props.checkLabel}
        </label>
      </form>
    );
  }
}

CheckBox.propTypes = {
  ...inputProps,
  checkLabel: PropTypes.string.isRequired,
};

export default CheckBox;
