---
title: 'Page Banner'
type: 'component'
components:
- PageBanner
categories:
- Status & metadata
status: 'New'
designStatus: 'Complete'
devStatus: 'In Progress'
notes: |
---

A ``Page Banner`` displays an important, succinct message, and provides actions for users to address (or dismiss the banner). It requires a user action to be dismissed.

## Basic Usage

```jsx live
() => {
  const [show, setShow] = useState(true);
  return (
    <>
      <PageBanner
        show={show}
        dismissible
        onDismiss={() => {setShow(false)}}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </PageBanner>
      {!show && (<Button onClick={() => setShow(true)}>Show Page Banner</Button>)}
    </>
  )
}
```

## Variants

The system warning banner is similar to the ``Alert Banner`` banner in styling, except that the text is always default body (14px) and padding has been modified in order to accommodate the ``Page Banner`` component. It cannot be dismissed.

```jsx live
() => {
  const [showLightVariant, setShowLightVariant] = useState(true);
  const [showDarkVariant, setShowDarkVariant] = useState(true);
  return (
    <>
      <PageBanner
        show={showLightVariant}
        dismissible
        onDismiss={() => setShowLightVariant(false)}
        variant="light"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </PageBanner>
      {!showLightVariant && (<Button className="my-2 mie-2" onClick={() => setShowLightVariant(true)}>Show light variant</Button>)}
      <PageBanner
        show={showDarkVariant}
        dismissible
        onDismiss={() => setShowDarkVariant(false)}
        variant="dark"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
      </PageBanner>
      {!showDarkVariant && (<Button className="my-2" onClick={() => setShowDarkVariant(true)}>Show dark variant</Button>)}
      <PageBanner
        variant="warning"
      >
        <Icon src={WarningFilled} className="mie-2" /> We will no longer support Internet Explorer 11.
      </PageBanner>
    </>
  )
}
```
