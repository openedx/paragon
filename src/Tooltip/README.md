---
title: 'Tooltip'
type: 'component'
components:
- Tooltip
categories:
- Overlays
tabName: 'implementation'
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

`Tooltips` display informative text when users hover over, focus on, or tap an element.

## Basic Usage

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

## Light version

```jsx live
<div className="bg-dark-700 p-4">
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip variant="light" id={`tooltip-${placement}`}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button variant="inverse-outline-brand" className="mr-2 mb-2">Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</div>
```
