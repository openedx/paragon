---
title: 'ModalPopup'
type: 'component'
components:
- ModalPopup
- ModalCloseButton
categories:
- Overlays
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

A generic component for creating accessible modal popup objects.

Note that `ModalPopup` expects DOM node, not ref, in order to be able to update when the node changes.
A proper way to implement this is to use [callback refs](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) with `useState` hook as in the example below.

## Basic Usage

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  const [target, setTarget] = React.useState(null);

  return (
    <>
      <div className="d-flex">
        <Button
          ref={setTarget}
          variant="outline-primary"
          onClick={open}>
          Open modal popup
        </Button>
      </div>
      <ModalPopup
        positionRef={target}
        isOpen={isOpen}
        onClose={close}>
        <div
          className="bg-white p-3 rounded shadow"
          style={{textAlign: 'start'}}>
          <p>This could be a menu or tray.</p>

          <Button variant="primary" className="mie-2">Action</Button>
          <ModalCloseButton variant="outline-primary">Close</ModalCloseButton>
        </div>
      </ModalPopup>
    </>
  )
}
```
### With arrow

The arrow modifier positions an inner element of the modal popup so it appears centered relative to the reference.

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  const [target, setTarget] = React.useState(null);

  return (
    <>
      <div className="d-flex">
        <Button
          ref={setTarget}
          variant="outline-primary"
          onClick={open}>
          Open modal popup
        </Button>
      </div>
      <ModalPopup
        hasArrow
        placement="right"
        positionRef={target}
        isOpen={isOpen}
        onClose={close}>
        <div
          className="bg-white p-3 rounded shadow border"
          style={{textAlign: 'start'}}>
          <p>This could be a menu or tray.</p>

          <Button variant="primary" className="mie-2">Action</Button>
          <ModalCloseButton variant="outline-primary">Close</ModalCloseButton>
        </div>
      </ModalPopup>
    </>
  )
}
```

Extra props supplied to ModalPopup are passed through to an underlying PopperElement component.
