---
title: 'StatefulButton'
type: 'component'
components:
- StatefulButton
categories:
- Buttonlike
tabName: 'implementation'
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

The stateful button is a button used to display an actionable icon.

## Basic usage

```jsx live
() => {
  const props = {
    labels: {
      default: 'Save',
      pending: 'Saving',
      complete: 'Saved',
      error: 'Error'
    },
    variant: 'primary',
  };
  return (
    <Stack direction="horizontal" gap={2}>
      <StatefulButton {...props} />
      <StatefulButton state="pending" {...props} />
      <StatefulButton state="complete" {...props} />
      <StatefulButton state="error" {...props} />
    </Stack>
  );
};
```

## Custom icons and disabled states

```jsx live
() => {
  const downloadButtonProps = {
    labels: {
      default: 'Download',
      pending: 'Downloading',
      complete: 'Downloaded',
    },
    icons: {
      default: <Icon src={Download} />,
      pending: <Icon src={SpinnerSimple} className="icon-spin" />,
      complete: <Icon src={Check} />,
    },
    disabledStates: ['pending', 'complete'],
    variant: 'primary',
  };
  return (
    <Stack direction="horizontal" gap={2}>
      <StatefulButton state="default" {...downloadButtonProps} />
      <StatefulButton state="pending" {...downloadButtonProps} />
      <StatefulButton state="complete" {...downloadButtonProps} />
    </Stack>
  );
};
```

## Custom states with Paragon icons

```jsx live
() => {
  const buttonProps = {
    labels: {
      unedited: 'Save (no changes)',
      edited: 'Save Changes',
    },
    icons: {
      unedited: <Icon src={Add} />,
      edited: <Icon src={Add} />,
    },
    disabledStates: ['unedited'],
    variant: 'primary',
  };
  return (
    <Stack direction="horizontal" gap={2}>
      <StatefulButton state="unedited" {...buttonProps} />
      <StatefulButton state="edited" {...buttonProps} />
    </Stack>
  );
};
```
