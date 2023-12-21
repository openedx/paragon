---
title: 'PageBanner'
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

A `Page Banner` displays an important, succinct message, and provides actions for users to address (or dismiss the banner). It requires a user action to be dismissed.

## Basic Usage Variants

```jsx live
() => {
  const [showPageBanner, setShowPageBanner] = useState(true);
  const [variant, setVariant] = useState('light');

  return (
    <>
      <ExamplePropsForm
        inputs={[
          {
            value: variant,
            setValue: setVariant,
            options: [
              { name: 'light', value: 'light' },
              { name: 'dark', value: 'dark' },
              { name: 'accentA', value: 'accentA' },
              { name: 'accentB', value: 'accentB' },
              { name: 'warning', value: 'warning' },
            ],
            name: 'Banner Variants',
          },
        ]}
      />

      <div>
        <PageBanner show={showPageBanner} variant={variant} dismissible onDismiss={() => setShowPageBanner(false)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </PageBanner>
        {!showPageBanner && (
          <Button className="my-2 mie-2" onClick={() => setShowPageBanner(true)}>
            Show Page Banner
          </Button>
        )}
      </div>
    </>
  );
};
```

## Warning Banner

The system warning banner is similar to the `Alert Banner` banner in styling, except that the text is always default body (14px) and padding has been modified in order to accommodate the `Page Banner` component. It cannot be dismissed.

```jsx live
() => {
  return (
    <>
      <PageBanner variant="warning">
        <Icon src={WarningFilled} className="mie-2" /> We will no longer support Internet Explorer 11.
      </PageBanner>
    </>
  );
};
```
