---
title: 'Form.Radio'
type: 'component'
components:
- FormRadio
- FormRadioSet
categories:
- Forms
tabName: 'implementation'
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

A simple radio button for use with `Form.RadioSet`.

Note: extra props added to this component are passed as attributes to the
underlying `input` node. See MDN for documentation on available
[input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes).

## Controlled Usage

```jsx live
() => {
  const [value, setValue] = useState('green');
  const handleChange = e => setValue(e.target.value);
  return (
    <Form.Group>
      <Form.Label>Which Color?</Form.Label>
      <Form.RadioSet
        name="colors"
        onChange={handleChange}
        value={value}
      >
        <Form.Radio value="red">Red</Form.Radio>
        <Form.Radio value="green">Green</Form.Radio>
        <Form.Radio value="blue">Blue</Form.Radio>
        <Form.Radio value="cyan" disabled>Cyan</Form.Radio>
      </Form.RadioSet>
    </Form.Group>
  );
}
```

## Unlabeled Control

```jsx live
() => {
  const [value, setValue] = useState('green');
  const handleChange = e => setValue(e.target.value);

  return (
    <Form.RadioSet name="colors-unlabeled" onChange={handleChange} value={value}>
      <RadioControl value="red" />
      <RadioControl value="green" />
    </Form.RadioSet>
  )
}
```

## Uncontrolled Usage

```jsx live
<Form.Group>
  <Form.Label>Which Color?</Form.Label>
  <Form.RadioSet
    name="color-two"
    onChange={(e) => console.log(e.target.value)}
    defaultValue="green"
  >
    <Form.Radio value="red">Red</Form.Radio>
    <Form.Radio value="green">Green</Form.Radio>
    <Form.Radio value="blue">Blue</Form.Radio>
    <Form.Radio value="cyan" disabled>Cyan</Form.Radio>
  </Form.RadioSet>
</Form.Group>
```

## Inline layout

```jsx live
<Form.Group>
  <Form.Label>Which Color?</Form.Label>
  <Form.RadioSet
    name="color-three"
    onChange={(e) => console.log(e.target.value)}
    defaultValue="green"
    isInline
  >
    <Form.Radio value="red">Red</Form.Radio>
    <Form.Radio value="green">Green</Form.Radio>
    <Form.Radio value="blue">Blue</Form.Radio>
    <Form.Radio value="cyan" disabled>Cyan</Form.Radio>
  </Form.RadioSet>
</Form.Group>
```

## Validation

### Group Level Validation

```jsx live
<Form.Group isInvalid>
  <Form.Label>Which Color?</Form.Label>
  <Form.RadioSet
    name="color-five"
    onChange={(e) => console.log(e.target.value)}
  >
    <Form.Radio value="red">Red</Form.Radio>
    <Form.Radio value="green">Green</Form.Radio>
    <Form.Radio value="blue">Blue</Form.Radio>
    <Form.Radio value="cyan" disabled>Cyan</Form.Radio>
  </Form.RadioSet>
  <Form.Control.Feedback>
    Please choose an option.
  </Form.Control.Feedback>
</Form.Group>
```

### Individual option validation

```jsx live
<Form.Group>
  <Form.Label>Which Color?</Form.Label>
  <Form.RadioSet name="color-four">
    <Form.Radio
      value="red"
      description="Red's cool"
    >
      Red
    </Form.Radio>
    <Form.Radio
      value="green"
      description="Excellent choice"
      isValid
    >
      Green
    </Form.Radio>
    <Form.Radio
      value="blue"
      description="Poor choice"
      isInvalid
    >
      Blue
    </Form.Radio>
    <Form.Radio
      value="cyan"
      disabled
    >
      Cyan
    </Form.Radio>
  </Form.RadioSet>
</Form.Group>
```

## Radio standalone usage

This is supported, but not recommended.

```jsx live
<>
  <Form.Radio className="ml-2" name="color" value="red">Red</Form.Radio>
  <Form.Radio className="ml-2" name="color" value="green" defaultChecked>Green</Form.Radio>
  <Form.Radio className="ml-2" name="color" value="blue">Blue</Form.Radio>
  <Form.Radio className="ml-2" name="color" value="cyan" disabled>Cyan</Form.Radio>
</>
```
