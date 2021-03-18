---
title: 'Alert'
type: 'component'
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

# Alert


<p style={{ fontSize: '1.5em' }}>
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap.github.io/components/alerts/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

##### Basic Usage

```jsx live
<>
<Alert variant="success">
  This is a "success" alert with{' '}
  <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  like.
</Alert>
<Alert variant="info">
  This is a "info" alert with{' '}
  <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  like.
</Alert>
<Alert variant="danger">
  This is a "danger" alert with{' '}
  <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  like.
</Alert>
<Alert variant="warning">
  This is a "warning" alert with{' '}
  <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
  like.
</Alert>
</>
```

##### Kitchen Sink

```jsx live
<Alert variant="success" dismissible>
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">
    Whenever you need to, be sure to use margin utilities to keep things nice
    and tidy.
  </p>
</Alert>
```
