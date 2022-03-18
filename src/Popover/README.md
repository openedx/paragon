---
title: 'Popover'
type: 'component'
components:
- WrapperPopover
- PopoverTitle
- PopoverContent
categories:
- Overlays
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

Popovers are small overlays that present additional content and actions without cluttering the page.

### Basic Usage

```jsx live
<>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      trigger="click"
      key={placement}
      placement={placement}
      overlay={
        <Popover id={`popover-positioned-${placement}`}>
          <Popover.Title as="h3">{`Popover ${placement}`}</Popover.Title>
          <Popover.Content>
            <strong>Holy guacamole!</strong> Check this info.
          </Popover.Content>
        </Popover>
      }
    >
      <Button variant="secondary" className="mr-2 mb-2">Popover on {placement}</Button>
    </OverlayTrigger>
  ))}
</>
```

### State variants

```jsx live
<>
  <OverlayTrigger
    trigger="click"
    key="top-basic"
    placement="top"
    overlay={
      <Popover className="popover-positioned-top">
        <Popover.Title as="h5">Popover Basic</Popover.Title>
        <Popover.Content>
          <strong>Holy guacamole!</strong> Check this info.
        </Popover.Content>
      </Popover>
    }
  >
    <Button variant="secondary" className="mr-2 mb-2">
      Popover Basic
    </Button>
  </OverlayTrigger>
  <OverlayTrigger
    trigger="click"
    key="top-success"
    placement="top"
    overlay={
      <Popover className="popover-positioned-top" variant="success">
        <Popover.Title as="h5"><Icon src={CheckCircle}/> Popover Success</Popover.Title>
        <Popover.Content>
          <strong>Holy guacamole!</strong> Check this info.
        </Popover.Content>
      </Popover>
    }
  >
    <Button variant="secondary" className="mr-2 mb-2">
      Popover Success
    </Button>
  </OverlayTrigger>
  <OverlayTrigger
    trigger="click"
    key="top-warning"
    placement="top"
    overlay={
      <Popover className="popover-positioned-top" variant="warning">
        <Popover.Title as="h5"><Icon src={WarningFilled} /> Popover Warning</Popover.Title>
        <Popover.Content>
          <strong>Holy guacamole!</strong> Check this info.
        </Popover.Content>
      </Popover>
    }
  >
    <Button variant="secondary" className="mr-2 mb-2">
      Popover Warning
    </Button>
  </OverlayTrigger>
  <OverlayTrigger
    trigger="click"
    key="top-danger"
    placement="top"
    overlay={
      <Popover className="popover-positioned-top" variant="danger">
        <Popover.Title as="h5"><Icon src={Info} /> Popover Danger</Popover.Title>
        <Popover.Content>
          <strong>Holy guacamole!</strong> Check this info.
        </Popover.Content>
      </Popover>
    }
  >
    <Button variant="secondary" className="mr-2 mb-2">
      Popover Danger
    </Button>
  </OverlayTrigger>
</>
```

<guide
  defaultText="`bsPrefix: 'popover-header'`, `bsPrefix: 'popover-body'`"
  dataTestId
/>
