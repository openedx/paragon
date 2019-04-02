import React from 'react';
import { storiesOf } from '@storybook/react';

import CheckBox from './index';
import Button from '../Button';
import README from './README.md';

class CheckBoxWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.toggleCheckBox = this.toggleCheckBox.bind(this);

    this.state = {
      checked: false,
    };
  }

  toggleCheckBox() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  render() {
    return (
      <div>
        <Button
          onClick={this.toggleCheckBox}
          label="Click me to toggle the check box!"
          buttonType="light"
        />
        <CheckBox
          name="checkbox"
          label="click the button"
          checked={this.state.checked}
        />
      </div>
    );
  }
}

storiesOf('User Input|CheckBox', module)
  .addParameters({ info: { text: README } })
  .add('basic usage', () => (
    <CheckBox
      name="checkbox"
      label="check me out!"
    />
  ))
  .add('disabled', () => (
    <CheckBox
      name="checkbox"
      label="you cannot check me out"
      disabled
    />
  ))
  .add('default checked', () => (
    <CheckBox
      name="checkbox"
      label="(un)check me out"
      checked
    />
  ))
  .add('call a function', () => (
    <CheckBox
      name="checkbox"
      label="check out the console"
      onChange={() => console.log('the checkbox changed state')}
    />
  ))
  .add('controlled', () => (
    <CheckBoxWrapper />
  ));
