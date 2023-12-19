---
title: 'Bubble'
type: 'component'
components:
  - Bubble
status: 'New'
categories:
  - Status & metadata
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

Represents the filled circle with a number of an icon, supporting the usual color variants

## Basic Usage

```jsx live
() => {
  return (
    <>
      <Stack direction="horizontal" gap={4} className="mb-2">
        <Bubble>1</Bubble>
        <Bubble variant="error">1</Bubble>
        <Bubble variant="warning">1</Bubble>
        <Bubble variant="success">1</Bubble>
      </Stack>
      <Stack direction="horizontal" gap={4} className="mb-2">
        <Bubble>
          <Icon src={Check} />
        </Bubble>
        <Bubble variant="error">
          <Icon src={Check} />
        </Bubble>
        <Bubble variant="warning">
          <Icon src={Check} />
        </Bubble>
        <Bubble variant="success">
          <Icon src={Check} />
        </Bubble>
      </Stack>
    </>
  );
};
```

### Disabled variant

```jsx live
() => {
  return (
    <Stack direction="horizontal" gap={4} className="mb-2">
      <Bubble disabled>1</Bubble>
      <Bubble disabled>
        <Icon src={Check} />
      </Bubble>
    </Stack>
  );
};
```

### Expandable

In the case of long content use `expandable` prop. It adds padding to `Bubble`. Padding value is configurable through `scss` variables.

```jsx live
() => {
  {
    /* start example state */
  }
  const [isExpandable, setIsExpandable] = useState(true);
  {
    /* end example state */
  }

  return (
    <>
      {/* start example form block */}
      <ExamplePropsForm
        inputs={[
          {
            value: isExpandable,
            setValue: () => setIsExpandable(!isExpandable),
            name: 'isExpandable',
          },
        ]}
      />
      {/* end example form block */}
      <Bubble variant="error" expandable={isExpandable}>
        1234
      </Bubble>
    </>
  );
};
```
