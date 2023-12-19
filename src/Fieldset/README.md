---
title: 'Fieldset'
type: 'component'
components:
  - Fieldset
categories:
  - Forms (deprecated)
status: 'Deprecate Soon'
designStatus: 'TBD'
devStatus: 'To Do'
notes: |
  Unneeded. Used in one place (studio-frontend/src/components/EditImageModal/index.jsx)
---

## basic usage

```jsx live
<form>
  <Fieldset legend="Name">
    <InputText name="firstName" label="First Name" value="" />
    <InputText name="lastName" label="Last Name" value="" />
  </Fieldset>
</form>
```

## invalid

```jsx live
<form>
  <Fieldset legend="Name" invalidMessage="This is invalid!" isValid={false}>
    <InputText name="firstName" label="First Name" value="" />
    <InputText name="lastName" label="Last Name" value="" />
  </Fieldset>
</form>
```

## invalid with danger theme

```jsx live
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
    <InputText name="firstName" label="First Name" value="" />
    <InputText name="lastName" label="Last Name" value="" />
  </Fieldset>
</form>
```

## Validated Form

```jsx live
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
    if (
      this.firstInputRef.value.length === 0 &&
      this.secondInputRef.value.length === 0
    ) {
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
      <form onSubmit={this.handleSubmit}>
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
            inputRef={(ref) => {
              this.firstInputRef = ref;
            }}
          />
          <InputText
            name="lastName"
            label="Last Name"
            value=""
            inputRef={(ref) => {
              this.secondInputRef = ref;
            }}
          />
        </Fieldset>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    );
  }
}
```
