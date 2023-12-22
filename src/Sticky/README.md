---
title: 'Sticky'
type: 'component'
components:
- Sticky
categories:
- Content
tabName: 'implementation'
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
notes: |
---

Makes elements remain at the top or bottom of the viewport, like a sticky navbar.

## Basic Usage

### Top positioning

```jsx live
<div style={{ display: 'flex', width: '100%', height: '400px', border: '2px dashed grey' }}>
  <Sticky>
    <div style={{ background: '#0000aa', width: '100%', height: '150px', color: '#ffffff'}}>
      Sticky to the top
    </div>
  </Sticky>
</div>
```

### Bottom positioning

```jsx live
<div style={{ display: 'flex', width: '100%', height: '400px', border: '2px dashed grey' }}>
  <Sticky position="bottom">
    <div style={{ background: '#aa0000', width: '100%', height: '150px', color: '#ffffff' }}>
      Sticky to the bottom
    </div>
  </Sticky>
</div>
```

### With offset

Valid `offset` values are the same as for [the spacing classes](/foundations/spacing).

```jsx live
<div style={{ display: 'flex', width: '100%', height: '400px', border: '2px dashed grey' }}>
  <Sticky offset={3.5}>
    <div style={{ background: '#00aa00', width: '100%', height: '150px', color: '#ffffff' }}>
      Sticky with offset
    </div>
  </Sticky>
</div>
```
