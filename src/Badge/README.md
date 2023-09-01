---
title: 'Badge'
type: 'component'
components:
- Badge
categories:
- Status & metadata
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

Badges are composed of text and an accompanying indicator color, and are typically used to add meaning, status, or context when paired with another component.

- Use badges paired with another component to convey status, or provide additional details
- Don’t use badges for freestanding text on a page

<p>
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap-v4.netlify.app/components/badge/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for additional documentation.
  </a>
</p>

## Basic Usage

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Stack gap={2} direction={ isExtraSmall ? "vertical" : "horizontal" }>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="dark">Dark</Badge>
    </Stack>
)}
```
