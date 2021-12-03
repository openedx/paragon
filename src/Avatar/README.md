---
title: 'Avatar'
type: 'component'
components:
- Avatar
categories:
- Imagery & Iconography
- Content
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

The Avatar component represents a user’s identity in the UI.

It is used in the global navigation’s user menu and may also be used to indicate ownership of user generated content such as a discussion post or open response submission.


### Basic Usage

```jsx live
<div className="bg-light p-2">
  <Avatar size="xxl" />{' '}
  <Avatar size="xl" />{' '}
  <Avatar size="lg" />{' '}
  <Avatar />{' '}
  <Avatar size="sm" />{' '}
  <Avatar size="xs" />{' '}
</div>
```


### Huge

```jsx live
<>
  <Avatar size="huge" />
</>
```

### Theme variables (SCSS)

```scss
$avatar-border-radius:  100% !default;
$avatar-border: solid 1px $light-300 !default;

$avatar-size-xs: 1.5rem !default;
$avatar-size-sm: 2.25rem !default;
$avatar-size: 3rem !default;
$avatar-size-lg: 4rem !default;
$avatar-size-xl: 18.75rem !default;
```
