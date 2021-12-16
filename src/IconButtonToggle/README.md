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
  A component that enables users to switch between data views depending on their individual preferences or needs. Data views may include card view (displaying data in cards that form a grid), table view (displaying data in a data table), or list view (displaying data in full-width cards that form a list).
</p>

### Basic Usage
```jsx live
    () => {
      const [activeValue, setActiveValue] = React.useState('card');
      return (
        <IconButtonToggle activeValue={activeValue} onChange={ value => setActiveValue(value) }>
          <IconButton.WithTooltip tooltipContent="Card view" value="card" src={GridView} iconAs={Icon} alt="Card" />
          <IconButton.WithTooltip tooltipContent="List view" value="list" src={ListView} iconAs={Icon} alt="List" />
        </IconButtonToggle>
      );
    }
```
