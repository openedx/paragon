---
title: 'Menu'
type: 'component'
components:
- Menu
- MenuItem
categories:
- Navigation
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

An arrow-key navigable ``Menu`` which consists of ``MenuItems``. A ``Menu`` can be employed to produce its common variants, including dropdown menus, select menus, and others. ``Menus`` are keyboard navigable with both tab and arrow keys.

## MenuItem

A ``MenuItem`` is its own distinct component that is used by any kind of menu overlays i.e. dropdown menu and navigation menu.

```jsx live
() => {
  return (
    <Menu>
      <MenuItem> A Menu Item</MenuItem>
      <MenuItem iconBefore={Check}>A Menu Item With an Icon Before</MenuItem>
      <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
      <MenuItem disabled>A Disabled Menu Item</MenuItem>
      <MenuItem as={Hyperlink} destination="https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
      <MenuItem as={Button} variant="tertiary" size="inline">A Button Menu Item</MenuItem>
      <MenuItem as={Form.Checkbox}>A Checkbox Menu Item</MenuItem>
    </Menu>
  );
}
```

## With Form

A ``Menu`` can include things like forms.

```jsx live
() => {
  return (
    <Form.Group>
      <Form.CheckboxSet
          name="color-two"
          onChange={(e) => console.log(e.target.value)}
          defaultValue={['green']}
        >
        <Form.Label>Which Color?</Form.Label>
        <Menu>
          <MenuItem as={Form.Checkbox} value="red">Red</MenuItem>
          <MenuItem as={Form.Checkbox} value="blue">Blue</MenuItem>
          <MenuItem as={Form.Checkbox} value="green">Green</MenuItem>
          <MenuItem as={Form.Checkbox} value="yellow">Yellow</MenuItem>
        </Menu>
      </Form.CheckboxSet>
    </Form.Group>
  );
}
```

## With Modal

A ``Menu`` can be implemented to appear inside a `modalpopup` for a wide variety of use cases. The ``Modal`` brings focus to the first menu element upon the click of the trigger, and can be escaped on click away or key press.

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  const [target, setTarget] = React.useState(null);
  const [selected, setSelected] = useState('...');

  return (
    <>
      <Badge variant="secondary">I like {selected}</Badge>
      <Button ref={setTarget} variant="primary" size="inline" onClick={open}>Click Me To Pick:</Button>
      <ModalPopup positionRef={target} isOpen={isOpen} onClose={close} style={{
        width: 500, height: 50
      }}>
      <div className="bg-white">
        <Menu>
          <MenuItem as={Button} variant="tertiary" size="inline" onClick= {()=>setSelected('Beans')}>Beans</MenuItem>
          <MenuItem as={Button} variant="tertiary" size="inline" onClick= {()=>setSelected('Greens')}>Greens</MenuItem>
          <MenuItem as={Button} variant="tertiary" size="inline" onClick= {()=>setSelected('Tomatoes')}>Tomatoes</MenuItem>
          <MenuItem as={Button} variant="tertiary" size="inline" onClick= {()=>setSelected('Potatoes')}>Potatoes</MenuItem>
        </Menu>
      </div>
      </ModalPopup>
    </>
  )
}
```
