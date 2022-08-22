---
title: 'Stack'
type: 'component'
components:
- Stack
categories:
- Layout
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
notes: |
---

Shorthand helpers that build on top of our flexbox utilities to make component layout faster and easier than ever. Similar to the [Boostrap Stack](https://react-bootstrap.github.io/layout/stack/) component.

## Basic Usage

## Vertical direction

Stacks are vertical by default and stacked items are full-width by default. Watch this pull request to see more details about the [auto stretching behavior](https://github.com/openedx/paragon/pull/1188).

```jsx live
<Stack gap={3}>
  <Button>first button</Button>
  <Button>second button</Button>
  <Button>third button</Button>
</Stack>
```

## Horizontal direction

```jsx live
<Stack direction="horizontal" gap={3}>
  <div className="border p-2">first block</div>
  <div className="border p-2">second block</div>
  <div className="border p-2">third block</div>
</Stack>
```
