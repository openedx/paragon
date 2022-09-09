---
title: 'Layout'
type: 'component'
components:
- Layout
categories:
- Layout
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
---

A wrapper component that allows to control the size of child blocks on different screen sizes.

## Basic usage

```jsx live
  <Layout
    lg={{ span: [4, 4, 4], offset: [0, 0, 0] }}
    md={{ span: ['auto', 'auto', 'auto'], offset: [0, 0, 0] }}
    sm={{ span: [8, 4, 6], offset: [0, 0, 6] }}
    xs={{ span: [4, 4, 4], offset: [0, 0, 0] }}
    xl={{ span: [3, 6, 3] }}
  >
    <Layout.Element style={{ background: 'red' }}>first block</Layout.Element>
    <Layout.Element style={{ background: 'green' }}>second block</Layout.Element>
    <Layout.Element style={{ background: 'blue' }}>third block</Layout.Element>
  </Layout>
```
