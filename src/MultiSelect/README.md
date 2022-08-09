---
title: 'MultiSelect'
type: 'component'
components:
- MultiSelect
categories:
- Forms
- Content
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

A dropdown menu that enables selection of multiple values.

### Basic Usage

```jsx live
<MultiSelect
  data={[
    { value: 'Calico', label: 'Calico Cat', },
    { value: 'Norwegian', label: 'Norwegian Forest Cat', },
    { value: 'Scottish Fold', label: 'Scottish Fold', selected: true },
  ]}
  value="Scottish Fold"
  disabled={false}
/>
```
