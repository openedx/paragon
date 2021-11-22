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
<Breadcrumb
  links={[
    { label: 'Link 1', url: '#link-1' },
    { label: 'Link 2', url: '#link-2' },
    { label: 'Link 3', url: '#link-3' },
  ]}
/>
```

### Basic Usage (Mobile View)

```jsx live
<Breadcrumb
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
  <Breadcrumb
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
<Breadcrumb
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
<Breadcrumb
  links={[
    { label: 'Link 1', url: '#link-1' },
    { label: 'Link 2', url: '#link-2' },
    { label: 'Link 3', url: '#link-3' },
  ]}
  spacer={<span className="custom-spacer">/</span>}
/>
```

### Theme variables (SCSS)

```scss
$breadcrumb-font-size:              null !default;

$breadcrumb-padding-y:              .75rem !default;
$breadcrumb-padding-x:              1rem !default;
$breadcrumb-item-padding:           .5rem !default;

$breadcrumb-margin-bottom:          1rem !default;

$breadcrumb-bg:                     $gray-200 !default;
$breadcrumb-divider-color:          $gray-600 !default;
$breadcrumb-active-color:           $gray-500 !default;
$breadcrumb-divider:                quote("/") !default;

$breadcrumb-border-radius:          $border-radius !default;
```