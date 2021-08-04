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
  Adds overflow:auto scrolling to wrapped elements. And adds dropshadows when content wrapped within is scrolled up or down

---

### Scrollable area adorned with top and bottom drop shadows on scroll detection

<span>
If the wrapped element specifies a
 height, then scrollable area with shadows constrained to that height.
Shadow is shown on top if you scroll upwards
Shadow is shown on bottom if you scroll downwards

If you don't specify height you will get a default height per the Scrollable component (subject to change)
</span>

#### Demo
```jsx live
<Scrollable>
<div style={{'height':'60vh'}}>
  <p>Do not use overflow in wrapped component, Scrollable provides overflow:auto around wrapped element</p>
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
