---
title: 'Annotation'
type: 'component'
components:
- Annotation
categories:
- Status & metadata
tabName: 'implementation'
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
notes: |

---

Display informative text related to an object on screen. Unlike the tooltip an annotation is not interactive.

- Don't put links or interactive elements in annotations - use [Popover](/components/popover) instead
- Don’t use annotations if trigger is needed - use [Tooltips](/components/tooltip) instead

## Basic Usage

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

## Referring to other elements

```jsx live
() => {
  const [arrowPlacement, setArrowPlacement] = useState('left')
  const wrapperClass = arrowPlacement === 'top' || arrowPlacement === 'bottom' ? 'flex-column' : '';
  return (
    <>
      {/* start example form block */}
      <ExamplePropsForm
        inputs={[
          { value: arrowPlacement, setValue: setArrowPlacement, options: [
            { name: 'left', value: 'right' },
            { name: 'top', value: 'bottom' },
            { name: 'right', value: 'left' },
            { name: 'bottom', value: 'top' }
          ], name: 'arrowPlacement' },
        ]}
      />
      {/* end example form block */}
        <div className={`d-flex align-items-center justify-content-center ${wrapperClass}`}>
            {(arrowPlacement === 'bottom') && (
                <Annotation arrowPlacement={arrowPlacement}>
                    Annotation on top
                </Annotation>
            )}
            {(arrowPlacement === 'right') && (
                <Annotation arrowPlacement={arrowPlacement}>
                    Annotation on left
                </Annotation>
            )}
            <Button>This is an example button</Button>
            {(arrowPlacement === 'left') && (
                <Annotation arrowPlacement={arrowPlacement}>
                    Annotation on right
                </Annotation>
            )}
            {(arrowPlacement === 'top') && (
                <Annotation arrowPlacement={arrowPlacement}>
                    Annotation on bottom
                </Annotation>
            )}
        </div>
    </>
  )
}

```
