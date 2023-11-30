---
title: 'Toast'
type: 'component'
components:
- Toast
categories:
- Overlays
tabName: 'implementation'
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

``Toast`` is a pop-up style message that shows the user a brief, fleeting, dismissible message about a successful app process.

``Toasts`` sit fixed to the bottom left of the window.

## Behaviors

<ul>
  <li>Auto-dismiss: Toast automatically dismisses after 5 seconds by default.</li>
  <li>Disable timer: On hover of the Toast container. On hover or focus of dismiss icon or optional button</li>
  <li>Re-enable timer: On mouse leave of the Toast container. On blur of dismiss icon or option button</li>
  <li>Auto-dismiss timer: 5 - 15 second range.</li>
</ul>

## Basic Usage

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

## With Button

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

## With Link

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
