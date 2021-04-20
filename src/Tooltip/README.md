---
title: 'Tooltip'
type: 'component'
categories:
- Overlays
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

##### Basic Usage

```jsx live
<>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip id={`tooltip-${placement}`}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button variant="primary" className="mr-2 mb-2">Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</>
```

##### Light version

```jsx live
<div className="bg-dark-700 p-4">
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip variant="tooltip-light" id={`tooltip-${placement}`}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button variant="inverse-outline-brand" className="mr-2 mb-2">Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</div>
```
