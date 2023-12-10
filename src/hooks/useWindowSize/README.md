---
title: 'useWindowSize'
type: 'hook'
categories:
- Hooks
components:
- useWindowSize
tabName: 'implementation'
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

## Sample Usage

<p>Change the screen size to see the effect.</p>

```jsx live
() => {
  const { height, width } = useWindowSize();
  return (
    <p>
      Window height: {height}px<br/>
      Window width: {width}px
    </p>
  );
}
```
