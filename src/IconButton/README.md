---
title: 'IconButton'
type: 'component'
components:
- IconButton
- WithTooltip
categories:
- Buttonlike
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

### Basic Usage with Paragon Icon

```jsx live
() => {
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark", "black"];
  return (
    <div className="d-flex">
      {variants.map((variant) => (
        <IconButton src={Close} iconAs={Icon} alt="Close" onClick={() => {}} variant={variant} className="mr-2" />
      ))}
    </div>
  );
}
```

### With tooltips

```jsx live
() => {
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark", "black"];
  return (
    <div className="d-flex">
      {variants.map((variant) => (
        <IconButton.WithTooltip
          placement='left'
          tooltipContent={<div>a nice tooltip of {variant}!</div>}
          src={Close}
          iconAs={Icon}
          alt="Close"
          onClick={() => {}}
          variant={variant}
          className="mr-2"
        />
      ))}
    </div>
  );
}
```


### Basic Usage with FontAwesome Icon

```jsx live
() => {
  const icon = FontAwesome.faTimes;

  return (
    <div className="d-flex">
      <IconButton className="mr-2" icon={icon} alt="Close" onClick={() => {}} variant="brand" />
      <IconButton className="mr-2" icon={icon} alt="Close" onClick={() => {}} variant="primary" />
      <IconButton className="mr-2" icon={icon} alt="Close" onClick={() => {}} variant="secondary" />
      <IconButton className="mr-2" icon={icon} alt="Close" onClick={() => {}} variant="success" />
      <IconButton className="mr-2" icon={icon} alt="Close" onClick={() => {}} variant="warning" />
      <IconButton className="mr-2" icon={icon} alt="Close" onClick={() => {}} variant="danger" />
      <IconButton className="mr-2" icon={icon} alt="Close" onClick={() => {}} variant="light" />
      <IconButton className="mr-2" icon={icon} alt="Close" onClick={() => {}} variant="dark" />
      <IconButton className="mr-2" icon={icon} alt="Close" onClick={() => {}} variant="black" />
    </div>
  );
}
```

### Active State

```jsx live
() => {
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark", "black"];
  return (
    <div className="d-flex">
      {variants.map((variant, index) => (
        <IconButton
         isActive
         src={Close} iconAs={Icon} alt="Close" onClick={() => {}} variant={variant} className="mr-2" />
      ))}
    </div>
  );
}
```

#### isActive=true with inverted colors

```jsx live
() => {
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark", "black"];
  return (
    <div className="d-flex">
      {variants.map((variant, index) => (
        <IconButton
         invertColors
         isActive
         src={Close} iconAs={Icon} alt="Close" onClick={() => {}} variant={variant} className="mr-2" />
      ))}
    </div>
  );
}
```


### Inverted Colors

```jsx live
() => {
  const icon = FontAwesome.faBars;

  return (
    <div className="d-flex">
      <div className="p-1 bg-brand">
        <IconButton
          icon={icon}
          alt="Menu"
          onClick={() => console.log("You clicked the menu button")}
          variant="brand"
          invertColors
        />
      </div>
      <div className="p-1 bg-primary">
        <IconButton
          icon={icon}
          alt="Menu"
          onClick={() => console.log("You clicked the menu button")}
          variant="primary"
          invertColors
        />
      </div>
      <div className="p-1 bg-secondary">
        <IconButton
          icon={icon}
          alt="Menu"
          onClick={() => console.log("You clicked the menu button")}
          variant="secondary"
          invertColors
        />
      </div>
      <div className="p-1 bg-success">
        <IconButton
          icon={icon}
          alt="Menu"
          onClick={() => console.log("You clicked the menu button")}
          variant="success"
          invertColors
        />
      </div>
      <div className="p-1 bg-warning">
        <IconButton
          icon={icon}
          alt="Menu"
          onClick={() => console.log("You clicked the menu button")}
          variant="warning"
          invertColors
        />
      </div>
      <div className="p-1 bg-danger">
        <IconButton
          icon={icon}
          alt="Menu"
          onClick={() => console.log("You clicked the menu button")}
          variant="danger"
          invertColors
        />
      </div>
      <div className="p-1 bg-light">
        <IconButton
          icon={icon}
          alt="Menu"
          onClick={() => console.log("You clicked the menu button")}
          variant="light"
          invertColors
        />
      </div>
      <div className="p-1" style={{ background: "black" }}>
        <IconButton
          icon={icon}
          alt="Menu"
          onClick={() => console.log("You clicked the menu button")}
          variant="black"
          invertColors
        />
      </div>
    </div>
  );
}
```

### Sizes

```jsx live
() => {
  return (
    <>
      <div className="mb-1">
        Small
        <IconButton
          icon={FontAwesome.faBars}
          alt="Menu"
          onClick={() => {}}
          variant="primary"
          size="sm"
        />
      </div>
      <div className="mb-1">
        Inline:
        <IconButton
          icon={FontAwesome.faBars}
          alt="Menu"
          onClick={() => {}}
          variant="primary"
          size="inline"
        />
      </div>
      <div className="x-small mb-1">
        An <strong>inline</strong> Icon Button inherits font size!
        For example, applying className="x-small" will make the Icon Button look like this:
        <IconButton
          icon={FontAwesome.faSmile}
          alt="Smile"
          onClick={() => {}}
          variant="primary"
          size="inline"
        />
        . The Icon Button will also wrap with the text as long as it is not a direct child of a flex box.
      </div>
    </>
  );
}
```
