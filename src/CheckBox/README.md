---
title: 'Checkbox'
type: 'component'
components:
- Check
categories:
- Forms (deprecated)
status: 'Deprecate Soon'
designStatus: 'TBD'
devStatus: 'To Do'
notes: |
  Replaced by Form.Checkbox
---

## Basic usage

```jsx live
<CheckBox
  name="checkbox"
  label="check me out!"
/>
```

## Disabled

```jsx live
<CheckBox
  name="checkbox"
  label="you cannot check me out"
  disabled
/>
```

## Default checked

```jsx live
<CheckBox
  name="checkbox"
  label="(un)check me out"
  checked
/>
```

## Call a function

```jsx live
<CheckBox
  name="checkbox"
  label="check out the console"
  onChange={() => console.log('the checkbox changed state')}
/>
```

## Controlled example

```jsx live
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
      <div className="d-flex align-items-center">
        <Button
          variant="light"
          className="mr-3"
          onClick={this.toggleCheckBox}
        >
          Click me to toggle the check box!
        </Button>
        <CheckBox
          name="checkbox"
          label="click the button"
          checked={this.state.checked}
        />
      </div>
    );
  }
}
```
