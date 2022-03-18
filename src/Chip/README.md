---
title: 'Chip'
type: 'component'
components:
- Chip
categories:
- Buttonlike
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
notes: |
---

``Chips`` are compact elements that represent an input, attribute, or action. Similar to the [Badge](/components/badge) component, but interactive.

### Basic Usage

```jsx live
<div>
  <Chip>New</Chip>
  <Chip active>New</Chip>
  <Chip disabled>New</Chip>
  <Chip variant="dark">New</Chip>
</div>
```

### With icon before and remove icon

```jsx live
<div>
  <Chip iconBefore={Person}>New</Chip>
  <Chip variant="dark" iconBefore={Person} iconAfter={CloseSmall}>New</Chip>
  <Chip variant="dark" iconBefore={Person} iconAfter={CloseSmall} disabled>New</Chip>
</div>
```

<guide
  events="`onClick`"
  dataTestId
  selectors="`pgn__chip`"
/>
