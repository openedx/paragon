---
title: 'AvatarButton'
components:
- AvatarButton
categories:
- Buttonlike
tabName: 'implementation'
type: 'component'
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |


---

A button that contains the user’s Avatar.

## Basic Usage

```jsx live
<>
  <div>
    <AvatarButton size="lg" src="https://picsum.photos/128/128/">Casey</AvatarButton>
  </div>
  <div>
    <AvatarButton size="md" src="https://picsum.photos/128/128/">Casey</AvatarButton>
  </div>
  <div>
    <AvatarButton size="sm" src="https://picsum.photos/128/128/">Casey</AvatarButton>
  </div>
</>
```


## With Dropdown

```jsx live
<Dropdown>
  <Dropdown.Toggle as={AvatarButton} src="https://picsum.photos/128/128">
    Casey
  </Dropdown.Toggle>

  <Dropdown.Menu alignRight>
    <Dropdown.Item href="#/action-1">Resume your last course</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

Props set on Dropdown.Toggle get passed through to the "as" component

```jsx live
<Dropdown>
  <Dropdown.Toggle as={AvatarButton} size="sm" src="https://picsum.photos/128/128/">
    Casey
  </Dropdown.Toggle>

  <Dropdown.Menu alignRight>
    <Dropdown.Item href="#/action-1">Resume your last course</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
    <Dropdown.Divider />
    <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
```

## No label

For use in mobile viewports or constrained views.

```jsx live
<>
  <div>
    <AvatarButton showLabel={false} size="lg" src="https://picsum.photos/128/128/">Casey</AvatarButton>
  </div>
  <div>
    <AvatarButton showLabel={false} size="md" src="https://picsum.photos/128/128/">Casey</AvatarButton>
  </div>
  <div>
    <AvatarButton showLabel={false} size="sm" src="https://picsum.photos/128/128/">Casey</AvatarButton>
  </div>

  <Dropdown>
    <Dropdown.Toggle  showLabel={false} as={AvatarButton} src="https://picsum.photos/128/128/">
      Casey
    </Dropdown.Toggle>

    <Dropdown.Menu alignRight>
      <Dropdown.Item href="#/action-1">Resume your last course</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Dashboard</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Profile</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Account</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#/action-3">Sign out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
</>
```

CSS overrides can be applied to this component through the `.btn-avatar` class name.
