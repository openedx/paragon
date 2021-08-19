---
title: 'Page Banner'
type: 'component'
components:
- Page Banner
categories:
- Status & metadata
status: 'New'
designStatus: 'Complete'
devStatus: 'In Progress'
notes: |
---

### Basic Usage

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

### Variants

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
      {!showLightVariant && (<Button className="my-2 mr-2" onClick={() => setShowLightVariant(true)}>Show light variant</Button>)}
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
        <Icon src={WarningFilled} className="mr-2" /> We will no longer support Internet Explorer 11.
      </PageBanner>
    </>
  )
}
```
