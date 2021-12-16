---
title: 'IconButtonToggle'
type: 'component'
components:
- IconButtonToggle
categories:
- Buttonlike
status: 'Stable'
designStatus: ''
devStatus: 'TO DO'
notes: |
  Helps toggle Data view between list, card view etc.
---

<p className="lead">
  Wraps a set of <i>IconButton</i> or <i>IconButton.WithTooltip</i> components in a group and marks as active only one at a time.
  The IconButton with a value matching the 'activeValue' is set to be in the active state
  When one presses on one of the buttons, that button is set to active state, and the callback passed to onChange is called with that value
  You can pass a tooltip if you use the WithTooltip sub component.
</p>

### Basic Usage
```jsx live
    () => {
      const [activeValue, setActiveValue] = React.useState('card');
      return (
        <>
        <div className="mr-2 mt-2 mb-2">Current value is: <strong>{activeValue}</strong></div>
        <IconButtonToggle activeValue={activeValue} onChange={ value => setActiveValue(value) }>
          <IconButton.WithTooltip tooltipContent="Card view" value="card" src={GridView} iconAs={Icon} alt="Card" />
          <IconButton.WithTooltip tooltipContent="List view" value="list" src={ListView} iconAs={Icon} alt="List" />
        </IconButtonToggle>
        </>
      );
    }
```
