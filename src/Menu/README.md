---
title: 'Menu'
type: 'component'
components:
- MenuItem
- Menu
categories:
- Navigation
- Buttonlike
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

### MenuItem

A menu item is a link, button, or checkbox for use by any kind of menu overlay, dropdown menu, or nav menu. A menu item can be text-only or combined with an icon. Passing a component to the `as` prop, MenuItems will also be an instance of that component.

### Menu

An arrow-key naivgable Menu which consists of MenuItems. A Menu can be employed to produce its common variants, including dropdown menus, select menus, and others. Menus are keyboard navigable with both tab and arrow keys.

```jsx live
() => {
  return (
    <Menu>
        <MenuItem> A Menu Item</MenuItem>
        <MenuItem iconBefore={Add}>A Menu Item With an Icon Before</MenuItem>
        <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
        <MenuItem disabled>A Disabled Menu Item</MenuItem>
        <MenuItem as={Hyperlink} href="https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
        <MenuItem as={Button} variant="primary" size="inline">A Button Menu Item</MenuItem>
        <MenuItem as={Form.Checkbox}>A Checkbox Menu Item</MenuItem>
    </Menu>
  );
}
```

A Menu can include things like forms.

```jsx live
() => {
  return (
    <Menu>
      <Form.Group>
        <MenuItem as ={Form.Label}>Which Color?</MenuItem>
        <Form.CheckboxSet
          name="color-two"
          onChange={(e) => console.log(e.target.value)}
          defaultValue={['green']}
        >
        <MenuItem as = {Form.Checkbox} value="red">Red</MenuItem>
        <MenuItem as = {Form.Checkbox} value="blue">Blue</MenuItem>
        <MenuItem as = {Form.Checkbox} value="green">Green</MenuItem>
        <MenuItem as = {Form.Checkbox} value="yellow">Yellow</MenuItem>
        </Form.CheckboxSet>
      </Form.Group>
    </Menu>
  );
}
```

A Menu can be implemented to appear inside a `modalpopup` for a wide variety of use cases The Modal brings focus to the first menu element upon the click of the trigger, and can be escaped on click away or key press.

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);
  const target = React.useRef(null);
  const [selected, setSelected] = useState('...');

  return (
    <>
    <Badge variant="secondary">I like {selected}</Badge>
      <Button ref={target} variant="primary" size="inline" onClick={open}>Click Me To Pick:</Button>
      <ModalPopup positionRef={target} isOpen={isOpen} onClose={close} style={{
        width: 500, height: 50
      }}>
      <div className="bg-white">
        <Menu>
        <MenuItem as={Button} variant="primary" size="inline" onClick= {()=>setSelected('Beans')}>Beans</MenuItem>
        <MenuItem as={Button} variant="primary" size="inline" onClick= {()=>setSelected('Greens')}>Greens</MenuItem>
        <MenuItem as={Button} variant="primary" size="inline" onClick= {()=>setSelected('Tomatoes')}>Tomatoes</MenuItem>
        <MenuItem as={Button} variant="primary" size="inline" onClick= {()=>setSelected('Potatoes')}>Potatoes</MenuItem>
      </Menu>
      </div>
      </ModalPopup>
    </>
  )
}
```

