---
title: 'ChipCarousel'
type: 'component'
components:
- ChipCarousel
categories:
- Content
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

``ChipCarousel`` component creates a scrollable horizontal block of chips with buttons for navigating to the previous and next set of chips.

## Basic Usage

```jsx live
  <ChipCarousel
    ariaLabel="example chip carousel"
    items={Array.from({ length: 40 },
      (_, index) => ({
        id: index,
        title: `Chip #${index + 1}`,
        onClick: () => console.log(`Chip #${index + 1} clicked`)
      })
    )}
  />
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
