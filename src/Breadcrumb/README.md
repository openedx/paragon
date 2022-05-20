---
title: 'Breadcrumbs'
type: 'component'
components:
- Breadcrumb
categories:
- Navigation
status: 'Needs Work'
designStatus: 'DONE'
devStatus: 'To Do'
notes: |
  Replace with react-bootstrap shim
---

Use as a secondary navigation pattern to help convey hierarchy and enable navigation.

### Basic Usage

```jsx live
<Breadcrumb ariaLabel="Breadcrumb basic"
  links={[
    { label: 'Link 1', url: '#link-1' },
    { label: 'Link 2', url: '#link-2' },
    { label: 'Link 3', url: '#link-3' },
  ]}
/>
```

### Basic Usage (Mobile View)

```jsx live
<Breadcrumb ariaLabel="Breadcrumb mobile view"
  links={[
    { label: 'Link 1', url: '/link-1' },
    { label: 'Link 2', url: '/link-2' },
    { label: 'Link 3', url: '/link-3' },
  ]}
  isMobile
/>
```

### Basic Usage (Inverse Pallete)

```jsx live
<div className="bg-dark-700 p-4">
  <Breadcrumb ariaLabel="Breadcrumb inverse pallete"
    links={[
      { label: 'Link 1', url: '/link-1' },
      { label: 'Link 2', url: '/link-2' },
      { label: 'Link 3', url: '/link-3' },
    ]}
    variant="dark"
  />
</div>
```

### With active label

```jsx live
<Breadcrumb ariaLabel="Breadcrumb is active"
  links={[
    { label: 'Link 1', url: '#link-1' },
    { label: 'Link 2', url: '#link-2' },
    { label: 'Link 3', url: '#link-3' },
  ]}
  activeLabel="Link 4"
/>
```

### With custom spacer

```jsx live
<Breadcrumb ariaLabel="Breadcrumb custom spacer"
  links={[
    { label: 'Link 1', url: '#link-1' },
    { label: 'Link 2', url: '#link-2' },
    { label: 'Link 3', url: '#link-3' },
  ]}
  spacer={<span className="custom-spacer">/</span>}
/>
```
