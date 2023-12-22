---
title: 'Form'
type: 'component'
components:
- Form
- FormGroup
- FormControl
- FormControlFeedback
- FormLabel
- FormText
- FormRow
categories:
- Forms
tabName: 'implementation'
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

## Floating Labels

```jsx live
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Control
        type="email"
        floatingLabel="Email"
      />
      <Form.Text>
        This is the email that we'll send emails to.
      </Form.Text>
    </Form.Group>

    <Form.Group
      as={Col}
      controlId="formGridPassword"
      isInvalid
    >
      <Form.Control
        type="password"
        floatingLabel="Password"
      />
      <Form.Control.Feedback type="invalid">
        We don't like that password. Try a different one.
      </Form.Control.Feedback>
    </Form.Group>
  </Form.Row>

  <Form.Group
    controlId="formGridAddress1"
    isValid
  >
    <Form.Control floatingLabel="Address" />
    <Form.Control.Feedback type="valid">
      This is a nice place!
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Control floatingLabel="City" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Control floatingLabel="State" as="select">
        <option value="">Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Control floatingLabel="Zip" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formSwitch">
    <Form.Switch>Check this switch</Form.Switch><br/>
    <Form.Switch disabled>disabled switch</Form.Switch>
  </Form.Group>

  <Form.Group controlId="whichColor">
    <Form.Label>
      Which color would you like?
    </Form.Label>
    <Form.RadioSet name="color">
      <Form.Radio value="red">Red</Form.Radio>
      <Form.Radio value="green">Green</Form.Radio>
      <Form.Radio value="blue">Blue</Form.Radio>
    </Form.RadioSet>
    <Form.Control.Feedback>
      The color you choose.
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Group id="formGridCheckbox">
    <Form.Checkbox>Check me out</Form.Checkbox>
  </Form.Group>
  <div className="d-flex">
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </div>
</Form>
```



## Regular Labels

```jsx live
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail-2">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text muted>
        This is the email that we'll send emails to.
      </Form.Text>
    </Form.Group>

    <Form.Group isInvalid as={Col} controlId="formGridPassword-2">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      <Form.Control.Feedback type="invalid">
        We don't like that password. Try a different one.
      </Form.Control.Feedback>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1-2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
    <Form.Control.Feedback type="valid">
      This is a nice place!
    </Form.Control.Feedback>
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity-2">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState-2">
      <Form.Label>State</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip-2">
      <Form.Label>Zip</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formSwitch-2">
    <Form.Switch>Check this switch</Form.Switch><br/>
    <Form.Switch disabled>disabled switch</Form.Switch>
  </Form.Group>

  <Form.Group id="formGridCheckbox-2">
      <Form.Checkbox>Check me out</Form.Checkbox>
  </Form.Group>
  <div className="d-flex">
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </div>
</Form>
```
