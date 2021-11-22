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

### Theme variables (SCSS)

```scss
$popover-font-size:                 $font-size-sm !default;
$popover-bg:                        $white !default;
$popover-max-width:                 480px !default;
$popover-border-width:              $border-width !default;
$popover-border-color:              rgba($black, .2) !default;
$popover-border-radius:             $border-radius-sm !default;
$popover-inner-border-radius:       subtract($popover-border-radius, $popover-border-width) !default;
$popover-box-shadow:                drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15)) !default;
$popover-icon-margin-right:         .5rem;
$popover-icon-height:               1rem;
$popover-icon-width:                1rem;

$popover-header-bg:                 $white !default;
$popover-header-color:              $headings-color !default;
$popover-header-padding-y:          .5rem !default;
$popover-header-padding-x:          1rem !default;

$popover-body-color:                $body-color !default;
$popover-body-padding-y:            $popover-header-padding-y !default;
$popover-body-padding-x:            $popover-header-padding-x !default;

$popover-arrow-width:               1rem !default;
$popover-arrow-height:              .5rem !default;
$popover-arrow-color:               $popover-bg !default;

$popover-arrow-outer-color:         fade-in($popover-border-color, .05) !default;

$popover-success-bg:                $success-100 !default;
$popover-success-icon-color:        $success-500 !default;
$popover-warning-bg:                $warning-100 !default;
$popover-warning-icon-color:        $warning-500 !default;
$popover-danger-bg:                 $danger-100 !default;
$popover-danger-icon-color:         $danger-500 !default;
```
