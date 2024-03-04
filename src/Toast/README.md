---
title: 'Toast'
type: 'component'
components:
- ToastContainer
categories:
- Overlays
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

`Toast` is a pop-up style message that shows the user a brief, fleeting, dismissible message about a successful app process.

## Behaviors

- **Customizable Appearance**: Choose the window position for toast.
- **Auto-dismiss**: Toast automatically dismisses after a default duration of 5 seconds.
- **Disable timer**: Pause the auto-dismiss timer on hover or focus of the Toast or the dismiss icon.
- **Re-enable timer**: Resume the auto-dismiss timer on mouse leave or blur of the Toast component.

## Basic Usage

```jsx live
() => {
  const [position, setPosition] = useState('bottom-left');
  const [timer, setTimer] = useState(5000);
  const [message, setMessage] = useState('Example of a basic Toast.');
  const [withActions, setWithActions] = useState('false');

  const testAction = {
    label: "Optional Button",
    onClick: () => console.log('You clicked the action button.')
  };

  return (
    <>

      {/* start example form block */}
        <ExamplePropsForm
          inputs={[
            { value: position, setValue: (value) => setPosition(value), name: 'Position', options: [
              { value: "top-left", name: "top-left" },
              { value: "top-right", name: "top-right" },
              { value: "bottom-left", name: "bottom-left" },
              { value: "bottom-right", name: "bottom-right" }]
            },
            { value: timer, setValue: (value) => setTimer(value), name: 'Duration (ms)', range: { min: 1000 , max: 10000, step: 1000 } },
            { value: withActions, setValue: (value) => setWithActions(value), name: 'With actions', options: [
              { value: 'true', name: "True" },
              { value: 'false', name: "False" },
            ]},
          ]}
        />
      {/* end example form block */}

       <div className="mt-3 mb-3">
        Message:
        <Form.Control
          className="mt-1"
          as="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      <Button onClick={() => toast({ message, duration: timer, actions: withActions === 'true' ? [testAction] : [], position })}>
        Show Toast
      </Button>
    </>
  );
}
```
