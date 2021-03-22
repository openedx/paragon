---
title: 'Toast'
type: 'component'
components:
- Toast
categories:
- Overlays
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

### Basic Usage

```jsx live
() => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toast
        onClose={() => setShow(false)}
        show={show}
      >
        Example of a basic Toast.
      </Toast>

      <Button variant="primary" onClick={() => setShow(true)}>Show Toast</Button>
    </>
  );
}
```

### With Button

```jsx live
() => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toast
        action={{
          label: "Optional Button",
          onClick: () => console.log('You clicked the action button.')
        }}
        onClose={() => setShow(false)}
        show={show}
      >
        Success! Example of a Toast with a button.
      </Toast>

      <Button variant="primary" onClick={() => setShow(true)}>Show Toast</Button>
    </>
  );
}
```

### With Link

```jsx live
() => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Toast
        action={{
          label: "Optional Link",
          href: "#"
        }}
        onClose={() => setShow(false)}
        show={show}
      >
        Success! Example of a Toast with a link.
      </Toast>

      <Button variant="primary" onClick={() => setShow(true)}>Show Toast</Button>
    </>
  );
}
```