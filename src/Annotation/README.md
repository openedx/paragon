---
title: 'Annotation'
type: 'component'
components:
- Annotation
categories:
- Status & metadata
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
notes: |

---

Display informative text related to an object on screen. Unlike the tooltip an annotation is not interactive.

- Don't put links or interactive elements in annotations - use [Popover](/components/popover) instead
- Don’t use annotations if trigger is needed - use [Tooltips](/components/tooltip) instead

### Basic Usage

```jsx live
<>
  <Annotation>
    Success variant
  </Annotation>
  <Annotation 
    variant="dark"
    arrowPlacement="left"
    className="mr-2 mb-2"
  >
    Dark variant
  </Annotation>
  <Annotation 
    variant="error" 
    arrowPlacement="top"
    className="mr-2 mb-2"
  >
    Error variant
  </Annotation>
  <Annotation
    variant="warning"
    arrowPlacement="right" 
    className="mb-2"
  >
    Warning variant
  </Annotation>
  <Annotation
    variant="light"
    className="mb-2"
  >
    Light variant. By default max width is set to 300px with wrapping text.
  </Annotation>
</>
```

### Theme variables (SCSS)

```scss
$annotation-padding:               .5rem !default;
$annotation-box-shadow:            drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.15)) !default;
$annotation-border-radius:         .25rem !default;
$annotation-max-width:             300px !default;
$annotation-font-size:             $font-size-sm !default;
$annotation-line-height:           $line-height-sm !default;

$annotation-variants: (
  "success": ( "background-color": $success, "color": $white ),
  "warning": ( "background-color": $warning, "color": $black ),
  "error":   ( "background-color": $danger, "color": $white ),
  "light":   ( "background-color": $white, "color": $primary-500 ),
  "dark":    ( "background-color": $black, "color": $white ),
) !default;

$annotation-arrow-side-margin:     .25rem !default;
$annotation-arrow-border-width:    .5rem !default;

```
