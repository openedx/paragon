---
title: 'Icon'
type: 'component'
components:
- Icon
categories:
- Imagery & Iconography
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

Displays an svg icon from `@edx/paragon/icons`. See [Icons Foundation Documentation](/foundations/icons) for a list of all available icons.

## Basic Usage

```jsx live
// Included in this live jsx scope:
// import { Add, AddCircle } from '@edx/paragon/icons';
<Icon src={Add} />
```
### With HTML attributes

HTML attributes can be passed to this component allowing for customization of the color, size, or addition of any necessary ARIA attributes.

```jsx live
// Included in this live jsx scope:
// import { Add, AddCircle } from '@edx/paragon/icons';
<div className="d-flex align-items-center bg-dark">
  <Icon src={Add} className="mx-3 text-white" />
  <Icon src={Add} className="mx-3 text-white" size="xs" />
  <Icon src={Add} className="mx-3 text-white" size="sm" />
  <Icon src={Add} className="mx-3 text-white" size="md" />
  <Icon src={Add} className="mx-3 text-white" size="lg" />
  <Icon src={Add} className="text-white" style={{ height: '48px', width: '48px' }} />
</div>
```
