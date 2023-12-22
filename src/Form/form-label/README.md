---
title: 'Form.Label'
type: 'component'
components:
- FormLabel
categories:
- Forms
tabName: 'implementation'
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

Provide a label for a form control.
`Form.Label` uses a `FormGroupContext` (provided by `Form.Group`) to ensure that
it has an htmlFor attribute matching the `Form.Control` according to WCAG guidelines.

## Basic usage

```jsx live
<Form.Group>
  <Form.Label>What kind of cats?</Form.Label>
  <Form.Control />
</Form.Group>
```

## Inline usage

```jsx live
<Form.Group className="d-flex align-items-center">
  <Form.Label isInline>What kind of cats?</Form.Label>
  <Form.Control />
</Form.Group>
```

## Usage with grouped control

```jsx live
<Form.Group className="d-flex align-items-center">
  <Form.Label isInline>What kind of cats?</Form.Label>
  <Form.RadioSet name="color-three" defaultValue="green" isInline>
    <Form.Radio value="red">Red</Form.Radio>
    <Form.Radio value="green">Green</Form.Radio>
    <Form.Radio value="blue">Blue</Form.Radio>
    <Form.Radio value="cyan" disabled>Cyan</Form.Radio>
  </Form.RadioSet>
</Form.Group>
```

## Sizes

```jsx live
<>
<Form.Group size="sm">
  <Form.Label>What kind of cats?</Form.Label>
  <Form.Control />
</Form.Group>
<Form.Group size="lg">
  <Form.Label>What kind of cats?</Form.Label>
  <Form.Control />
</Form.Group>
</>
```

## See Form.Control for floating labels

```jsx live
<Form.Group>
  <Form.Control floatingLabel="What kind of cats?" />
</Form.Group>
```
