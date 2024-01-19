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

## Default Size

### Uncontrolled Usage

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  onPageSelect={(page) => console.log(`page ${page} selected`)}
/>
```

### Controlled Usage

```jsx live
() => {
  const [currentPage, setCurrentPage] = useState(1);
  
  const handlePageSelect = (page) => setTimeout(() => setCurrentPage(page), 1000);
  
  return (
    <Pagination
      paginationLabel="pagination navigation"
      pageCount={20}
      currentPage={currentPage}
      onPageSelect={(page) => handlePageSelect(page)}
    />
  );
}
```

### Uncontrolled usage with initial page

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  initialPage={5}
  onPageSelect={(page) => console.log(`page ${page} selected`)}
/>
```

### Secondary

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  variant="secondary"
  onPageSelect={(page) => console.log(`page ${page} selected`)}
  icons={{
    leftIcon: ArrowBackIos,
    rightIcon: ArrowForwardIos,
  }}
/>
```

### Reduced

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  variant="reduced"
  onPageSelect={(page) => console.log(`page ${page} selected`)}
/>
```

### Minimal

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={5}
  variant="minimal"
  onPageSelect={(page) => console.log(`page ${page} selected`)}
  icons={{
    leftIcon: ArrowBackIos,
    rightIcon: ArrowForwardIos,
  }}
/>
```

## Small Size

### Default variant
```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  size="small"
  onPageSelect={(page) => console.log(`page ${page} selected`)}
/>
```

### Secondary (Small Size)

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  variant="secondary"
  size="small"
  onPageSelect={(page) => console.log(`page ${page} selected`)}
/>
```

### Reduced (Small Size)

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={20}
  variant="reduced"
  size="small"
  onPageSelect={(page) => console.log(`page ${page} selected`)}
/>
```

### Minimal (Small Size)

```jsx live
<Pagination
  paginationLabel="pagination navigation"
  pageCount={5}
  variant="minimal"
  size="small"
  onPageSelect={(page) => console.log(`page ${page} selected`)}
/>
```

## Inverse Pallete (Default Size)

```jsx live
<div className="bg-dark-700 p-4">
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={20}
    invertColors
    onPageSelect={(page) => console.log(`page ${page} selected`)}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={20}
    invertColors
    variant="secondary"
    onPageSelect={(page) => console.log(`page ${page} selected`)}
    icons={{
      leftIcon: ArrowBackIos,
      rightIcon: ArrowForwardIos,
    }}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={20}
    invertColors
    variant="reduced"
    onPageSelect={(page) => console.log(`page ${page} selected`)}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={5}
    invertColors
    variant="minimal"
    onPageSelect={(page) => console.log(`page ${page} selected`)}
    icons={{
      leftIcon: ArrowBackIos,
      rightIcon: ArrowForwardIos,
    }}
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
    onPageSelect={(page) => console.log(`page ${page} selected`)}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={20}
    invertColors
    size="small"
    variant="secondary"
    onPageSelect={(page) => console.log(`page ${page} selected`)}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={20}
    invertColors
    variant="reduced"
    size="small"
    onPageSelect={(page) => console.log(`page ${page} selected`)}
  />
  <Pagination
    paginationLabel="pagination navigation"
    pageCount={5}
    invertColors
    variant="minimal"
    size="small"
    onPageSelect={(page) => console.log(`page ${page} selected`)}
  />
</div>
```
