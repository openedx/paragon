---
title: 'Alert'
type: 'component'
components:
- Alert
categories:
- Status & metadata
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

<p className="lead">
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap.github.io/components/alerts/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

### Basic Usage

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

### With Action Buttons
The ``Alert`` component supports a dismissible button and a custom call-to-action button, via the ``dismissible`` and ``button`` props respectively. The buttons may be right aligned or stacked. On extra small screen widths, the buttons will be stacked.

```jsx live
<>
  <Alert
    variant="info"
    actions={[
      <Button>Hello</Button>,
    ]}
    dismissible
    closeLabel="Dismiss"
    onClose={(e) => { console.log('closed', e); } }
  >
    This is a "info" alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
  <Alert variant="warning" dismissible>
    This is a "info" alert with{' '}
    <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
  <Alert
    variant="success"
    icon={CheckCircle}
    dismissible
    actions={[
      <Button>Hello</Button>,
    ]}
  >
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This example
      text is going to run a bit longer so that you can see how spacing within an
      alert works with this kind of content.
    </p>
  </Alert>
  <Alert
    variant="danger"
    icon={Info}
    actions={[
      <Button>Hello</Button>,
    ]}
    dismissible
    onClose={(e) => { console.log('closed', e); } }
    stacked
  >
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This example
      text is going to run a bit longer so that you can see how spacing within an
      alert works with this kind of content.
    </p>
  </Alert>
</>
```

### Variants

```jsx live
<>
<Alert variant="success" dismissible icon={CheckCircle}>
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
</Alert>
<Alert variant="warning" dismissible icon={WarningFilled}>
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
</Alert>
<Alert variant="danger" dismissible icon={Info}>
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example
    text is going to run a bit longer so that you can see how spacing within an
    alert works with this kind of content.
  </p>
</Alert>
</>
```

### Kitchen Sink

```jsx live
<Alert
  variant="success"
  actions={[
    <Button>Hello</Button>
  ]}
  dismissible
  stacked
>
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

### Theme variables (SCSS)

```scss
$alert-padding-y:                   1.5rem !default;
$alert-padding-x:                   1.5rem !default;
$alert-margin-bottom:               1rem !default;
$alert-border-radius:               $border-radius !default;
$alert-link-font-weight:            $font-weight-normal !default;
$alert-border-width:                0 !default;
$alert-title-color:                 #000000 !default;
$alert-box-shadow:                  0px 1px 2px rgba(0, 0, 0, 0.15), 0px 1px 4px rgba(0, 0, 0, 0.15) !default;

$alert-bg-level:                    -10 !default;
$alert-border-level:                -9 !default;
$alert-color-level:                 6 !default;

$alert-icon-space:                  .8rem !default;

$alert-font-size:                   .875rem !default;
$alert-line-height:                 1.5rem !default;
$alert-content-color:               $gray-700 !default;

$alert-actions-gap:                 map-get($spacers, 3);
```
