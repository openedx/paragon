---
title: 'IconButtonToggle'
type: 'component'
components:
- IconButtonToggle
categories:
- Buttonlike
tabName: 'implementation'
status: 'Stable'
designStatus: 'In Progress'
devStatus: 'Done'
notes: |
  Helps toggle Data view between list, card view etc.
---

Wraps a set of ``IconButton`` or ``IconButtonWithTooltip`` components in a group and marks as active only one at a time.
The IconButton with a value matching the 'activeValue' is set to be in the active state.
When one presses on one of the buttons, that button is set to active state, and the callback passed to ``onChange`` is called with that value.
You can pass a tooltip if you use the ``IconButtonWithTooltip`` subcomponent.

## Basic Usage
```jsx live
    () => {
      const [activeValue, setActiveValue] = React.useState('card');
      return (
        <>
        <div className="mr-2 mt-2 mb-2">Current value is: <strong>{activeValue}</strong></div>
        <IconButtonToggle activeValue={activeValue} onChange={ value => setActiveValue(value) }>
          <IconButton value="card" src={GridView} iconAs={Icon} alt="Card" />
          <IconButton value="list" src={ListView} iconAs={Icon} alt="List" />
        </IconButtonToggle>
        </>
      );
    }
```

## Basic Usage (with tooltips)
```jsx live
    () => {
      const [activeValue, setActiveValue] = React.useState('card');
      return (
        <>
        <div className="mr-2 mt-2 mb-2">Current value is: <strong>{activeValue}</strong></div>
        <IconButtonToggle activeValue={activeValue} onChange={ value => setActiveValue(value) }>
          <IconButtonWithTooltip tooltipContent="Card view" value="card" src={GridView} iconAs={Icon} alt="Card" />
          <IconButtonWithTooltip tooltipContent="List view" value="list" src={ListView} iconAs={Icon} alt="List" />
        </IconButtonToggle>
        </>
      );
    }
```
