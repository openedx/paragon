/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

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

storiesOf('CheckBox', module)
  .addDecorator((story, context) => withInfo({}, README)(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
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
