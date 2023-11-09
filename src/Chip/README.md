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

## Clickable Variant

Use `onClick` prop to make the whole `Chip` clickable, this will also add appropriate styles to make `Chip` interactive.

```jsx live
<Chip onClick={() => console.log('Click!')}>Click Me</Chip>
```

## With isSelected prop

```jsx live
<Chip isSelected>New</Chip>
```

## With Icon Before and After
### Basic Usage

Use `iconBefore` and `iconAfter` props to provide icons for the `Chip`, note that you also can provide
accessible names for these icons for screen reader support via `iconBeforeAlt` and `iconAfterAlt` respectively. 

```jsx live
<Stack
  gap={2}
  direction="horizontal"
>
  <Chip iconBefore={Person} iconBeforeAlt="icon-before">Person</Chip>
  <Chip iconAfter={Close} iconAfterAlt="icon-after">Close</Chip>
  <Chip
    iconBefore={Person}
    iconAfter={Close}
    iconAfterAlt="icon-after"
    iconBeforeAlt="icon-before"
  >
    Both
  </Chip>
</Stack>
```

### Clickable icon variant

Provide click handlers for icons via `onIconAfterClick` and `onIconBeforeClick` props. 

```jsx live
<Stack
  gap={2}
  direction="horizontal"
>
  <Chip
    iconBefore={Person}
    iconBeforeAlt="icon-before"
    onIconBeforeClick={() => console.log('onIconBeforeClick')}
  >
    Person
  </Chip>
  <Chip
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
    iconAfterAlt="icon-after"
  >
    Close
  </Chip>
  <Chip
    iconBefore={Person}
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
    onIconBeforeClick={() => console.log('onIconBeforeClick')}
    iconAfterAlt="icon-after"
    iconBeforeAlt="icon-before"
  >
    Both
  </Chip>
  <Chip
    iconBefore={Person}
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
    onIconBeforeClick={() => console.log('onIconBeforeClick')}
    iconAfterAlt="icon-after"
    iconBeforeAlt="icon-before"
    disabled
  >
    Both
  </Chip>
</Stack>
```

**Note**: both `Chip` and its icons cannot be made interactive at the same time, e.g. if you provide both `onClick` and `onIconAfterClick` props,
`onClick` will be ignored and only the icon will get interactive behaviour, see example below (this is done to avoid usability issues where users might click on the `Chip` itself by mistake when they meant to click the icon instead).

```jsx live
<Chip
  iconBefore={Person}
  iconBeforeAlt="icon-before"
  onIconBeforeClick={() => console.log('onIconBeforeClick')}
  onClick={() => console.log('onClick')}
>
  Person
</Chip>
```

### Inverse Pallete

```jsx live
<Stack
  className="bg-dark-700 p-4"
  gap={2}
  direction="horizontal"
>
  <Chip variant="dark" iconBefore={Person} iconBeforeAlt="icon-before">New</Chip>
  <Chip
    variant="dark"
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
    iconAfterAlt="icon-after"
  >
    New 1
  </Chip>
  <Chip
    variant="dark"
    iconAfter={Close}
    onIconAfterClick={() => console.log('onIconAfterClick')}
    iconAfterAlt="icon-after"
    disabled
  >
    New
  </Chip>
</Stack>
```
