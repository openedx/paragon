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

## Scrollable area adorned with top and bottom drop shadows on scroll detection

<span>
Shadow is shown on top if you scroll upwards
Shadow is shown on bottom if you scroll downwards

If you don't specify height you will get a default height per the Scrollable component (subject to change)
</span>

## Basic usage of scrollable with provided height

```jsx live
<Scrollable id="test" style={{ height: '40vh' }}>
  <p>
    Do not use overflow in wrapped component, Scrollable provides overflow:auto
    around wrapped element
  </p>
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
</Scrollable>
```

## With padding used by consumer

```jsx live
<Scrollable style={{ height: '40vh' }}>
  <div className="p-4">
    <p>
      Do not use overflow in wrapped component, Scrollable provides
      overflow:auto around wrapped element
    </p>
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
