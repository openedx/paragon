---
title: 'IconButton'
type: 'component'
components:
- IconButton
- IconButtonWithTooltip
categories:
- Buttonlike
tabName: 'implementation'
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

## Basic Usage with Paragon Icon

```jsx live
() => {
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark", "black"];
  return (
    <div className="d-flex flex-wrap">
      {variants.map((variant) => (
        <IconButton key={variant} src={Close} iconAs={Icon} alt="Close" onClick={() => {}} variant={variant} className="mr-2" />
      ))}
    </div>
  );
}
```

## With tooltips

```jsx live
() => {
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark", "black"];
  return (
    <div className="d-flex">
      {variants.map((variant) => (
        <IconButtonWithTooltip
          key={variant}
          tooltipPlacement='top'
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

## Active State

```jsx live
() => {
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark", "black"];
  return (
    <div className="d-flex">
      {variants.map((variant) => (
        <IconButton 
          isActive
          key={variant}
          src={Close}
          iconAs={Icon}
          alt="Close"
          onClick={() => {}}
          variant={variant}
          className="mr-2 mb-2"
        />
      ))}
    </div>
  );
}
```

### isActive=true with inverted colors

```jsx live
() => {
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark", "black"];
  return (
    <div className="d-flex">
      {variants.map((variant) => (
        <IconButton 
          invertColors
          isActive
          key={variant}
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


## Inverted Colors

```jsx live
<div className="d-flex">
  <div className="p-1 bg-brand">
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
      alt="Menu"
      onClick={() => console.log("You clicked the menu button")}
      variant="brand"
      invertColors
    />
  </div>
  <div className="p-1 bg-primary">
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
      alt="Menu"
      onClick={() => console.log("You clicked the menu button")}
      variant="primary"
      invertColors
    />
  </div>
  <div className="p-1 bg-secondary">
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
      alt="Menu"
      onClick={() => console.log("You clicked the menu button")}
      variant="secondary"
      invertColors
    />
  </div>
  <div className="p-1 bg-success">
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
      alt="Menu"
      onClick={() => console.log("You clicked the menu button")}
      variant="success"
      invertColors
    />
  </div>
  <div className="p-1 bg-warning">
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
      alt="Menu"
      onClick={() => console.log("You clicked the menu button")}
      variant="warning"
      invertColors
    />
  </div>
  <div className="p-1 bg-danger">
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
      alt="Menu"
      onClick={() => console.log("You clicked the menu button")}
      variant="danger"
      invertColors
    />
  </div>
  <div className="p-1 bg-light">
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
      alt="Menu"
      onClick={() => console.log("You clicked the menu button")}
      variant="light"
      invertColors
    />
  </div>
  <div className="p-1" style={{ background: "black" }}>
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
      alt="Menu"
      onClick={() => console.log("You clicked the menu button")}
      variant="black"
      invertColors
    />
  </div>
</div>
```

## Sizes

```jsx live
<>
  <div className="mb-1">
    Small
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
      alt="Menu"
      onClick={() => {}}
      variant="primary"
      size="sm"
    />
  </div>
  <div className="mb-1">
    Inline:
    <IconButton
      src={MenuIcon}
      iconAs={Icon}
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
      src={Favorite}
      iconAs={Icon}
      alt="Favorite"
      onClick={() => {}}
      variant="primary"
      size="inline"
    />
    . The Icon Button will also wrap with the text as long as it is not a direct child of a flex box.
  </div>
</>
```
