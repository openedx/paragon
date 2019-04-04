# Async Action Button

A button that can display different states. Each state has:

- A label (required)
- An icon
- an option to be disabled

These are controlled by the props `labels`, `icons`, and `disabledStates`.

Button states can be whatever you want them to be, but default icons exist for: 

- `pending`, `complete`, and `error`.

Control the state with the `state` prop. Example usage:

```jsx
<AsyncActionButton
  state="pending"
  labels={{
    default: 'Download',
    pending: 'Downloading',
    complete: 'Downloaded',
  }}
  icons={{
    default: <Icon className="fa fa-download" />,
    pending: <Icon className="fa fa-spinner fa-spin" />,
    complete: <Icon className="fa fa-check" />,
  }}
  disabledStates=['pending']
  className='btn-primary mr-2'
  ...
/>
```

All other props sent to this component will be passed through to the underlying Button component.