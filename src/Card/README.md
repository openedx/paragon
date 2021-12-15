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
categories:
- Content
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |
  A pass through from react-bootstrap
---

<p className="lead">
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap.github.io/components/cards/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

### Basic Usage

```jsx live
<Card style={{ width: '18rem' }} tabIndex="0">
  <Card.ImageCap 
    src="https://source.unsplash.com/360x200/?nature,flower"
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

### Header
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

#### Actions
The CardHeader supports custom actions via the actions prop and renders them on the top right of the header.

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

#### Sizes
The CardHeader supports two size variants, ``"sm"`` and ``"md"``. 
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

### Section
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

### Footer

`Card.Footer` is the bottom part of the card. Usually used to outline actions that can be taken on the card object.

#### Vertical variant

```jsx live
<>
  <Card>
    <Card.Footer>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </Card.Footer>
    <Card.Divider />
    <Card.Footer text="Optional footer text to display">
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </Card.Footer>
    <Card.Divider />
  </Card>
  <Card style={{width: '40%'}}>
    <Card.Footer text="Stacked vertical variant" isStacked>
      <Button>Action 1</Button>
      <Button>Action 2</Button>
    </Card.Footer>
  </Card>
</>
```

#### Horizontal variant

```jsx live
<Card style={{width: '40%'}}>
  <Card.Footer orientation="horizontal">
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </Card.Footer>
  <Card.Divider />
  <Card.Footer orientation="horizontal" text="Optional footer text to display">
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </Card.Footer>
  <Card.Divider />
  <Card.Footer orientation="horizontal" text="Horizontal stacked variant" isStacked>
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </Card.Footer>
</Card>
```

### With Image Cap

```jsx live
<Card style={{width: '40%'}} tabIndex="0">
  <Card.ImageCap 
    src="https://source.unsplash.com/360x200/?nature,flower"
    logoSrc="https://via.placeholder.com/150"
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

### Horizontal variant

```jsx live
<Card horizontal>
  <Card.ImageCap 
    src="https://source.unsplash.com/360x200/?nature,flower"
    logoSrc="https://via.placeholder.com/150"
  />
  <Card.Body>
    <Card.Header
      title="Title"
      subtitle="Subtitle"
    />
    <Card.Section 
      title="Section title"
    >
      This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
    </Card.Section>
  </Card.Body>
  <Card.Footer>
    <Button>Action 1</Button>
    <Button>Action 1</Button>
  </Card.Footer>
</Card>
```

### CardGrid

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
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Card title"
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
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Card title"
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
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Card title"
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
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Card title"
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
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Card title"
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
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Card title"
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

### CardDeck

This component gives any child Card components equal height with an appropriate gutter between cards. However,
it is meant to be used as a single horizontal row of Cards, not as a grid. See CardGrid for more details.

```jsx live
<CardDeck>
  <Card>
    <Card.ImageCap 
      src="https://source.unsplash.com/360x200/?nature,flower"
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Card title"
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
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Card title"
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
    />
    <Card.Header
      title="Card title"
    />
    <Card.Section 
      title="Card title"
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
