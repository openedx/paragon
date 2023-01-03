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

## With icon before and after

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

## ChipCarousel

```jsx live
<OverflowScroll childQuerySelector={`.${CHIP_PGN_CLASS}`} hasInteractiveChildren>
  <OverflowScrollContext.Consumer>
    {({
      overflowRef,
      isOverflowElementVisible,
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
            disabled={isScrolledToStart || !isOverflowElementVisible}
          >
            Previous
          </Button>
          <Button
            onClick={scrollToNext}
            size="sm"
            disabled={isScrolledToEnd || !isOverflowElementVisible}
          >
            Next
          </Button>
        </div>
        <div ref={overflowRef} className="d-flex" style={{ paddingLeft: 1, paddingRight: 1 }}>
          <OverflowScroll.StartSentinel />
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
          <OverflowScroll.EndSentinel />
        </div>
      </>
    )}
  </OverflowScrollContext.Consumer>
</OverflowScroll>
```
