---
title: 'ProgressBar'
type: 'component'
components:
- ProgressBar
- ProgressBarAnnotated
categories:
- Status & metadata
tabName: 'implementation'
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

A bar to indicate the completed progress of a task.

<p>
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap-v4.netlify.app/components/progress/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

## Basic Usage

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

## Basic Usage (Inverse Pallete)

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

## Annotated variant

```jsx live
<>
  <ProgressBar.Annotated
    now={20}
    label="20%"
    variant="success"
    threshold={50}
    thresholdLabel="50%"
    thresholdVariant="dark"
    progressHint="Progress"
    thresholdHint="Threshold"
  />
</>
```
