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

## Basic Usage

The `styling` prop at the top level `<Collapsible />` component determines if the collapsible has basic styling, card, or card with heading.

### Basic Style

```jsx live
<Collapsible
  styling="basic"
  title="Toggle Collapsible"
>
  <p>Your stuff goes here.</p>
</Collapsible>
```

### Card Style

This is the default style if no `styling` prop is supplied.

```jsx live
() => {
  const [styling, setStyling] = useState('card');
  const [withIcon, setWithIcon] = useState(false);
  const iconProps = {
    iconWhenOpen: <span>CLOSE SESAME</span>,
    iconWhenClosed: <span>OPEN SESAME</span>,
  };
  
  return (
    <>
      {/* start example form block */}
      <ExamplePropsForm
        inputs={[
          { value: styling, setValue: setStyling, options: ['card', 'card-lg'], name: 'styling' },
          { value: withIcon, setValue: () => setWithIcon(!withIcon), name: 'with icon' },
        ]}
      />
      {/* end example form block */}
      <Collapsible
        styling={styling}
        title={<p><strong>Toggle Collapsible</strong></p>}
        {...withIcon ? iconProps : {}}
      >
        <p>Your stuff goes here.</p>
      </Collapsible>
    </>
  );
}
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

## Advanced Usage

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
    <h4 className="flex-grow-1">I'm a heading</h4>

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
() => {
  const [collapseIsOpen, setCollapseOpen] = React.useState(true);

  return (
    <Collapsible.Advanced
      open={collapseIsOpen}
      onToggle={isOpen => setCollapseOpen(isOpen)}
      className="collapsible-card"
    >
      <Collapsible.Trigger className="collapsible-trigger">
        <h4 className="flex-grow-1">I'm a heading</h4>

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

## Imperative methods

If you need to open or close the Collapsible intermittently due to an event,
such as loading the page or clicking a link, you can open or close
an **uncontrolled** Collapsible by getting a ref to the component and calling
`collapsibleRef.open()` or `collapsibleRef.close()`. The internal state of
the component will be updated accordingly.
