---
title: 'Card'
type: 'component'
components:
- Card
- CardHeader
- CardGrid
- CardSection
- CardDivider
- CardFooter
- CardBody
- CardImageCap
categories:
- Content
status: 'Stable'
designStatus: 'Done'
devStatus: 'In Progress'
notes: |
  A pass through from react-bootstrap
---

`Card` is a box of related content usually describing a single object. It can be composed of several subcomponents, we give full overview of those subcomponents below.

`Card` supports `vertical` and `horizontal` orientation which is controlled by `CardContext`, see examples below.

This component uses a `Card` from react-bootstrap as a base component and extends it with additional subcomponents. <br/> <a href="https://react-bootstrap.github.io/components/cards/" target="_blank" rel="noopener noreferrer">See React-Bootstrap for additional documentation.</a>

## Basic Usage

```jsx live
<Card style={{ width: '18rem' }}>
  <Card.ImageCap 
    src="https://source.unsplash.com/360x200/?nature,flower"
    srcAlt="Card image"
  />
  <Card.Header
    title="Card Title"
  />
  <Card.Section>
    This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
  </Card.Section>
  <Card.Footer>
    <Button>Action 1</Button>
  </Card.Footer>
</Card>
```

## Clickable variant

You use `isClickable` prop to add additional `hover` and `focus` styling to the `Card`.

```jsx live
<Card style={{ width: '18rem' }} isClickable>
  <Card.ImageCap 
    src="https://source.unsplash.com/360x200/?nature,flower"
    srcAlt="Card image"
  />
  <Card.Header
    title="Card Title"
  />
  <Card.Section>
    This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
  </Card.Section>
  <Card.Footer>
    <Button>Action 1</Button>
  </Card.Footer>
</Card>
```

## Header
You may add a header by adding a ``Card.Header`` component.
This header displays a title, subtitle, and may contain actions.

```jsx live
<div>
  <Card className="mb-2">
    <Card.Header
      title="Title"
    />
  </Card>
  <Card>
    <Card.Header 
      title="Title"
      subtitle="Subtitle"
    />
  </Card>
</div>
```

### Actions
The `Card.Header` supports custom actions via the actions prop and renders them on the top right of the header.

```jsx live
<div>
  <Card className="mb-2">
    <Card.Header
      title="Title"
      subtitle="Subtitle"
      actions={
        <ActionRow>
          <Button variant="tertiary">Action</Button>
          <Button>Action</Button>
        </ActionRow>
      } 
    />
  </Card>
  <Card>
    <Card.Header
      title="Title"
      subtitle="Subtitle"
      actions={
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-toggle-with-iconbutton"
            as={IconButton}
            src={MoreVert}
            iconAs={Icon}
            variant="primary"
            alt="Actions dropdown"
          />
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      }
    />
  </Card>
</div>
```

### Sizes
The `Card.Header` supports two size variants, ``"sm"`` and ``"md"``. 
Add ``size="sm"`` for smaller header content and actions.

```jsx live
<Card>
  <Card.Header
    title="Title"
    subtitle="Subtitle"
    actions={
      <ActionRow>
        <Button>Action</Button>
      </ActionRow>
    }
    size="sm"
  />
</Card>
```

## Section
`Card.Section` is the main block to display card content. Can include its own title and actions separate from other card components. Multiple sections have a `Card.Divider` between them.

```jsx live
<Card>
  <Card.Section 
    title="Section title"
    actions={
      <ActionRow>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </ActionRow>
    }
  >
    This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
  </Card.Section>
  <Card.Divider />
  <Card.Section 
    title="Muted section"
    actions={
      <ActionRow>
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </ActionRow>
    }
    muted
  >
    This is a muted variant.
  </Card.Section>
  <Card.Divider />
  <Card.Section>
    This is a section without title or actions, just content.
  </Card.Section>
</Card>
```

## Footer

`Card.Footer` is the bottom part of the card. Usually used to outline actions that can be taken on the card object.
Note that `Card.Footer` has a separate `orientation` prop which will override the value from `CardContext`, this was implemented because there are some use cases where you would want to display `Card` with horizontal orientation containing footer with vertical orientation.

### Vertical variant

```jsx live
() => {
  const footerLink = <a href='#link'>Footer text as a link</a>;

  return (
    <>
      <Card>
        <Card.Footer>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
        <Card.Divider />
        <Card.Footer textElement="Optional footer text to display">
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
        <Card.Divider />
        <Card.Footer textElement={footerLink}>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
      <Card style={{width: '40%'}}>
        <Card.Footer textElement="Stacked vertical variant" isStacked>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
    </>
  )
}
```

### Horizontal variant

```jsx live
<Card style={{width: '40%'}}>
  <Card.Footer orientation="horizontal">
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </Card.Footer>
  <Card.Divider />
  <Card.Footer orientation="horizontal" textElement="Optional footer text to display">
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </Card.Footer>
  <Card.Divider />
  <Card.Footer orientation="horizontal" textElement="Horizontal stacked variant" isStacked>
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </Card.Footer>
</Card>
```

## With Image Cap

`ImageCap` is an image that sits on the top or the left edge of a `Card`. Can contain an optional logo image.

```jsx live
<Card style={{width: '40%'}}>
  <Card.ImageCap 
    src="https://source.unsplash.com/360x200/?nature,flower"
    srcAlt="Card image"
    logoSrc="https://via.placeholder.com/150"
    logoAlt="Card logo"
  />
  <Card.Header
    title="Title"
    subtitle="Subtitle"
  />
  <Card.Section 
    title="Section title"
  >
    This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
  </Card.Section>
  <Card.Footer>
    <Button>Action 1</Button>
  </Card.Footer>
</Card>
```

## Horizontal variant

When using horizontal variant Paragon provides additional component `Card.Body` which acts as a wrapper for content you want to display between `ImageCap` and `Footer`. Use it if content contains multiple components.

```jsx live
<>
  <Card orientation="horizontal" className="mb-4">
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
      logoSrc="https://via.placeholder.com/150"
      logoAlt="Card logo"
    />
    <Card.Body>
      <Card.Header
        title="Title"
        subtitle="Subtitle"
      />
      <Card.Section 
        title="Section title"
      >
        Here we want to display both Header and Section between ImageCap and Footer components, so we use Card.Body to accomplish that. 
      </Card.Section>
    </Card.Body>
    <Card.Footer>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </Card.Footer>
  </Card>
  <Card orientation="horizontal" className="mb-4">
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
      logoSrc="https://via.placeholder.com/150"
      logoAlt="Card logo"
    />
    <Card.Section 
      title="Section title"
    >
      In this Card we only want to display Section, therefore no need to use Card.Body wrapper.
    </Card.Section>
    <Card.Footer>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </Card.Footer>
  </Card>
  <Card orientation="horizontal">
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
      logoSrc="https://via.placeholder.com/150"
      logoAlt="Card logo"
    />
    <Card.Body>
      <Card.Header
        title="Title"
      />
      <Card.Section 
        title="Section title"
      >
        This is a special case where we want to have Footer with vertical orientation in the Card with horizontal orientation.
      </Card.Section>
      <Card.Footer orientation="vertical" textElement="Some footer text">
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </Card.Footer>
    </Card.Body>
  </Card>
</>
```

## Card Content Block Empty
### With image

```jsx live
<Card style={{ width: '25rem' }}>
  <Card.ImageCap src="https://source.unsplash.com/360x200/?nature,flower" srcAlt="Card image"/>
  <Card.Section className="text-center">
    <h2>Headline</h2>
    <p>This is an optional text description.</p>
    <Button variant="brand">Action</Button>
  </Card.Section>
</Card>
```

### Without image

```jsx live
<Card style={{ width: '25rem' }}>
  <Card.Section className="text-center">
    <h2>Headline</h2>
    <p>This is an optional text description.</p>
    <Button variant="brand">Action</Button>
  </Card.Section>
</Card>
```

### Horizontal variant with image

```jsx live
<Card orientation="horizontal">
  <Card.ImageCap src="https://source.unsplash.com/360x200/?nature,flower" srcAlt="Card image"/>
  <Card.Section>
    <h2>Headline</h2>
    <p>This is an optional text description.</p>
  </Card.Section>
  <Card.Footer className="justify-content-end">
    <Button variant="brand">Action</Button>
  </Card.Footer>
</Card>
```

### Horizontal variant without image

```jsx live
<Card orientation="horizontal">
  <Card.Section>
    <h2>Headline</h2>
    <p>This is an optional text description.</p>
  </Card.Section>
  <Card.Footer className="justify-content-end">
    <Button variant="brand">Action</Button>
  </Card.Footer>
</Card>
```

## Truncated text

### Vertical variant

```jsx live
<Card style={{ width: '18rem' }}>
  <Card.ImageCap 
    src="https://source.unsplash.com/360x200/?nature,flower"
    srcAlt="Card image"
  />
  <Card.Header
    title="This is a card header. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them."
    subtitle="Multiple sections have a card divider between them."
    maxLineSubTitle={2}
  />
  <Card.Section
    title="This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them."
    maxLineTitle={2}
  >
    This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
  </Card.Section>
  <Card.Footer>
    <Button>Action 1</Button>
  </Card.Footer>
</Card>
```
### Horizontal variant

```jsx live
  <Card orientation="horizontal">
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
      logoSrc="https://via.placeholder.com/150"
      logoAlt="Card logo"
    />
    <Card.Body>
      <Card.Header
        title="This is a special case where we want to have Footer with vertical orientation in the Card with horizontal orientation. This is a special case where we want to have Footer with vertical orientation in the Card with horizontal orientation."
      />
      <Card.Section 
        title="This is a special case where we want to have Footer with vertical orientation in the Card with horizontal orientation. This is a special case where we want to have Footer with vertical orientation in the Card with horizontal orientation."
      >
        This is a special case where we want to have Footer with vertical orientation in the Card with horizontal orientation.
      </Card.Section>
      <Card.Footer orientation="vertical" textElement="This is a special case where we want to have Footer with vertical orientation in the Card with horizontal orientation. This is a special case where we want to have Footer with vertical orientation in the Card with horizontal orientation."
      >
        <Button>Action 1</Button>
        <Button>Action 2</Button>
      </Card.Footer>
    </Card.Body>
  </Card>
```

## CardGrid

This component displays a collection of Cards as a grid (with customizable responsive behavior), where
all cards in a given row have equal height. Try shrinking the width of your browser to view the responsive
behavior.

```jsx live
<CardGrid
  columnSizes={{
    xs: 12,
    lg: 6,
    xl: 4,
  }}
>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This content is a little bit longer.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This content is a little bit longer.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGrid>
```

## CardDeck

This component gives any child Card components equal height with an appropriate gutter between cards. However,
it is meant to be used as a single horizontal row of Cards, not as a grid. See CardGrid for more details.

```jsx live
<CardDeck>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This content is a little bit longer.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
      srcAlt="Card image"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Section title"
    >
      This is a wider card with supporting text below as a natural lead-in to 
      additional content. This card has even longer content than the first to 
      show that equal height action.
    </Card.Section>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
```
