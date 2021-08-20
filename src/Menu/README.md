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

A menu item is a link, button, or checkbox for use by any kind of menu overlay, dropdown menu, or nav menu. A menu item can be text-only or combined with an icon.

```jsx live
() => {
  return (
      <div className="bg-white p-3 rounded shadow" style={{width: 400}}>
        <MenuItem> A Menu Item</MenuItem>
        <MenuItem as={Button} iconBefore={Add}>A Menu Item With an Icon Before</MenuItem>
        <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
        <MenuItem disabled>A Disabled Menu Item</MenuItem>
        <MenuItem as= {Hyperlink} href = "https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
        <MenuItem as= {Button} variant="primary" size="inline">A Button Menu Item</MenuItem>
        <MenuItem as= {Form.Checkbox} >A Checkbox Menu Item</MenuItem>
      </div>
  );
}
```

### Menu

An arrow-key naivgable Menu which consists of MenuItems. A Menu can be employed to produce its common variants, including dropdown menus, select menus, and others. Menus are keyboard navigable with both tab and arrow keys.

```jsx live
() => {
  return (
    <Menu>
        <MenuItem> A Menu Item</MenuItem>
        <MenuItem iconBefore={Add} stoven>A Menu Item With an Icon Before</MenuItem>
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