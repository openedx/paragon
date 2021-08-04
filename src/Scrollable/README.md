---

title: 'Scrollable'
type: 'component'
components:
- Scrollable
categories:
- Content
status: 'New'
designStatus: 'In Progress'
devStatus: 'In Progress'
notes: |
  Adds dropshadows when content wrapped within is scrolled up or down

---

### Scrollable area adornment with top and bottom drop shadows

<p>
If the wrapped element specifies a height, then scrollable area with shadows constrained to that height.
Shadow is shown on top if you scroll upwards
Shadow is shown on bottom if you scroll downwards

If you don't specify height you will get a default height per the Scrollable component (subject to change)
</p>

#### Demo
```jsx live
<Scrollable>
<div style={{'height':'60vh'}}>
  <p>Use overflow-y:auto if you want scrolling, in this content component</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  <p>A very long scrollable Content.</p>
  </div>
</Scrollable>
```
