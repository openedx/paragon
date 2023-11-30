---
title: 'Form.Control.Feedback'
type: 'component'
components:
- FormControlFeedback
categories:
- Forms
tabName: 'implementation'
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

Alias: **Form.Text**

Provide help text or validation feedback to the user about about a form control.
`Form.Control.Feedback` uses a `FormGroupContext` (provided by `Form.Group`) to
ensure that it has a unique id and that that id is added to a related
`Form.Control` via aria-describedby according to WCAG guidelines.

Note: `Form.Control.Feedback` is aliased as `Form.Text` for backward compatibility for
those using the React Bootstrap component.

## Basic usage

```jsx live
<Form.Group>
  <Form.Control floatingLabel="What kind of cats?" />
  <Form.Control.Feedback>
    We answer the important questions here.
  </Form.Control.Feedback>
</Form.Group>
```

## Feedback Types

```jsx live
<>
  <Form.Group>
    <Form.Control floatingLabel="What cats?" />
    <Form.Control.Feedback>
      Let me help you!
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Group isInvalid>
    <Form.Control floatingLabel="What cats?" />
    <Form.Control.Feedback type="invalid">
      You are incorrect!
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Group isValid>
    <Form.Control floatingLabel="What cats?" />
    <Form.Control.Feedback type="valid">
      You are correct!
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Group>
    <Form.Control floatingLabel="What cats?" />
    <Form.Control.Feedback icon={<Icon src={WarningFilled} />}>
      Making it custom. Be very careful.
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Group>
    <Form.Control floatingLabel="What cats?" />
    <Form.Control.Feedback>
      More than one feedback at a time is possible.
    </Form.Control.Feedback>
    <Form.Control.Feedback type="valid">
      This is okay sometimes.
    </Form.Control.Feedback>
  </Form.Group>
</>
```
