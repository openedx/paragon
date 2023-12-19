---
title: 'ValidationFormGroup'
type: 'component'
components:
  - ValidationFormGroup
categories:
  - Forms (deprecated)
status: 'Deprecate Soon'
designStatus: 'Done'
devStatus: 'Done'
notes: |
  Replaced by Form.Group
---

Handles bootstrap style field validation and handles related aria attributes.

Manages the rendering of bootstrap-style:

- Help text
- Valid and invalid feedback

For children of type input, textarea, and select:

- Appends bootstrap validation class names
- Appends aria-describedby attributes (for help text and feedback)

## basic usage

```jsx live
<ValidationFormGroup for="firstName" helpText="This is your name.">
  <label htmlFor="firstName">First Name</label>
  <Input
    type="text"
    id="firstName"
    name="first-name"
    value="Casey"
    onChange={() => {}}
  />
</ValidationFormGroup>
```

## invalid message

```jsx live
<ValidationFormGroup for="firstName" invalid invalidMessage="Wrong!">
  <label htmlFor="firstName">First Name</label>
  <Input
    type="text"
    id="firstName"
    name="first-name"
    value="Casey"
    onChange={() => {}}
  />
</ValidationFormGroup>
```

## valid message

```jsx live
<ValidationFormGroup for="firstName" valid validMessage="What a nice name!">
  <label htmlFor="firstName">First Name</label>
  <Input
    type="text"
    id="firstName"
    name="first-name"
    value="Casey"
    onChange={() => {}}
  />
</ValidationFormGroup>
```

## with any kind of input

```jsx live
<>
  <ValidationFormGroup
    for="weatherToday"
    helpText="Look out the window to see."
    valid
    validMessage="Correct!"
  >
    <label htmlFor="weatherToday">How is the weather today?</label>
    <select
      className="form-control"
      id="weatherToday"
      name="weather"
      value="Sunny"
      onChange={() => {}}
    >
      <option>Sunny</option>
      <option>Cloudy</option>
      <option>Rainy</option>
      <option>Snowy</option>
    </select>
  </ValidationFormGroup>
  <ValidationFormGroup
    for="weatherTomorrow"
    helpText="Incoming weather."
    invalid
    invalidMessage="No good!"
  >
    <Form.Control type="text" value="Cloudy" />
  </ValidationFormGroup>
</>
```
