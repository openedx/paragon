---
title: "Collapsible"
type: "component"
components:
- Collapsible
- CollapsibleAdvanced
- CollapsibleBody
- CollapsibleTrigger
- CollapsibleVisible
categories:
- Content
status: "Stable"
designStatus: "Needs Review"
devStatus: "Done"
notes:
---

Collapsible is an element that allows a user to toggle (view/hide) supplemental information or actions.

When to use:
- To organize related information.
- To shorten pages and reduce scrolling when content is not crucial to read in full.
- When space is at a premium and long content cannot be displayed all at once.

### Basic Usage

The `styling` prop at the top level `<Collapsible />` component determines if the collapsible has basic styling, card, or card with heading.

### Basic Style `<Collapsible styling="basic" />`

```jsx live
<Collapsible
  styling="basic"
  title="Toggle Collapsible"
>
  <p>Your stuff goes here.</p>
</Collapsible>
```

### Card Style `<Collapsible styling="card" />`

This is the default style if no `styling` prop is supplied.

```jsx live
<Collapsible
  styling="card"
  title={<p><strong>Toggle Collapsible</strong></p>}
>
  <p>Your stuff goes here.</p>
</Collapsible>
```

### Large Card Style `<Collapsible styling="card-lg" />`

```jsx live
<Collapsible
  styling="card-lg"
  title={<h5>Toggle Collapsible</h5>}
>
  <p>Your stuff goes here.</p>
</Collapsible>
```

### Card with custom icons `<Collapsible styling="card-lg" />`

```jsx live
<Collapsible
  styling="card"
  title={<p><strong>Toggle Collapsible</strong></p>}
  iconWhenOpen={<span>CLOSE SESAME</span>}
  iconWhenClosed={<span>OPEN SESAME</span>}
>
  <p>Your stuff goes here.</p>
</Collapsible>
```

### Default Open

```jsx live
<Collapsible title="I'm not a heading" defaultOpen>
  <p>Your stuff goes here.</p>
</Collapsible>
```
### With Callbacks

```jsx live
<Collapsible
  title="Toggle Collapsible"
  defaultOpen
  onToggle={(isOpen) => console.log('Collapsible toggled and open is: ', isOpen)}
  onOpen={() => console.log('Collapsible opened.')}
  onClose={() => console.log('Collapsible closed.')}
>
  <p>See the console.</p>
</Collapsible>
```

<hr/>

### Advanced Usage

For needs that deviate from the three styles above, use `<Collapsible.Advanced />`

### Bare minimum

```jsx live
<Collapsible.Advanced>
  <Collapsible.Trigger>
    Toggle Collapsible
  </Collapsible.Trigger>
  <Collapsible.Body>
    <p>Your stuff goes here</p>
  </Collapsible.Body>
</Collapsible.Advanced>
```

### Card style with advanced usage

```jsx live
<Collapsible.Advanced className="collapsible-card">
  <Collapsible.Trigger className="collapsible-trigger d-flex">
    <span className="flex-grow-1">This is the title</span>
    <Collapsible.Visible whenClosed> + </Collapsible.Visible>
    <Collapsible.Visible whenOpen> - </Collapsible.Visible>
  </Collapsible.Trigger>

  <Collapsible.Body className="collapsible-body">
    The content
  </Collapsible.Body>
</Collapsible.Advanced>
```

### With a close button

```jsx live
<Collapsible.Advanced className="collapsible-card" defaultOpen>
  <Collapsible.Trigger className="collapsible-trigger d-flex">
    <span className="flex-grow-1">This is the title</span>
    <Collapsible.Visible whenClosed> + </Collapsible.Visible>
    <Collapsible.Visible whenOpen> - </Collapsible.Visible>
  </Collapsible.Trigger>

  <Collapsible.Body className="collapsible-body">
    <p>The content</p>

    <Collapsible.Trigger closeOnly tag="a" className="btn btn-outline-primary">
      Close
    </Collapsible.Trigger>
  </Collapsible.Body>
</Collapsible.Advanced>
```


### onOpen, onClose and onToggle callbacks

See the developer console for logging.

```jsx live
<Collapsible.Advanced
  className="collapsible-card-lg"
  onToggle={(isOpen) => console.log('Collapsible toggled and open is: ', isOpen)}
  onOpen={() => console.log('Collapsible opened.')}
  onClose={() => console.log('Collapsible closed.')}
>
  <Collapsible.Trigger className="collapsible-trigger">
    <h5 className="flex-grow-1">I'm a heading</h5>

      <Collapsible.Visible whenClosed>
        +
      </Collapsible.Visible>

      <Collapsible.Visible whenOpen>
        -
      </Collapsible.Visible>
  </Collapsible.Trigger>

  <Collapsible.Body className="collapsible-body">
    <p>Your stuff goes here.</p>

    <Collapsible.Trigger closeOnly tag="a" className="btn btn-outline-primary">
      Close
    </Collapsible.Trigger>
  </Collapsible.Body>
</Collapsible.Advanced>
```

### Controlled usage

```jsx live
function() {
  const [collapseIsOpen, setCollapseOpen] = React.useState(true);

  return (
    <Collapsible.Advanced
      open={collapseIsOpen}
      onToggle={isOpen => setCollapseOpen(!isOpen)}
      className="collapsible-card"
    >
      <Collapsible.Trigger className="collapsible-trigger">
        <h5 className="flex-grow-1">I'm a heading</h5>

          <Collapsible.Visible whenClosed>
            +
          </Collapsible.Visible>

          <Collapsible.Visible whenOpen>
            -
          </Collapsible.Visible>
      </Collapsible.Trigger>

      <Collapsible.Body className="collapsible-body">
        <p>Your stuff goes here.</p>

        <Collapsible.Trigger closeOnly tag="a" className="btn btn-outline-primary">
          Close
        </Collapsible.Trigger>
      </Collapsible.Body>
    </Collapsible.Advanced>
  );
}
```

### Imperative methods

If you need to open or close the Collapsible intermittently due to an event,
such as loading the page or clicking a link, you can open or close
an **uncontrolled** Collapsible by getting a ref to the component and calling
`collapsibleRef.open()` or `collapsibleRef.close()`. The internal state of
the component will be updated accordingly.

<testguide
  events="`onClose`, `onOpen`, `onToggle`, CollapsibleTrigger - `onClick`"
  dataTestId
  selectors="`pgn_collapsible`"
/>
