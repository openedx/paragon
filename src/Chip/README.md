---
title: 'Chip'
type: 'component'
components:
- Chip
categories:
- Buttonlike
tabName: 'implementation'
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

``Chips`` are compact elements that represent an input, attribute, or action. Similar to the [Badge](/components/badge) component, but interactive.

## Basic Usage

```jsx live
<div>
  <Chip>New</Chip>
  <Chip disabled>New</Chip>
  <Chip variant="dark">New</Chip>
</div>
```

## With Icon Before and After

```jsx live
<div>
  <Chip iconBefore={Person}>New</Chip>
  <Chip
    variant="dark"
    iconBefore={Person}
    iconAfter={Close}
    onIconAfterClick={() => console.log('Remove Chip')}
  >
    New
  </Chip>
  <Chip
    variant="dark"
    iconBefore={Person}
    iconAfter={Close}
    onIconAfterClick={() => console.log('Remove Chip')}
    disabled
  >
    New
  </Chip>
</div>
```
