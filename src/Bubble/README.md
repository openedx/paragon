---
title: 'Bubble'
type: 'component'
components:
- Bubble
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

Represents the filled circle with a number of an icon, supporting the usual color variants

### Basic Usage

```jsx live
() => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', width: '200px', justifyContent: 'space-between', marginBottom: '10px' }}>
        <Bubble>
          1
        </Bubble>
        <Bubble variant="error">
          1
        </Bubble>
        <Bubble variant="warning">
          1
        </Bubble>
        <Bubble variant="success">
          1
        </Bubble>
        <Bubble disabled>
          1
        </Bubble>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '200px', justifyContent: 'space-between' }}>
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
        <Bubble disabled>
          <Icon src={Check} />
        </Bubble>
      </div>
    </>
  );
}

```
