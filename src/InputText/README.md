---
title: 'InputText'
type: 'component'
components:
  - InputText
categories:
  - Forms (deprecated)
status: 'Deprecate Soon'
designStatus: 'TBD'
devStatus: 'To Do'
notes: |
  Replaced by Form.Control
---

## Minimal usage

```jsx live
<InputText name="name" label="First Name" value="Foo Bar" />
```

## Read only

```jsx live
<InputText name="inputState" label="Input State" value="Read Only" readOnly />
```

## Validation

```jsx live
<InputText
  id="username"
  name="username"
  label="Username"
  description="The unique name that identifies you throughout the site."
  validator={(value) => {
    let feedback = { isValid: true };
    if (value.length < 3) {
      feedback = {
        isValid: false,
        validationMessage: 'Username must be at least 3 characters in length.',
      };
    }
    return feedback;
  }}
/>
```

### Validation with danger theme

```jsx live
<InputText
  name="username"
  label="Username"
  description="The unique name that identifies you throughout the site."
  validator={(value) => {
    let feedback = { isValid: true };
    if (value.length < 3) {
      feedback = {
        isValid: false,
        validationMessage: 'Username must be at least 3 characters in length.',
        dangerIconDescription: 'Error',
      };
    }
    return feedback;
  }}
  themes={['danger']}
/>
```

### Label as element

```jsx live
<InputText name="username" label={<span lang="en">Element</span>} value="Label is wrapped in language span" />
```

### Focus test

```jsx live
class FocusInputWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };

    this.resetStatusAlertWrapperState = this.resetStatusAlertWrapperState.bind(this);
  }

  resetStatusAlertWrapperState() {
    this.setState({ open: false });
    this.inputForm.focus();
  }

  render() {
    return (
      <div>
        <StatusAlert
          alertType="info"
          open={this.state.open}
          dialog="Close me to input data!"
          onClose={this.resetStatusAlertWrapperState}
        />
        <InputText
          id="data"
          name="data"
          label="Data Input"
          inputRef={(input) => {
            this.inputForm = input;
          }}
        />
      </div>
    );
  }
}
```

### Different textual input types

```jsx live
<form>
  <InputText name="search" label="Search" value="what is paragon" type="search" id="input-search" />
  <InputText name="email" label="Email" value="paragon@edx.org" type="email" id="input-email" />
  <InputText name="url" label="Url" value="https://edx.github.io/paragon" type="url" id="input-url" />
  <InputText name="telephone" label="Telephone" value="1-(555)-555-5555" type="tel" id="input-tel" />
  <InputText name="password" label="Password" value="hunter2" type="password" id="input-password" />
  <InputText name="number" label="Number" value={42} type="number" id="input-number" />
  <InputText
    name="datetime-local"
    label="Date and time"
    value="2017-04-27T13:45:00"
    type="datetime-local"
    id="input-datetime-local"
  />
  <InputText name="date" label="Date" value="2017-04-27" type="date" id="input-date" />
  <InputText name="month" label="Month" value="2017-04" type="month" id="input-month" />
  <InputText name="week" label="Week" value="2017-W33" type="week" id="input-week" />
  <InputText name="time" label="Time" value="13:45:00" type="time" id="input-time" />
  <InputText name="color" label="Color" value="#BF472C" type="color" id="input-color" />
</form>
```

### Price with step

```jsx live
<InputText name="price" label="Price" type="number" value={3.5} min={0} step={0.01} />
```

### Displayed inline

```jsx live
<InputText name="username" label="Username" value="foobar" inline />
```

### With input group addons

```jsx live
<form>
  <InputText
    name="username"
    label="Username"
    value="foobar"
    inputGroupPrepend={<div className="input-group-text">{'@'}</div>}
  />
  <InputText
    name="username"
    label="Username"
    value="foobar"
    inputGroupAppend={<div className="input-group-text">{'@example.com'}</div>}
  />
  <InputText
    name="money"
    label="Money"
    type="number"
    value={1000}
    inputGroupPrepend={<div className="input-group-text">{'$'}</div>}
    inputGroupAppend={<div className="input-group-text">{'.00'}</div>}
  />
  <InputText
    name="search"
    label="Search"
    value="what is paragon"
    inputGroupAppend={<Button variant="outline-secondary">Go</Button>}
  />
  <InputText
    name="username"
    label="Username"
    value="foobar"
    inputGroupAppend={[
      <div className="input-group-text">
        <Icon id="checkmark" className="fa fa-check" screenReaderText="Checkmark" />
      </div>,
      <Button variant="outline-secondary">Go</Button>,
    ]}
  />
  <InputText
    name="password"
    label="Password"
    value="secret"
    inputGroupAppend={
      <div className="input-group-text">
        <Icon id="checkmark" className="fa fa-check" screenReaderText="Checkmark" />
      </div>
    }
  />
</form>
```
