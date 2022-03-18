---
title: 'Annotation'
type: 'component'
components:
- Annotation
categories:
- Status & metadata
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
notes: |

---

Display informative text related to an object on screen. Unlike the tooltip an annotation is not interactive.

- Don't put links or interactive elements in annotations - use [Popover](/components/popover) instead
- Don’t use annotations if trigger is needed - use [Tooltips](/components/tooltip) instead

### Basic Usage

```jsx live
<>
  <Annotation>
    Success variant
  </Annotation>
  <Annotation 
    variant="dark"
    arrowPlacement="left"
    className="mie-2 mb-2"
  >
    Dark variant
  </Annotation>
  <Annotation 
    variant="error" 
    arrowPlacement="top"
    className="mie-2 mb-2"
  >
    Error variant
  </Annotation>
  <Annotation
    variant="warning"
    arrowPlacement="right" 
    className="mb-2"
  >
    Warning variant
  </Annotation>
  <Annotation
    variant="light"
    className="mb-2"
  >
    Light variant. By default max width is set to 300px with wrapping text.
  </Annotation>
</>
```

### Referring to other elements

```jsx live
<>
  <div className="d-flex justify-content-around mb-4">
    <div className="d-flex flex-column align-items-center">
      <Annotation>
        Annotation on top
      </Annotation>
      <Button>This is an example button</Button>
    </div>
    <div className="d-flex align-items-center">	
      <Button>This is an example button</Button>
      <Annotation arrowPlacement='left'>
        Annotation on right
      </Annotation>
    </div>
  </div>
  <div className="d-flex justify-content-around">
    <div className="d-flex align-items-center">
      <Annotation arrowPlacement='right'>
        Annotation on left
      </Annotation>
      <Button>This is an example button</Button>
    </div>
    <div className="d-flex flex-column align-items-center">
      <Button>This is an example button</Button>
      <Annotation arrowPlacement='top'>
        Annotation on bottom
      </Annotation>
    </div>
  </div>
</>
```

<guide
  selectors="`pgn__annotation`"
/>
