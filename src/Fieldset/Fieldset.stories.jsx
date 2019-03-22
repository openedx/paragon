import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import { checkA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { withReadme } from 'storybook-readme';

import Fieldset from './index';
import InputText from '../InputText/index';
import README from './README.md';
import Variant from '../utils/constants';


class ValidatedForm extends React.Component {
  constructor(props) {
    super(props);
    this.firstInputRef = null;
    this.secondInputRef = null;

    this.state = {
      isValid: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (this.firstInputRef.value.length === 0 && this.secondInputRef.value.length === 0) {
      this.setState({
        isValid: false,
      });
    } else {
      this.setState({
        isValid: true,
      });
    }
    event.preventDefault();
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
      >
        <Fieldset
          legend="Name"
          invalidMessage="Please enter at least one name."
          isValid={this.state.isValid}
          variant={{
            status: Variant.status.DANGER,
          }}
          variantIconDescription="Error"
        >
          <InputText
            name="firstName"
            label="First Name"
            value=""
            inputRef={(ref) => { this.firstInputRef = ref; }}
          />
          <InputText
            name="lastName"
            label="Last Name"
            value=""
            inputRef={(ref) => { this.secondInputRef = ref; }}
          />
        </Fieldset>
        <input
          type="submit"
          className="btn btn-primary"
          value="Submit"
        />
      </form>
    );
  }
}

storiesOf('Fieldset', module)
  .addDecorator((story, context) => withInfo()(story)(context))
  .addDecorator(centered)
  .addDecorator(checkA11y)
  .addDecorator(withReadme(README))
  .add('basic usage', () => (
    <form>
      <Fieldset
        legend="Name"
      >
        <InputText
          name="firstName"
          label="First Name"
          value=""
        />
        <InputText
          name="lastName"
          label="Last Name"
          value=""
        />
      </Fieldset>
    </form>
  ))
  .add('invalid', () => (
    <form>
      <Fieldset
        legend="Name"
        invalidMessage="This is invalid!"
        isValid={false}
      >
        <InputText
          name="firstName"
          label="First Name"
          value=""
        />
        <InputText
          name="lastName"
          label="Last Name"
          value=""
        />
      </Fieldset>
    </form>
  ))
  .add('invalid with danger theme', () => (
    <form>
      <Fieldset
        legend="Name"
        invalidMessage="This is invalid!"
        isValid={false}
        variant={{
          status: Variant.status.DANGER,
        }}
        variantIconDescription="Error"
      >
        <InputText
          name="firstName"
          label="First Name"
          value=""
        />
        <InputText
          name="lastName"
          label="Last Name"
          value=""
        />
      </Fieldset>
    </form>
  ))
  .add('client-side validation of fieldset', () => (
    <ValidatedForm />
  ));
