---
title: 'Icon'
type: 'component'
components:
- Icon
categories:
- Imagery & Iconography
status: 'Reassessing'
designStatus: 'TBD'
devStatus: 'TBD'
notes: 'Reconcile purpose of this component with use of FontAwesome'
---

Displays an svg icon from `@edx/paragon/icons`. See [Icons Foundation Documentation](/foundations/icons) for a list of all available icons.

```jsx live
// Included in this live jsx scope:
// import { Add, AddCircle } from '@edx/paragon/icons';
<Icon src={Add} />
```

HTML attributes can be passed to this component allowing for customization of the color, size, or addition of any necessary ARIA attributes.

```jsx live
// Included in this live jsx scope:
// import { Add, AddCircle } from '@edx/paragon/icons';
<div className="d-flex align-items-center bg-dark">
  <Icon src={Add} className="mx-3 text-white" />
  <Icon src={Add} className="text-white" style={{ height: '48px', width: '48px' }} />
</div>
```
