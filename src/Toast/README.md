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

### Theme variables (SCSS)

```scss
$toast-max-width:                   400px !default;
$toast-padding-x:                   .75rem !default;
$toast-padding-y:                   .25rem !default;
$toast-font-size:                   .875rem !default;
$toast-color:                       null !default;
$toast-background-color:            $gray-700 !default;
$toast-border-width:                1px !default;
$toast-border-color:                rgba(0, 0, 0, .1) !default;
$toast-border-radius:               .25rem !default;
$toast-box-shadow:                  0 1.25rem 2.5rem rgba($black, .15), 0 .5rem 3rem rgba($black, .15) !default;

$toast-header-color:                $white !default;
$toast-header-background-color:     $gray-700 !default;
$toast-header-border-color:         rgba(0, 0, 0, .05) !default;
```