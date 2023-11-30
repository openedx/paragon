---
title: 'useArrowKeyNavigation'
type: 'hook'
categories:
- Hooks
components:
- useArrowKeyNavigation
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

`useArrowKeyNavigation` adds arrow key navigation through any component.

## Basic Usage
To enable item navigation using the arrow keyboard specifies the CSS selectors string that indicates to which elements
the user can navigate.

```jsx live
() => {
  const parentRef = useArrowKeyNavigation({
    selectors: 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
  });

  return (
    <div ref={parentRef}>
      <Button className="mb-2 mb-sm-0" autoFocus>Brand</Button>{' '}
      <Button className="mb-2 mb-sm-0" variant="outline-brand">Outline Brand</Button>{' '}
      <Button className="mb-2 mb-sm-0" variant="outline-primary">Outline Primary</Button>{' '}
      <Button className="mb-2 mb-sm-0" variant="tertiary">Tertiary</Button>{' '}
    </div>
  );
};

```

## Ignored arrow keys
To disable listening for keystrokes, use `ignoreKeys` to add ignored keys to the array.
For example, you have the ability to navigate through the inputs using the `arrowUp` and `arrowDown` keys;
the `arrowUp` and `arrowLeft` keys can be ignored for convenient editing of the text in the inputs.

```jsx live
() => {
  const parentRef = useArrowKeyNavigation({
    selectors: 'a:not(:disabled),button:not(:disabled),input:not(:disabled)',
    ignoredKeys: ['ArrowRight', 'ArrowLeft'],
  });

  return (
    <Form ref={parentRef}>
        <Form.Group>
          <Form.Label>Full name:</Form.Label>
          <Form.Control placeholder="Enter full name" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Checkbox>Confirm the entered data</Form.Checkbox>
        </Form.Group>

        <Button variant="primary" onClick={() => alert('Submitted!')}>
          Submit
        </Button>
    </Form>
  );
};
```
