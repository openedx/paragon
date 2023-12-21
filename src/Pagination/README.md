---
title: 'Pagination'
type: 'component'
components:
  - Pagination
  - PaginationReduced
categories:
  - Navigation
status: 'Needs Work'
designStatus: 'Done'
devStatus: 'To Do'
notes: |
  TODO: shim from react-bootstrap
  Breaks if given 5000 pages.
  Overly complex implementation.
  Remove baked in english strings
---

Navigation between multiple pages of some set of results. Controls are provided to navigate through multiple pages of related data.

## Basic usage (Default Size)

```jsx live
<Pagination paginationLabel="pagination navigation" pageCount={20} onPageSelect={() => console.log('page selected')} />
```

## Secondary

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  variant="secondary"
  onPageSelect={() => console.log('page selected')}
/>
```

## Reduced

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  variant="reduced"
  onPageSelect={() => console.log('page selected')}
/>
```

## Minimal

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={5}
  variant="minimal"
  onPageSelect={() => console.log('page selected')}
/>
```

## Basic usage (Small Size)

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  size="small"
  onPageSelect={() => console.log('page selected')}
/>
```

## Secondary (Small Size)

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  variant="secondary"
  size="small"
  onPageSelect={() => console.log('page selected')}
/>
```

## Reduced (Small Size)

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  variant="reduced"
  size="small"
  onPageSelect={() => console.log('page selected')}
/>
```

## Minimal (Small Size)

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={5}
  variant="minimal"
  size="small"
  onPageSelect={() => console.log('page selected')}
/>
```

## Inverse Pallete (Default Size)

```jsx live
<div className="bg-dark-700 p-4">
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={20}
    invertColors
    onPageSelect={() => console.log('page selected')}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={20}
    invertColors
    variant="reduced"
    onPageSelect={() => console.log('page selected')}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={5}
    invertColors
    variant="minimal"
    onPageSelect={() => console.log('page selected')}
  />
</div>
```

## Inverse Pallete (Small Size)

```jsx live
<div className="bg-dark-700 p-4">
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={20}
    invertColors
    size="small"
    onPageSelect={() => console.log('page selected')}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={20}
    invertColors
    variant="reduced"
    size="small"
    onPageSelect={() => console.log('page selected')}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={5}
    invertColors
    variant="minimal"
    size="small"
    onPageSelect={() => console.log('page selected')}
  />
</div>
```
