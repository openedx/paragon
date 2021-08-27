---
title: 'Card'
type: 'component'
components:
- Card
- CardGrid
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

### CardSelect

This component displays a collection of Cards in a radio selectable form.

```jsx live
<CardSelect
  cardsData={[
    {name: "card1", title: "Lorem Ipsum 1", textElements: [{className: "", text: "Card Text1"}, {className: "", text: "Card SubText1"}], footer: "Card Footer1", img: "https://source.unsplash.com/360x200/?nature,flower"},
    {name: "card2", title: "Lorem Ipsum 2", textElements: [{className: "", text: "Card Text2"}, {className: "", text: "Card SubText2"}], footer: "Card Footer2", img: "https://source.unsplash.com/360x200/?nature"},
    {name: "card3", title: "Lorem Ipsum 3", textElements: [{className: "", text: "Card Text3"}, {className: "", text: "Card SubText3"}], footer: "Card Footer3", img: "https://source.unsplash.com/360x200"}]}
  selectedCardName="card3"
>
</CardSelect>
```

### Theme variables (SCSS)

```scss
$card-spacer-y:                     .75rem !default;
$card-spacer-x:                     1.25rem !default;
$card-border-width:                 $border-width !default;
$card-border-radius:                $border-radius !default;
$card-border-color:                 rgba($black, .125) !default;
$card-inner-border-radius:          subtract($card-border-radius, $card-border-width) !default;
$card-cap-bg:                       rgba($black, .03) !default;
$card-cap-color:                    null !default;
$card-height:                       null !default;
$card-color:                        null !default;
$card-bg:                           $white !default;

$card-img-overlay-padding:          1.25rem !default;

$card-group-margin:                 $grid-gutter-width / 2 !default;
$card-deck-margin:                  $card-group-margin !default;
$card-grid-margin:                  $card-group-margin !default;

$card-columns-count:                3 !default;
$card-columns-gap:                  1.25rem !default;
$card-columns-margin:               $card-spacer-y !default;
```
