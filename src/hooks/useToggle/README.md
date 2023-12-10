---
title: 'useToggle'
type: 'hook'
categories:
- Hooks
components:
- useToggle
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

Toggle a boolean value on or off with handlers

`const [state, setOn, setOff, toggle] = useToggle(initialState, handlers);`

## Sample Usage

```jsx live
() => {
  const defaultIsOn = true;
  const handlers = {
    handleToggleOn: () => console.log('called handleToggleOn'),
    handleToggleOff: () => console.log('called handleToggleOff'),
    handleToggle: () => console.log('called handleToggle'),
  }

  const [isOn, setOn, setOff, toggle] = useToggle(defaultIsOn, handlers);

  return (
    <div>
      <p>
        Toggle is
        {isOn
          ? <Badge variant="success">On</Badge>
          : <Badge variant="light">Off</Badge>
        }
      </p>

      <Button onClick={setOn} className="mr-2" variant="outline-primary">set on</Button>
      <Button onClick={setOff} className="mr-2" variant="outline-primary">set off</Button>
      <Button onClick={toggle} className="mr-2" variant="outline-primary">toggle</Button>
    </div>
  );
}
```

## Basic Usage

```jsx live
() => {
  const [isOpen, open, close] = useToggle(false);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.ImageCap src="https://picsum.photos/400/200/" srcAlt="Image description" />
      <Card.Header title="Card Title"/>
      <Card.Section>
        <p>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </p>
        {
          isOpen ? (
            <>
              <p>Poutine cred portland heirloom seitan sartorial 90's cray. Humblebrag blue bottle venmo, cloud bread cronut neutra sartorial whatever slow-carb tattooed cliche helvetica poutine squid. Direct trade health goth gentrify kitsch, heirloom blog umami synth ennui seitan messenger bag. Literally poutine slow-carb, hexagon leggings seitan readymade.</p>
              <Button block variant="outline-primary" onClick={close}>Close</Button>
            </>
          ) : (
            <Button block variant="outline-primary" onClick={open}>See more</Button>
          )
        }
      </Card.Section>
    </Card>
  );
}
```
