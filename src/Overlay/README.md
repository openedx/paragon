---
title: 'Overlays'
type: 'component'
components:
- Overlay
- OverlayTrigger
categories:
- Overlays
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

A set of components for positioning beautiful overlays, tooltips, popovers, and anything else you need.

This component is used to power Tooltips and Popovers.

<p>
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap-v4.netlify.app/components/overlays/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for additional documentation.
  </a>
</p>

## Basic usage

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  const target = React.useRef(null);

  return (
    <>
      <div className="d-flex">
        <Button variant="danger" ref={target} onClick={() => open(!isOpen)}>
          Click me to see
        </Button>
      </div>
      <Overlay target={target.current} show={open} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>
    </>
  );
}
```
