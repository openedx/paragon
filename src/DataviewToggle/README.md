---
title: 'DataviewToggle'
type: 'component'
components:
- DataviewToggle
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
        <DataviewToggle value={'card'} onChange={value=>alert(value)}>
            <DataviewToggle.Button value="card" aria-label="card view">
                <IconButton src={GridView} iconAs={Icon} alt="Card" />
            </DataviewToggle.Button>
            <DataviewToggle.Button value="list" aria-label="list view">
                <IconButton src={ListView} iconAs={Icon} alt="List" />
            </DataviewToggle.Button>
        </DataviewToggle>
```
