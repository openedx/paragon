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

<p className="lead">
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap.github.io/components/overlays#tooltips" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

### Basic Usage

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
