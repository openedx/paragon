---
title: 'SelectMenu'
type: 'component'
components:
- SelectMenu
- MenuItem
categories:
- Navigation
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

The ``SelectMenu`` component is triggered on the click of a button, and expands from the center if not close to the edge of the page. The ``Menu`` contains a list of ``MenuItems``, with a white background, and level 2 elevation. The ``Menu`` also remembers the user’s selection and displays it as the label for the button/link trigger.

The ``Modal`` brings focus to the first menu element upon the click of the trigger, and can be escaped on click away or key press. Set a default message with the `defaultMessage` prop string. Use the `defaultSelected` prop to signify that a menuItem is the default to open to.

## Basic usage

```jsx live
<SelectMenu>
  <MenuItem>A Menu Item</MenuItem>
  <MenuItem iconBefore={Add}>A Menu Item With an Icon Before</MenuItem>
  <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
  <MenuItem disabled>A Disabled Menu Item</MenuItem>
  <MenuItem as={Hyperlink} destination="https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
</SelectMenu>
```

## Inverse variant

```jsx live
  <Stack className="bg-dark-700 p-4">
    <SelectMenu variant="inverse-brand">
      <MenuItem>A Menu Item</MenuItem>
      <MenuItem iconBefore={Add}>A Menu Item With an Icon Before</MenuItem>
      <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
      <MenuItem disabled>A Disabled Menu Item</MenuItem>
      <MenuItem as={Hyperlink} destination="https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
    </SelectMenu>
</Stack>
```

### Linked variant

```jsx live
<SelectMenu variant="link" defaultMessage="Choose Your New Best Friend">
  <MenuItem>Falstaff</MenuItem>
  <MenuItem>Scipio</MenuItem>
  <MenuItem defaultSelected>Faustus</MenuItem>
  <MenuItem>Cordelia</MenuItem>
  <MenuItem>Renfrancine</MenuItem>
  <MenuItem>Stovern</MenuItem>
  <MenuItem>Kainian</MenuItem>
  <MenuItem>M. Hortens</MenuItem>
</SelectMenu>
```

## Disabled 

```jsx live
<SelectMenu disabled>
  <MenuItem>A Menu Item</MenuItem>
</SelectMenu>
```
