---
title: 'Avatar'
type: 'component'
components:
  - Avatar
categories:
  - Imagery & Iconography
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

The Avatar component represents a user’s identity in the UI.

It is used in the global navigation’s user menu and may also be used to indicate ownership of user generated content such as a discussion post or open response submission.

## Basic Usage

```jsx live
() => {
  const isExtraSmall = useMediaQuery({
    maxWidth: breakpoints.extraSmall.maxWidth,
  });

  return (
    <Stack
      className="bg-light p-2"
      gap={2}
      direction={isExtraSmall ? 'vertical' : 'horizontal'}
    >
      <Avatar size="xxl" />
      <Avatar size="xl" />
      <Avatar size="lg" />
      <Avatar />
      <Avatar size="sm" />
      <Avatar size="xs" />
    </Stack>
  );
};
```

## Huge

```jsx live
<>
  <Avatar size="huge" />
</>
```
