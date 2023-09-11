---
title: 'Breadcrumb'
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

## Basic Usage

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Breadcrumb ariaLabel="Breadcrumb basic"
      links={[
        { label: 'Link 1', href: '#link-1' },
        { label: 'Link 2', href: '#link-2' },
        { label: 'Link 3', href: '#link-3' },
      ]}
      isMobile={isExtraSmall}
    />
  )
}
```

### Basic Usage (Mobile View)

```jsx live
<Breadcrumb ariaLabel="Breadcrumb mobile view"
  links={[
    { label: 'Link 1', href: '/link-1' },
    { label: 'Link 2', href: '/link-2' },
    { label: 'Link 3', href: '/link-3' },
  ]}
  isMobile
/>
```

### Basic Usage (Inverse Palette)

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <div className="bg-dark-700 p-4">
      <Breadcrumb ariaLabel="Breadcrumb inverse pallete"
        links={[
          {label: 'Link 1', href: '/link-1'},
          {label: 'Link 2', href: '/link-2'},
          {label: 'Link 3', href: '/link-3'},
        ]}
        variant="dark"
        isMobile={isExtraSmall}
      />
    </div>
  )
}
```

## With custom link element

By default `Breadcrumb` uses `a` tag to render breadcrumbs, which may not always suit your needs. 
This behaviour can be customized with `linkAs` prop, the example below uses Gatsby's `Link` component, but it would also work with [react-router's `Link`](https://reactrouter.com/en/main/components/link) component as well because they share required parts of the component API.

Note that `links` list contains objects with different keys compared to the example above, specifically `href` key is replaced with `to`, that's because Gatsby's `Link` expects its destination to be set through `to` prop (same as react-router's `Link`), internally `Breadcrumb` passes down these objects (except `label` attribute) as props to the `linkAs` element. 

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Breadcrumb ariaLabel="Breadcrumb basic"
      links={[
        { label: 'Home', to: '/' },
        { label: 'CSS Utilities', to: '/foundations/css-utilities' },
      ]}
      isMobile={isExtraSmall}
      linkAs={GatsbyLink}
    />
  )
}
```

## With active label

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Breadcrumb ariaLabel="Breadcrumb is active"
      links={[
        { label: 'Link 1', href: '#link-1' },
        { label: 'Link 2', href: '#link-2' },
        { label: 'Link 3', href: '#link-3' },
      ]}
      activeLabel="Link 4"
      isMobile={isExtraSmall}
    />
  )
}
```

## With custom spacer

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Breadcrumb ariaLabel="Breadcrumb custom spacer"
      links={[
        { label: 'Link 1', href: '#link-1' },
        { label: 'Link 2', href: '#link-2' },
        { label: 'Link 3', href: '#link-3' },
      ]}
      spacer={<span className="custom-spacer">/</span>}
      isMobile={isExtraSmall}
    />
  )
}
```
