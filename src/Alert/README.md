---
title: 'Alert'
type: 'component'
components:
  - Alert
  - AlertHeading
  - AlertLink
categories:
  - Status & metadata
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

The `Alert` component displays a short, important message in a way that attracts the user's attention.
Alerts offer four severity levels that set a distinctive icon and color:

- **Info**: used to convey general information or actions that aren't critical, note that info variant should not contain any icons in it
- **Warning**: used to display information that needs attention
- **Success**: used for success messages
- **Danger**: used to communicate problems that have to be resolved immediately

This component utilizes and extends the `Alert` component from react-bootstrap.<br/> <a href="https://react-bootstrap-v4.netlify.app/components/alerts/" target="_blank" rel="noopener noreferrer"> See React-Bootstrap for additional documentation.</a>

## Basic Usage

```jsx live
<>
  <Alert variant="success">
    This is a "success" alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
  </Alert>
  <Alert variant="info">
    This is a "info" alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
  </Alert>
  <Alert variant="danger">
    This is a "danger" alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
  </Alert>
  <Alert variant="warning">
    This is a "warning" alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
  </Alert>
</>
```

### With Action Buttons

The `Alert` component supports a dismissible button and a custom call-to-action button, via the `dismissible` and `button` props respectively. The buttons may be right aligned or stacked. On extra small screen widths, the buttons will be stacked.

The stacked variant should be used for:

- Placement in sidebars or small container
- Extra-small breakpoint and below

---

```jsx live
<>
  <Alert
    variant="info"
    actions={[<Button>Hello</Button>]}
    dismissible
    closeLabel="Dismiss"
    onClose={(e) => {
      console.log('closed', e);
    }}
  >
    This is a "info" alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
  </Alert>
  <Alert variant="warning" dismissible>
    This is a "info" alert with <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you like.
  </Alert>
  <Alert variant="success" icon={CheckCircle} dismissible actions={[<Button>Hello</Button>]}>
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
      that you can see how spacing within an alert works with this kind of content.
    </p>
  </Alert>
  <Alert
    variant="danger"
    icon={Info}
    actions={[<Button>Hello</Button>]}
    dismissible
    onClose={(e) => {
      console.log('closed', e);
    }}
    stacked
  >
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
      that you can see how spacing within an alert works with this kind of content.
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
      Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
      that you can see how spacing within an alert works with this kind of content.
    </p>
  </Alert>
  <Alert variant="warning" dismissible icon={WarningFilled}>
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
      that you can see how spacing within an alert works with this kind of content.
    </p>
  </Alert>
  <Alert variant="danger" dismissible icon={Info}>
    <Alert.Heading>Hey, nice to see you</Alert.Heading>
    <p>
      Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so
      that you can see how spacing within an alert works with this kind of content.
    </p>
  </Alert>
</>
```

### Kitchen Sink

```jsx live
<Alert variant="success" actions={[<Button>Hello</Button>]} dismissible stacked>
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p>
    Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that
    you can see how spacing within an alert works with this kind of content.
  </p>
  <hr />
  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</Alert>
```
