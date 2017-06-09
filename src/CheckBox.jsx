import React from 'react';
import PropTypes from 'prop-types';

import { inputProps } from './utils/asInput';


class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pressed: 'false',
    };
  }

  handleClick() {
    if (this.state.pressed === 'true') {
      this.setState({
        pressed: 'false',
      });
    } else {
      this.setState({
        pressed: 'true',
      });
    }
  }


  render() {
    const props = { ...this.props };

    return (
      <form>
        <label htmlFor={props.checkLabel} className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input"
            name={props.name}
            aria-describedby={props.describedby}
            aria-checked={this.state.pressed}
            tabIndex="0"
            onClick={() => this.handleClick()}
            disabled={props.disabled}
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
