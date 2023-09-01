---
title: 'Dropdown'
type: 'component'
components:
- Dropdown
- DropdownItem
- DropdownMenu
- DropdownButton
- DropdownToggle
- DropdownHeader
- DropdownDivider
categories:
- Navigation
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
---

<p className="lead">
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap.github.io/components/dropdowns/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

## Basic Usage
```jsx live
<DropdownButton id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
</DropdownButton>
```

## Advanced Usage

```jsx live
<>
  <Dropdown onToggle={(isOpen, event, metadata) => console.log('debug', 'onToggle', { isOpen, event, metadata })} className="mb-3">
    <Dropdown.Toggle variant="success" id="dropdown-basic-1">
      Dropdown Button
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Header>Header</Dropdown.Header>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  <Dropdown variant="dark" onToggle={(isOpen, event, metadata) => console.log('debug', 'onToggle', { isOpen, event, metadata })} className="mb-3">
    <Dropdown.Toggle variant="success" id="dropdown-basic-2">
      Dark Variant
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Header>Header</Dropdown.Header>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown autoClose={false} onToggle={(isOpen, event, metadata) => console.log('debug', 'onToggle', { isOpen, event, metadata })} className="mb-3">
    <Dropdown.Toggle variant="success" id="dropdown-basic-2">
      autoClose=false
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Header>Header</Dropdown.Header>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown autoClose="inside" onToggle={(isOpen, event, metadata) => console.log('debug', 'onToggle', { isOpen, event, metadata })} className="mb-3">
    <Dropdown.Toggle variant="success" id="dropdown-basic-3">
      autoClose=inside
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Header>Header</Dropdown.Header>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
  <Dropdown autoClose="outside" onToggle={(isOpen, event, metadata) => console.log('debug', 'onToggle', { isOpen, event, metadata })} className="mb-3">
    <Dropdown.Toggle variant="success" id="dropdown-basic-4">
      autoClose=outside
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Header>Header</Dropdown.Header>
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Something else</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</>
```

## With IconButton

You can use `Dropdown.Toggle` with [IconButton](/components/iconbutton) component, note that all props you provide to `Dropdown.Toggle` will get passed down to the `IconButton`.

```jsx live
<Dropdown>
  <Dropdown.Toggle
    id="dropdown-toggle-with-iconbutton"
    as={IconButton}
    src={MoreVert}
    iconAs={Icon}
    variant="primary"
  />
  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```
