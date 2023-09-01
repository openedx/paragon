---
title: 'Container'
type: 'component'
components:
- Container
categories:
- Layout
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

The base container to contain, pad, and center content in the viewport. This component extends the React-Bootstrap `Container`.<br/> <a href="https://react-bootstrap.github.io/layout/grid/" target="_blank" rel="noopener noreferrer">See React-Bootstrap for more documentation.</a>

## Basic Usage

```jsx live
<div style={{ overflowX: 'auto' }}>
    <div style={{ width: '1500px', border: 'solid 3px red' }}>
        <Container size="xl" className="bg-danger-300 my-4">
          The content in this container won't exceed the extra large width.
        </Container>
        
        <Container size="lg" className="bg-danger-300 mb-4">
          The content in this container won't exceed the large width.
        </Container>
        
        <Container size="md" className="bg-danger-300 mb-4">
          The content in this container won't exceed the medium width.
        </Container>
        
        <Container size="sm" className="bg-danger-300 mb-4">
          The content in this container won't exceed the small width.
        </Container>
        
        <Container size="xs" className="bg-danger-300 mb-4">
          The content in this container won't exceed the extra small width.
        </Container>
    </div>
</div>
```
