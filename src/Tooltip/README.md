---
title: 'Tooltip'
type: 'component'
components:
- WrapperTooltip
categories:
- Overlays
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

`Tooltips` display informative text when users hover over, focus on, or tap an element.

### Basic Usage

```jsx live
<>
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip id={`tooltip-${placement}`}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button variant="primary" className="mr-2 mb-2">Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</>
```

### Light version

```jsx live
<div className="bg-dark-700 p-4">
  {['top', 'right', 'bottom', 'left'].map((placement) => (
    <OverlayTrigger
      key={placement}
      placement={placement}
      overlay={
        <Tooltip variant="light" id={`tooltip-${placement}`}>
          Tooltip on <strong>{placement}</strong>.
        </Tooltip>
      }
    >
      <Button variant="inverse-outline-brand" className="mr-2 mb-2">Tooltip on {placement}</Button>
    </OverlayTrigger>
  ))}
</div>
```

### Theme variables (SCSS)

```scss
$tooltip-font-size:                 $font-size-sm !default;
$tooltip-max-width:                 200px !default;
$tooltip-color:                     $white !default;
$tooltip-bg:                        $black !default;
$tooltip-border-radius:             $border-radius !default;
$tooltip-opacity:                   1 !default;
$tooltip-padding-y:                 .5rem !default;
$tooltip-padding-x:                 .5rem !default;
$tooltip-margin:                    0 !default;
$tooltip-box-shadow:                drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15))!default;

$tooltip-arrow-width:               .8rem !default;
$tooltip-arrow-height:              .4rem !default;
$tooltip-arrow-color:               $tooltip-bg !default;

$tooltip-color-light:               $black !default;;
$tooltip-bg-light:                  $white !default;
$tooltip-arrow-color-light:         $white !default;
```
