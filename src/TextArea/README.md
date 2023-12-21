---
title: 'TextArea'
type: 'component'
components:
  - TextArea
categories:
  - Forms (deprecated)
status: 'Deprecate Soon'
designStatus: 'TBD'
devStatus: 'To Do'
notes: |
  Replaced by Form.Control
---

## Minimal usage

```jsx live
<TextArea name="name" label="First Name" value="Foo Bar" />
```

## Scrollable

```jsx live
<TextArea
  name="name"
  label="Information"
  value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
/>
```

## Validation

```jsx live
<TextArea
  name="username"
  label="Username"
  description="The unique name that identifies you throughout the site."
  validator={(value) => {
    let feedback = { isValid: true };
    if (value.length < 3) {
      feedback = {
        isValid: false,
        validationMessage: 'Username must be at least 3 characters in length.',
      };
    }
    return feedback;
  }}
/>
```

## Label as element

```jsx live
<TextArea name="username" label={<span lang="en">Element</span>} value="Label is wrapped in language span" />
```
