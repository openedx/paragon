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

## `Chip` Carousel

```jsx live
<OverflowScroll ariaLabel="example chip carousel" hasInteractiveChildren>
  <OverflowScrollContext.Consumer>
    {({
      setOverflowRef,
      isScrolledToStart,
      isScrolledToEnd,
      scrollToPrevious,
      scrollToNext,
    }) => (
      <>
        <div className="mb-3">
          <Button
            onClick={scrollToPrevious}
            className="mr-2"
            size="sm"
            disabled={isScrolledToStart}
          >
            Previous
          </Button>
          <Button
            onClick={scrollToNext}
            size="sm"
            disabled={isScrolledToEnd}
          >
            Next
          </Button>
        </div>
        <div ref={setOverflowRef} className="d-flex">
          <OverflowScroll.Items>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
            <Chip iconAfter={Close}>New</Chip>
          </OverflowScroll.Items>
        </div>
      </>
    )}
  </OverflowScrollContext.Consumer>
</OverflowScroll>
```
