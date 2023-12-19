---
title: 'Modal'
type: 'component'
components:
  - Modal
categories:
  - Overlays
status: 'Deprecate soon'
designStatus: 'Done'
devStatus: 'To Do'
notes: |
  Replaced by ModalDialog.
---

## Example Usage

```jsx live
class ModalWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.openModal = this.openModal.bind(this);
    this.resetModalWrapperState = this.resetModalWrapperState.bind(this);

    this.state = { open: false };
  }

  openModal() {
    this.setState({ open: true });
  }

  resetModalWrapperState() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <Modal
          open={this.state.open}
          title="Modal title."
          body={
            <div>
              <p>Enter your e-mail address to receive free cat facts!</p>
              <InputText name="e-mail" label="E-Mail Address" />
            </div>
          }
          parentSelector={this.props.parentSelector}
          onClose={this.resetModalWrapperState}
          buttons={[
            <Button variant="success" data-autofocus>
              Green button!
            </Button>,
          ]}
        />
        <Button onClick={this.openModal} variant="light">
          Click me to open a modal!
        </Button>
      </div>
    );
  }
}
```

## configurable buttons

```jsx
<Modal
  open
  title="Modal title."
  body="Modal body."
  buttons={[
    <Button variant="primary">Blue button!</Button>,
    {
      label: 'Red button!',
      buttonType: 'danger',
    },
    <Button variant="success">Green button!</Button>,
  ]}
  onClose={() => {}}
/>
```

## configurable title and body

```jsx
<Modal
  open
  title="Custom title!"
  body="Custom body!"
  buttons={[<Button variant="dark">Dark button!</Button>]}
  onClose={() => {}}
/>
```

## configurable buttons that perform actions

```jsx
<Modal
  open
  title="Modal title."
  body="Modal body."
  buttons={[
    <Button variant="light" onClick={action('button-click')}>
      Click me and check the console!
    </Button>,
  ]}
  onClose={() => {}}
/>
```

## configurable close button string

```jsx
<Modal
  open
  title="Modal title."
  body="Modal body."
  closeText="SHOO!"
  onClose={() => {}}
/>
```

## configurable close button element

```jsx
<Modal
  open
  title="Modal title."
  body="Modal body."
  closeText={<Icon className="fa fa-ship" screenReaderText="Close" />}
  onClose={() => {}}
/>
```
