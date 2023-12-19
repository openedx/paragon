---
title: 'Sheet'
type: 'component'
components:
  - Sheet
categories:
  - Overlays
status: 'New'
designStatus: 'In Progress'
devStatus: 'In Progress'
notes: |
  Window-level edge-anchored content container with elevation shadow, with option to block content.
---

## Basic Usage

```jsx live
() => {
  const [blocking, setBlocking] = useState(false);
  const [dark, setDark] = useState(false);
  const [position, setPosition] = useState('bottom');
  const [show, setShow] = useState(false);

  const positions = ['left', 'right', 'top', 'bottom'];

  return (
    <>
      <DropdownButton
        id="position-dropdown-btn"
        onSelect={setPosition}
        title="Sheet Position"
      >
        {positions.map((position) => (
          <Dropdown.Item eventKey={position}>{position}</Dropdown.Item>
        ))}
      </DropdownButton>
      <br />
      <Button onClick={() => setShow(true)} className="mb-2 mb-md-0">
        Show the Sheet
      </Button>{' '}
      <Button onClick={() => setBlocking(!blocking)} className="mb-2 mb-md-0">
        {blocking ? 'Disable' : 'Enable'} blocking content
      </Button>{' '}
      <Button onClick={() => setDark(!dark)} className="mb-2 mb-md-0">
        Set {dark ? 'Light' : 'Dark'} mode
      </Button>
      <Sheet
        position={position}
        show={show}
        blocking={blocking}
        variant={dark ? 'dark' : 'light'}
        onClose={() => setShow(false)}
      >
        This is a Sheet component <br />
        <Button
          onClick={() => setShow(false)}
          variant={dark ? 'inverse-primary' : 'primary'}
        >
          Hide Me!
        </Button>
      </Sheet>
    </>
  );
};
```
