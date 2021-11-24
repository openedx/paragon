---
title: 'Progress Bar'
type: 'component'
categories:
- Status & metadata
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

A bar to indicate the completed progress of a task.

<p>
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap.github.io/components/progress" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

### Basic Usage

```jsx live
<>
  <ProgressBar now={60} label="60%" variant="primary" />
  <br />
  <ProgressBar now={60} label="60%" variant="success" />
  <br />
  <ProgressBar now={60} label="60%" variant="brand" />
  <br />
  <ProgressBar now={60} label="60%" variant="warning" />
</>
```

### Basic Usage (Inverse Pallete)

```jsx live
<div className="bg-dark-700 p-4">
  <ProgressBar now={60} label="60%" />
  <br />
  <ProgressBar now={60} label="60%" variant="success" />
  <br />
  <ProgressBar now={60} label="60%" variant="brand" />
  <br />
  <ProgressBar now={60} label="60%" variant="warning" />
</div>
```

### Theme variables (SCSS)

```sass
$progress-height:                   1rem !default;
$progress-font-size:                $font-size-base * .75 !default;
$progress-bg:                       transparent !default;
$progress-border-radius:            0 !default;
$progress-box-shadow:               none !default;
$progress-bar-color:                $white !default;
$progress-bar-bg:                   theme-color("accent-a") !default;
$progress-bar-animation-timing:     1s linear infinite !default;
$progress-bar-transition:           width .6s ease !default;
$progress-bar-border-width:         1px !default;
$progress-bar-border-color:         $gray-500 !default;
```
