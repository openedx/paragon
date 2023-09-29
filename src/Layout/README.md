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

A wrapper component that allows to control the size of child blocks on different screen sizes. It is a shorthand for the grid system (12 columns). Also see [Layout](/foundations/layout) foundations.

## Basic usage

```jsx live
  <Layout
    lg={[{ span: 4, offset: 0 }, { span: 4, offset: 0 }, { span: 4, offset: 0 }]}
    md={[{ span: 'auto', offset: 0 }, { span: 'auto', offset: 0 }, { span: 'auto', offset: 0 }]}
    sm={[{ span: 8, offset: 0 }, { span: 4, offset: 0 }, { span: 6, offset: 6 }]}
    xs={[{ span: 4, offset: 0 }, { span: 4, offset: 0 }, { span: 4, offset: 0 }]}
    xl={[{ span: 3 }, { span: 6 }, { span: 3 }]}
  >
    <Layout.Element style={{ background: '#FFD89E' }}>first block</Layout.Element>
    <Layout.Element style={{ background: '#4CAF50' }}>second block</Layout.Element>
    <Layout.Element style={{ background: '#FFEB3B' }}>third block</Layout.Element>
  </Layout>
```
