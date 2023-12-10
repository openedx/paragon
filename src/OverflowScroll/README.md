---
title: 'OverflowScroll'
type: 'component'
components:
- OverflowScroll
categories:
- Content
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

A set of React components that encapsulates the logic from [`useOverflowScroll`](/components/overflowscroll/useoverflowscroll) for building carousel-like UI components:
* `OverflowScroll`
* `OverflowScroll.Items`

## Sample Usage

The following example demonstrates how to use `OverflowScroll` and `OverflowScroll.Items` to build carousel-like UI components.

```jsx live
() => {
  const ExampleItem = ({ className }) => (
    <div
      className={classNames('example-item border flex-shrink-0 text-center', className)}
      style={{ width: 160 }}
    >
      Item
    </div>
  );

  const OverflowScrollContent = () => {
    const { overflowRef, setOverflowRef } = useContext(OverflowScrollContext);
    return (
      <div
        ref={setOverflowRef}
        className="d-flex"
      >
        <OverflowScroll.Items>{items}</OverflowScroll.Items>
      </div>
    );
  };

  const OverflowScrollControls = () => {
    const {
      isScrolledToStart,
      isScrolledToEnd,
      scrollToPrevious,
      scrollToNext,
    } = useContext(OverflowScrollContext);

    return (
      <div className="mb-3">
        <Button
          onClick={scrollToPrevious}
          disabled={isScrolledToStart}
          size="sm"
          className="mr-2"
        >
          Previous
        </Button>
        <Button
          onClick={scrollToNext}
          disabled={isScrolledToEnd}
          size="sm"
        >
          Next
        </Button>
      </div>
    );
  };

  const itemCount = 20;
  const items = useMemo(() => Array.from({ length: itemCount }).map((index) => {
    if (index !== itemCount - 1) {
      return <ExampleItem key={uuidv4()} className="mr-2" />;
    }
    // last element, no right margin
    return <ExampleItem key={uuidv4()} />;
  }), [itemCount]);

  return (
    <OverflowScroll ariaLabel="example overflow scroll usage">
      <OverflowScrollControls />
      <OverflowScrollContent />
    </OverflowScroll>
  );
};
```
