---
title: 'Spinner'
type: 'component'
status: 'Stable'
components:
- Spinner
categories:
- Choreography
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

A spinning animation that indicates loading.

<p>
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap-v4.netlify.app/components/spinners/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

## Basic Usage

```jsx live
<>
  <Spinner animation="border" className="mie-3" screenReaderText="loading" />
  <Spinner animation="grow" className="mie-3" screenReaderText="loading" />
</>
```
## Color Variants

```jsx live
() => {
  const variants = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  return variants.map((variant) => (
    <Spinner animation="border" variant={variant} className="mr-3" screenReaderText="loading" />
  ));
}
```
