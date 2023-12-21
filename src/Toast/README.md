---
title: 'Toast'
type: 'component'
components:
- ToastContainer
- toast
categories:
- Overlays
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

`Toast` is a pop-up style message that shows the user a brief, fleeting, dismissible message about a successful app process.

## Features

- **Customizable Appearance**: Choose the window position for toast.
- **Interactive**: Includes a close button for manual dismissal.
- **Auto-dismiss**: Disappears automatically after a set duration.
- **Hover Interactivity**: Auto-dismiss timer pauses on hover or focus, allowing users to interact with the content.

## Behaviors

- Auto-dismiss: Toast automatically dismisses after a default duration of 5 seconds.
- Disable timer: Pause the auto-dismiss timer on hover or focus of the Toast or the dismiss icon.
- Re-enable timer: Resume the auto-dismiss timer on mouse leave or blur of the Toast component.

## Basic Usage

```jsx live
() => {
  const [position, setPosition] = useState('bottom-left');
  const [timer, setTimer] = useState(5000);
  const [message, setMessage] = useState('Example of a basic Toast.');
  const [actions, setActions] = useState([]);

  const testAction = {
    label: "Optional Button",
    onClick: () => console.log('You clicked the action button.')
  };

  return (
    <>
       <div className="mt-3">
        Message:
        <Form.Control
          className="mt-1"
          as="textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      
      <div className="mt-3">
        Duration (ms):
        <Form.Control className="mt-1" type="number" value={timer} onChange={(e) => setTimer(Number(e.target.value))} />
      </div>

      <div className="mt-3 mb-4">
        Position:
        <Form.Control
          as="select"
          className="mt-1"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        >
          <option value="top-left">Top Left</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-right">Bottom Right</option>
        </Form.Control>
      </div>

      <div className="mt-3 mb-4">
        Add and remove actions:

        <p>Total added: {actions.length}</p>

        <Stack className="mt-2" direction="horizontal" gap="2">
          <Button onClick={() => setActions(prevState => [...prevState, testAction])} variant="tertiary">
            Add action
          </Button>
          <Button onClick={() => setActions([])} variant="tertiary">
            Clear actions
          </Button>
        </Stack>
      </div>


      <Button onClick={() => toast({ message, duration: timer, actions})}>
        Show Toast
      </Button>

      <ToastContainer position={position} />
    </>
  );
}
```
