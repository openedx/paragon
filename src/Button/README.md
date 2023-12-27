---
title: 'Button'
type: 'component'
components:
- Button
categories:
- Buttonlike
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
---

This component utilizes `Button` from React-Bootstrap and extends it with an ability to add icons before and after button label, see [below](#with-icons-before-or-after) for usage example.<br/> <a href="https://react-bootstrap-v4.netlify.app/components/buttons/" target="_blank" rel="noopener noreferrer"> See React-Bootstrap for additional documentation. </a>

## Core Buttons

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.medium.maxWidth });

  return (
    <Stack gap={2} direction={ isExtraSmall ? "vertical" : "horizontal" }>
      <Button variant="brand">Brand</Button>
      <Button variant="outline-brand">Outline Brand</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="outline-primary">Outline Primary</Button>
      <Button variant="tertiary">Tertiary</Button>
    </Stack>
)}
```

## Core Buttons (Inverse Pallete)

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.medium.maxWidth });

  return (
    <Stack
      className="bg-dark-700 p-4"
      gap={2}
      direction={ isExtraSmall ? "vertical" : "horizontal" }
    >
      <Button variant="inverse-brand">Brand</Button>
      <Button variant="inverse-outline-brand">Outline Brand</Button>
      <Button variant="inverse-primary">Primary</Button>
      <Button variant="inverse-outline-primary">Outline Primary</Button>
      <Button variant="inverse-tertiary">Tertiary</Button>
    </Stack>
)}
```

## Utility Buttons

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <>
      <Stack
        className="mb-2"
        gap={2}
        direction={ isExtraSmall ? "vertical" : "horizontal" }
      >
        <Button variant="success">Success</Button>
        <Button variant="danger">Danger</Button>
        <Button variant="outline-success">Success</Button>
        <Button variant="outline-danger">Danger</Button>
      </Stack>
      <Stack
        gap={2}
        direction={ isExtraSmall ? "vertical" : "horizontal" }
      >
        <Button variant="link">Link</Button>
        <Button variant="light">Light</Button>
        <Button variant="dark">Dark</Button>
        <Button variant="outline-light">Light</Button>
        <Button variant="outline-dark">Dark</Button>
      </Stack>
    </>
)}
```

## Size

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <>
      <Stack
        className="mb-2"
        gap={2}
        direction={ isExtraSmall ? "vertical" : "horizontal" }
      >
        <Button variant="primary" size="lg">
          Large button
        </Button>
        <Button variant="outline-primary" size="lg">
          Large button
        </Button>
      </Stack>
      <Stack
        className="mb-2"
        gap={2}
        direction={ isExtraSmall ? "vertical" : "horizontal" }
      >
        <Button variant="primary" size="sm">
          Small button
        </Button>
        <Button variant="outline-primary" size="sm">
          Small button
        </Button>
      </Stack>
      <Stack
        className="mb-2"
        gap={2}
        direction={ isExtraSmall ? "vertical" : "horizontal" }
      >
        <Button variant="link" size="inline">Inline button</Button>
        <Button variant="link" size="inline">Inline button</Button>
      </Stack>
    </>
  )
}
```

### When to use the inline size

Use inline size buttons for when a button sits with a line of text.

```jsx live
<p>
  <span className="mr-1">2 items selected.</span>
  <Button variant="link" size="inline" className="mr-1">Select all</Button>
  <Button variant="link" size="inline">Clear</Button>
</p>
```

## Block Buttons

```jsx live
<>
  <Button variant="primary" size="lg" block>
    Block level button
  </Button>
  <Button variant="secondary" size="lg" block>
    Block level button
  </Button>
</>
```

### Disabled

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Stack
      className="mb-2"
      gap={2}
      direction={ isExtraSmall ? "vertical" : "horizontal" }
    >
      <Button variant="primary" disabled>Primary disabled</Button>
      <Button variant="secondary" disabled>Secondary disabled</Button>
      <Button as="a" href="https://edx.org" disabled>Link disabled</Button>
    </Stack>
    )
}
```

### With empty href
For link to be `disabled`, it must have href defined with some value.

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Stack
      className="mb-2"
      gap={2}
      direction={ isExtraSmall ? "vertical" : "horizontal" }
    >
      <Button as="a" disabled>No href</Button>
      <Button as="a" href="" disabled>Empty string href</Button>
    </Stack>
  )
}
```

### With Icons before or after

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.large.maxWidth });

  return (
    <Stack
      className="mb-2"
      gap={2}
      direction={ isExtraSmall ? "vertical" : "horizontal" }
    >
      <Button variant="brand" iconBefore={ArrowBack}>
        Brand
      </Button>
      <Button variant="outline-brand" iconAfter={ArrowDropDown}>
        Outline Brand
      </Button>
      <Button variant="primary" iconBefore={Remove} iconAfter={Add}>
        Primary
      </Button>
      <Button variant="outline-primary" iconBefore={Highlight}>
        Outline Primary
      </Button>
      <Button variant="tertiary" iconAfter={Add}>
        Tertiary
      </Button>
    </Stack>
  )
}
```

## Stateful buttons
To implement loading state using a `Button` component, the [StatefulButton](https://paragon-openedx.netlify.app/components/statefulbutton/) component
is available for use. <br/>
This specialized component is designed to seamlessly manage and display boot states, providing a more efficient and 
user-friendly experience.
