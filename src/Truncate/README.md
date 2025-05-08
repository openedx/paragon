---
title: 'Truncate'
type: 'component'
components:
- Truncate
categories:
- Content
status: 'Deprecate Soon'
designStatus: 'Done'
devStatus: 'Done'
notes: |
  Plan to replace with native css implementation as per https://github.com/openedx/paragon/issues/3311
---

A Truncate component can help you crop multiline text. There will be three dots at the end of the text.

## Basic Usage

```jsx live
  <Truncate.Deprecated lines={2}>
    Learners, course teams, researchers, developers: the edX community includes groups with a range of reasons 
    for using the platform and objectives to accomplish. To help members of each group learn about what edX 
    offers, reach goals, and solve problems, edX provides a variety of information resources.
    Learners, course teams, researchers, developers: the edX community includes groups with a range of reasons
    for using the platform and objectives to accomplish. To help members of each group learn about what edX
    offers, reach goals, and solve problems, edX provides a variety of information resources.
  </Truncate.Deprecated>
```

### With the custom ellipsis

```jsx live
    <Truncate.Deprecated lines={2} ellipsis="🎉🎉🎉" whiteSpace>
        Learners, course teams, researchers, developers: the edX community includes groups with a range of reasons
        for using the platform and objectives to accomplish. To help members of each group learn about what edX
        offers, reach goals, and solve problems, edX provides a variety of information resources.
    </Truncate.Deprecated>
```

### With the onTruncate

```jsx live
    <Truncate.Deprecated lines={2} onTruncate={() => console.log('onTruncate')}>
        Learners, course teams, researchers, developers: the edX community includes groups with a range of reasons
        for using the platform and objectives to accomplish. To help members of each group learn about what edX
        offers, reach goals, and solve problems, edX provides a variety of information resources.
    </Truncate.Deprecated>
```

### Example usage in Card

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });
  
  return (
    <Card style={{ width: isExtraSmall ? "100%" : "18rem" }} isClickable>
      <Card.ImageCap
        src="https://picsum.photos/360/200/"
        srcAlt="Card image"
      />
      <Card.Header
        title={
          <Truncate.Deprecated lines={2}>
            Using Enhanced Capabilities In Your Course
          </Truncate.Deprecated>}
      />
      <Card.Section>
        <Truncate.Deprecated lines={4}>
          Learners, course teams, researchers, developers: the edX community includes groups with a range of reasons
          for using the platform and objectives to accomplish. To help members of each group learn about what edX
          offers, reach goals, and solve problems, edX provides a variety of information resources.
        </Truncate.Deprecated>
      </Card.Section>
      <Card.Footer
        textElement={
          <Truncate.Deprecated lines={2}>
            Using Enhanced Capabilities In Your Course
          </Truncate.Deprecated>}
      >
        <Button style={{ minWidth: 100 }}>Action 1</Button>
      </Card.Footer>
    </Card>
  )
}
```

### HTML markdown support

**Note**: `Truncate` supports only plain `HTML` children and not `jsx`.

```jsx live
<Truncate.Deprecated lines={1}>
  <a href="#">Learners</a>, course teams, researchers, developers: the edX community includes <strong class="strong-class"><i class="i-class">groups with <u>a range</u> of <q>reasons</q></i></strong> for using the platform and objectives to accomplish.
</Truncate.Deprecated>
```
