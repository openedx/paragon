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

``Toast`` is a pop-up style message that shows the user a brief, fleeting, dismissible message about a successful app process.

``Toasts`` six fixed to the bottom left of the window.

### Implementation Notes

<ul>
  <li>Background: Gray 700</li>
  <li>Font: Small Paragraph</li>
  <li>Icon Button(Dark Palette)</li>
  <li>Icon: Close</li>
  <li>Optional Button, Secondary, Small, Dark</li>
  <li>Corner radius: Radius 1 (4px)</li>
  <li>Positioning: Bottom, Left</li>
  <li>Z Index: Top-most layer</li>
  <li>Elevation: 5 Shadow</li>
</ul>

#### Behaviors

<ul>
  <li>Auto-dismiss: Toast automatically dismisses after 5 seconds by default.</li>
  <li>Disable timer: On hover of the Toast container. On hover or focus of dismiss icon or optional button</li>
  <li>Re-enable timer: On mouse leave of the Toast container. On blur of dismiss icon or option button</li>
  <li>Auto-dismiss timer: 5 - 15 second range.</li>
</ul>


#### Animation when Toast is triggered

<ul>
  <li>Fade-in duration: 500ms</li>
  <li>Animation-timing-functions: ease-out</li>
  <li>Keyframe: from bottom -20px</li>
  <li>Keyframe: to bottom 0px</li>
</ul>

#### Animation when Toast is dismissed or auto-dismissed

<ul>
  <li>Fade-out duration: 200ms</li>
  <li>Animation-timing-functions: ease-out</li>
  <li>Keyframe: from bottom 0px</li>
  <li>Keyframe: to bottom 0px</li>
</ul>

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
