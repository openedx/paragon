---
title: 'Chip'
type: 'component'
components:
- Chip
categories:
- Buttonlike
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

``Chips`` are compact elements that represent an input, attribute, or action. Similar to the [Badge](/components/badge) component, but interactive.

## Basic Usage

```jsx live
<Stack
  gap={2}
  direction="horizontal"
>
  <Chip>New</Chip>
  <Chip disabled>New</Chip>
</Stack>
```

## With isSelected prop

```jsx live
<Stack
  gap={2}
  direction="horizontal"
>
  <Chip isSelected>New</Chip>
  <Chip
    isSelected
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
  >
    New
  </Chip>
</Stack>
```

## With Icon Before and After
### Basic Usage

```jsx live
<Stack
  gap={2}
  direction="horizontal"
>
  <Chip iconBefore={Person}>New</Chip>
  <Chip
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
  >
    New 1
  </Chip>
  <Chip
    iconBefore={Person}
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
    disabled
  >
    New
  </Chip>
</Stack>
```

### Inverse Pallete

```jsx live
<Stack
  className="bg-dark-700 p-4"
  gap={2}
  direction="horizontal"
>
  <Chip variant="dark" iconBefore={Person}>New</Chip>
  <Chip
    variant="dark"
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
  >
    New 1
  </Chip>
  <Chip
    variant="dark"
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
    disabled
  >
    New
  </Chip>
</Stack>
```
