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
notes: |
  TODO: Remove subcomponent of deprecated implementation soon
---

This component utilizes `Button` from React-Bootstrap and extends it with an ability to add icons before and after button label, see [below](#with-icons-before-or-after) for usage example.<br/> <a href="https://react-bootstrap.github.io/components/buttons/" target="_blank" rel="noopener noreferrer"> See React-Bootstrap for additional documentation. </a>

## Core Buttons

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.medium.maxWidth });

  return (
    <Stack gap={2} direction={ isExtraSmall ? "vertical" : "horizontal" }>
      <Button variant="brand" className="mb-2 mb-sm-0">Brand</Button>
      <Button variant="outline-brand" className="mb-2 mb-sm-0">Outline Brand</Button>
      <Button variant="primary" className="mb-2 mb-sm-0">Primary</Button>
      <Button variant="outline-primary" className="mb-2 mb-sm-0">Outline Primary</Button>
      <Button variant="tertiary" className="mb-2 mb-sm-0">Tertiary</Button>
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
      <Button variant="inverse-brand" className="mb-2 mb-sm-0">Brand</Button>
      <Button variant="inverse-outline-brand" className="mb-2 mb-sm-0">Outline Brand</Button>
      <Button variant="inverse-primary" className="mb-2 mb-sm-0">Primary</Button>
      <Button variant="inverse-outline-primary" className="mb-2 mb-sm-0">Outline Primary</Button>
      <Button variant="inverse-tertiary" className="mb-2 mb-sm-0">Tertiary</Button>
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
        <Button variant="success" className="mb-2 mb-sm-0">Success</Button>
        <Button variant="danger" className="mb-2 mb-sm-0">Danger</Button>
        <Button variant="outline-success" className="mb-2 mb-sm-0">Success</Button>
        <Button variant="outline-danger" className="mb-2 mb-sm-0">Danger</Button>
      </Stack>
      <Stack
        gap={2}
        direction={ isExtraSmall ? "vertical" : "horizontal" }
      >
        <Button variant="link" className="mb-2 mb-sm-0">Link</Button>
        <Button variant="light" className="mb-2 mb-sm-0">Light</Button>
        <Button variant="dark" className="mb-2 mb-sm-0">Dark</Button>
        <Button variant="outline-light" className="mb-2 mb-sm-0">Light</Button>
        <Button variant="outline-dark" className="mb-2 mb-sm-0">Dark</Button>
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
          <Button variant="primary" size="lg" className="mb-2 mb-sm-0">
            Large button
          </Button>
          <Button variant="outline-primary" size="lg" className="mb-2 mb-sm-0">
            Large button
          </Button>
        </Stack>
        <Stack
          className="mb-2"
          gap={2}
          direction={ isExtraSmall ? "vertical" : "horizontal" }
        >
          <Button variant="primary" size="sm" className="mb-2 mb-sm-0">
            Small button
          </Button>
          <Button variant="outline-primary" size="sm" className="mb-2 mb-sm-0">
            Small button
          </Button>
        </Stack>
        <Button variant="link" size="inline" className="mb-2 mb-sm-0">Inline button</Button>
        <Button variant="link" size="inline" className="mb-2 mb-sm-0">Inline button</Button>
    </>
)}
```

### When to use the inline size

Use inline size buttons for when a button sits with a line of text.

```jsx live
<>
  <p>
    <span className="mr-1">2 items selected.</span>
    <Button variant="link" size="inline" className="mr-1">Select all</Button>
    <Button variant="link" size="inline">Clear</Button>
  </p>
</>
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
<>
  <Button variant="primary" disabled>Primary disabled</Button>
  <Button variant="secondary" disabled>Secondary disabled</Button>
  <Button as="a" href="https://edx.org" disabled>Link disabled</Button>
</>
```

### With empty href
For link to be `disabled`, it must have href defined with some value.

```jsx live
<>
  <Button as='a' disabled>No href</Button>
  <Button as='a' href='' disabled>Empty string href</Button>
</>
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
      <Button variant="brand" iconBefore={ArrowBack} className="mb-2 mb-sm-0">
        Brand
      </Button>
      <Button variant="outline-brand" iconAfter={ArrowDropDown} className="mb-2 mb-sm-0">
        Outline Brand
      </Button>
      <Button variant="primary" iconBefore={Remove} iconAfter={Add} className="mb-2 mb-sm-0">
        Primary
      </Button>
      <Button variant="outline-primary" iconBefore={Highlight} className="mb-2 mb-sm-0">
        Outline Primary
      </Button>
      <Button variant="tertiary" iconAfter={Add} className="mb-2 mb-sm-0">
        Tertiary
      </Button>
    </Stack>
)}
```

### With a Spinner

```jsx live
<>
  <Button variant="primary" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="brand" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="outline-primary" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="outline-brand" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="inverse-primary" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
  <Button variant="inverse-brand" className="mb-2 mr-2 mb-sm-0" aria-label="Loading some stuff">
    <Spinner animation="border" />
  </Button>
</>
```
