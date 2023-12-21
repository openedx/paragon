---
title: 'StatusAlert'
type: 'component'
components:
  - StatusAlert
categories:
  - Status & metadata
status: 'Deprecate Soon'
designStatus: 'Done'
devStatus: 'Done'
notes: |
  Alert replaces this component
---

## basic usage

```jsx live
<StatusAlert dialog="You have a status alert!" onClose={() => {}} open />
```

## success alert

```jsx live
<StatusAlert alertType="success" dialog="Success!" onClose={() => {}} open />
```

## danger alert

```jsx live
<StatusAlert alertType="danger" dialog="Error!" onClose={() => {}} open />
```

## informational alert

```jsx live
<StatusAlert alertType="info" dialog="Get some info here!" onClose={() => {}} open />
```

## alert with a custom aria-label on the close button

```jsx live
<StatusAlert
  alertType="info"
  dialog="Some very specific information."
  onClose={() => {}}
  open
  closeButtonAriaLabel="Dismiss this very specific information."
/>
```

## Non-dismissible alert

```jsx live
<StatusAlert alertType="danger" dismissible={false} dialog="You can't get rid of me!" open />
```

## alert invoked via a button

```jsx live
class StatusAlertWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.openStatusAlert = this.openStatusAlert.bind(this);
    this.resetStatusAlertWrapperState = this.resetStatusAlertWrapperState.bind(this);

    this.state = { open: false };
  }

  openStatusAlert() {
    this.setState({ open: true });
  }

  resetStatusAlertWrapperState() {
    this.setState({ open: false });
    this.button.focus();
  }

  render() {
    return (
      <div>
        <StatusAlert
          alertType="warning"
          open={this.state.open}
          dialog="You triggered a warning"
          onClose={this.resetStatusAlertWrapperState}
        />
        <Button
          onClick={this.openStatusAlert}
          variant="light"
          inputRef={(input) => {
            this.button = input;
          }}
        >
          Click me to open a Status Alert!
        </Button>
      </div>
    );
  }
}
```

## alert with a link

```jsx live
<StatusAlert
  alertType="info"
  dialog={
    <div>
      <span>Love cats? </span>
      <a href="https://www.factretriever.com/cat-facts" target="_blank" rel="noopener noreferrer">
        Click me!
      </a>
    </div>
  }
  onClose={() => {}}
  open
/>
```
