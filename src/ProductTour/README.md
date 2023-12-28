---
title: 'ProductTour'
type: 'component'
components:
  - ProductTour
categories:
  - Overlays
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
---

`ProductTour` displays a sequence of checkpoints with anchors around the DOM.
A `ProductTour` takes a list of tour objects and will only support one enabled tour at a time. If multiple
tours are enabled, `ProductTour` will only render the first enabled in the `tours` list.

`Checkpoints` are rendered in the order they're listed in the checkpoint array.
The checkpoint objects themselves have additional props that can override the props defined in `ProductTour`.

## Basic Usage

```jsx live
() => {
  const [isTourEnabled, setIsTourEnabled] = useState(false);
  const myFirstTour = {
    tourId: 'myFirstTour',
    advanceButtonText: 'Next',
    dismissButtonText: 'Dismiss',
    endButtonText: 'Okay',
    enabled: isTourEnabled,
    onDismiss: () => setIsTourEnabled(false),
    onEnd: () => setIsTourEnabled(false),
    checkpoints: [
      {
        advanceButtonText: 'Onward', // Override the default advanceButtonText above
        body: "Here's the first checkpoint!",
        placement: 'top',
        target: '#checkpoint-1',
        title: 'First checkpoint',
      },
      {
        body: "Here's the second checkpoint!",
        onDismiss: () => {
          console.log('Dismissed the second checkpoint');
          setIsTourEnabled(false);
        }, // Override the default onDismiss above
        placement: 'right',
        target: '#checkpoint-2',
        title: 'Second checkpoint',
      },
      {
        body: "Here's the third checkpoint!",
        placement: 'bottom',
        target: '#checkpoint-3',
        title: 'Third checkpoint',
        onEnd: () => {
          console.log('Ended the third checkpoint');
          setIsTourEnabled(false);
        }, // Additional logic for the onEnd callback to be called on the last checkpoint
      },
    ],
  };

  return (
    <>
      <ProductTour tours={[myFirstTour]} />
      <Button onClick={() => setIsTourEnabled(true)}>Open a product tour</Button>
      <Row className="w-100 m-0 mt-3 p-2 justify-content-around">
        <div id="checkpoint-1">
          <Icon src={Check} />
        </div>
        <div id="checkpoint-2">
          <Icon src={Check} />
        </div>
        <div id="checkpoint-3">
          <Icon src={Check} />
        </div>
      </Row>
    </>
  );
};
```
