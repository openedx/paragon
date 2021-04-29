---
title: 'IconButton'
type: 'component'
components:
- IconButton
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
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark"];
  return (
    <div className="d-flex">
      {variants.map((variant) => (
        <IconButton src={Close} iconAs={Icon} alt='Close' onClick={() => {}} variant={variant} className="mr-2" />
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
      <IconButton className="mr-2" icon={icon} alt='Close' onClick={() => {}} variant="brand" />
      <IconButton className="mr-2" icon={icon} alt='Close' onClick={() => {}} variant="primary" />
      <IconButton className="mr-2" icon={icon} alt='Close' onClick={() => {}} variant="secondary" />
      <IconButton className="mr-2" icon={icon} alt='Close' onClick={() => {}} variant="success" />
      <IconButton className="mr-2" icon={icon} alt='Close' onClick={() => {}} variant="warning" />
      <IconButton className="mr-2" icon={icon} alt='Close' onClick={() => {}} variant="danger" />
      <IconButton className="mr-2" icon={icon} alt='Close' onClick={() => {}} variant="light" />
      <IconButton className="mr-2" icon={icon} alt='Close' onClick={() => {}} variant="dark" />
    </div>
  );
}
```

### Inverted Colors

```jsx live
() => {
  const icon = FontAwesome.faBars;
  const variants = ["brand", "primary", "secondary", "success", "warning", "danger", "light", "dark"];

  return (
    <div className="d-flex">
      {variants.map((variant) => {
        return (
          <div class={`bg-${variant} p-1`}>
            <IconButton
              key={variant}
              icon={icon}
              alt='Menu'
              onClick={() => console.log("You clicked the menu button")}
              variant={variant}
              invertColors
            />
          </div>
        );
      })}
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
          alt='Menu'
          onClick={() => {}}
          variant="primary"
          size="sm"
        />
      </div>
      <div className="mb-1">
        Inline: 
        <IconButton
          icon={FontAwesome.faBars}
          alt='Menu'
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
          alt='Smile'
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
