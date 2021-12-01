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
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://source.unsplash.com/400x200/?nature,flower" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
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
    <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
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
    <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower"  />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://source.unsplash.com/360x200/?nature,flower" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
```
