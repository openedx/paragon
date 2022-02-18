---
title: 'StatefulButton'
type: 'component'
components:
- StatefulButton
categories:
- Buttonlike
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

The stateful button is a button used to display an actionable icon.

### Basic usage

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
    className: 'mr-2',
  };
  return (
    <div className="d-flex">
      <StatefulButton {...props} />
      <StatefulButton state="pending" {...props} classNames='icon-spin' />
      <StatefulButton state="complete" {...props} />
      <StatefulButton state="error" {...props} />
    </div>
  );
};
```

### Custom icons and disable states

```jsx live
() => {
  const downloadButtonProps = {
    labels: {
      default: 'Download',
      pending: 'Downloading',
      complete: 'Downloaded',
      error: 'Retry'
    },
    icons: {
      default: <Icon className="fa fa-download" />,
      pending: <Icon className="fa fa-spinner fa-spin" />,
      complete: <Icon className="fa fa-check" />,
      error: <Icon className="fa fa-retweet" />,
    },
    disabledStates: ['pending'],
    variant: 'primary',
    className: 'mr-2',
  };
  return (
    <div className="d-flex">
      <StatefulButton state="default" {...downloadButtonProps} />
      <StatefulButton state="pending" {...downloadButtonProps} />
      <StatefulButton state="complete" {...downloadButtonProps} />
      <StatefulButton state="error" {...downloadButtonProps} />
    </div>
  );
};
```

### Custom states with paragon icons

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
    className: 'mr-2',
  };
  return (
    <div className="d-flex">
      <StatefulButton state="unedited" {...buttonProps} />
      <StatefulButton state="edited" {...buttonProps} />
    </div>
  );
};
```
