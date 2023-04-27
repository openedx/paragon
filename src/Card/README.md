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
- CardStatus
categories:
- Content
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |
  Partially a pass-thru from react-bootstrap, with custom subcomponents.
---

`Card` is a box of related content usually describing a single object. It can be composed of several subcomponents, we give full overview of those subcomponents below.

`Card` supports `vertical` and `horizontal` orientation which is controlled by `CardContext`, see examples below.

This component uses a `Card` from react-bootstrap as a base component and extends it with additional subcomponents. <br/> <a href="https://react-bootstrap.github.io/components/cards/" target="_blank" rel="noopener noreferrer">See React-Bootstrap for additional documentation.</a>

## Basic Usage

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "18rem" }}>
      <Card.ImageCap
        src="https://picsum.photos/360/200/"
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
)}
```

## Card variants

Use `variant` prop to use `Card` specific style variant.

```jsx live
() => {
  const [cardVariant, setCardVariant] = useState('light');
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <>
      {/* start example form block */}
      <ExamplePropsForm
        inputs={[
          { value: cardVariant, setValue: setCardVariant, options: ['light', 'dark', 'muted'], name: 'variant' },
        ]}
      />
      {/* end example form block */}
      
      <Card style={{ width: isExtraSmall ? "100%" : "18rem" }} variant={cardVariant}>
        <Card.ImageCap 
          src="https://picsum.photos/360/200/"
          srcAlt="Card image"
        />
        <Card.Header title="Card Title" />
        <Card.Section>
          This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
        </Card.Section>
        <Card.Footer textElement="Course">
          <Button
            variant={cardVariant === 'dark' ? 'inverse-primary' : 'primary'}
          >
            Action
          </Button>
        </Card.Footer>
      </Card>
    </>
)}
```

## Clickable card

You use `isClickable` prop to add additional `hover` and `focus` styling to the `Card`.

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
        title="Card Title"
      />
      <Card.Section>
        This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Footer>
        <Button>Action 1</Button>
      </Card.Footer>
    </Card>
)};
```

## As link
You can also use `Card` as a link by wrapping it into appropriate component, note that `Card` will override default 
link styling to make its content appear as a regular text.

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Hyperlink destination="https://www.edx.org">
      <Card style={{ width: isExtraSmall ? "100%" : "18rem" }} isClickable>
        <Card.ImageCap
          src="https://picsum.photos/360/200/"
          srcAlt="Card image"
        />
        <Card.Header title="Card Title"/>
        <Card.Section>
          This is a card section. It can contain anything but usually text, a list, or list of links. 
          Multiple sections have a card divider between them.
        </Card.Section>
        <Card.Footer>
          <Button>Action 1</Button>
        </Card.Footer>
      </Card>
    </Hyperlink>
)}
```

## Header
You may add a header by adding a ``Card.Header`` component.
This header displays a title, subtitle, and may contain actions.

```jsx live
<div>
  <Card className="mb-2">
    <Card.Header title="Title" />
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
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <div>
      <Card className="mb-2">
        <Card.Header
          title="Title"
          subtitle="Subtitle"
          isStacked={!!isExtraSmall}
          actions={
            <ActionRow 
              isStacked={!!isExtraSmall}
              style={{  marginBottom: isExtraSmall ? ".5rem" : 0 }}
            >
              <Button variant="tertiary">Action 1</Button>
              <Button>Action 2</Button>
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
)}
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
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card>
      <Card.Section 
        title="Section title"
        actions={
          <ActionRow isStacked={!!isExtraSmall}>
            <Button>Action 1</Button>
            <Button>Action 2</Button>
          </ActionRow>
        }
      >
        This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Divider />
      <Card.Section 
        title="Section"
        actions={
          <ActionRow isStacked={!!isExtraSmall}>
            <Button>Action 1</Button>
            <Button>Action 2</Button>
          </ActionRow>
        }
      >
        This is another section variant.
      </Card.Section>
      <Card.Divider />
      <Card.Section>
        This is a section without title or actions, just content.
      </Card.Section>
    </Card>
)}
```

## Footer

`Card.Footer` is the bottom part of the card. Usually used to outline actions that can be taken on the card object.
Note that `Card.Footer` has a separate `orientation` prop which will override the value from `CardContext`, this was implemented because there are some use cases where you would want to display `Card` with horizontal orientation containing footer with vertical orientation.

### Footer vertical variant

```jsx live
() => {
  const footerLink = <a href='#link'>Footer text as a link</a>;
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <>
      <Card>
        <Card.Footer orientation={isExtraSmall ? "horizontal" : "vertical"}>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
        <Card.Divider />
        <Card.Footer 
          orientation={isExtraSmall ? "horizontal" : "vertical"} 
          textElement="Optional footer text to display"
        >
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
        <Card.Divider />
        <Card.Footer
          orientation={isExtraSmall ? "horizontal" : "vertical"} 
          textElement={footerLink}
        >
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
      <Card style={{ width: isExtraSmall ? "100%" : "40%" }}>
        <Card.Footer textElement="Stacked vertical variant" isStacked>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
    </>
  )
}
```

### Footer horizontal variant

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });
  
  return (
    <Card style={{ width: isExtraSmall ? "100%" : "40%" }}>
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
)}
```

## With Image Cap

`ImageCap` is an image that sits on the top or the left edge of a `Card`. Can contain an optional logo image.

```jsx live

() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "40%" }}>
      <Card.ImageCap
        src="https://picsum.photos/360/200/"
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
)}
```

## Horizontal variant

When using horizontal variant Paragon provides additional component `Card.Body` which acts as a wrapper for content you want to display between `ImageCap` and `Footer`. Use it if content contains multiple components.

```jsx live

() => {
  const isSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });
  
  return (
    <>
      <Card
        className="mb-4" 
        orientation={isSmall ? "vertical" : "horizontal"}
      >
        <Card.ImageCap
          src="https://picsum.photos/360/200/"
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
            Here we want to display both Header and Section between ImageCap and Footer components, so we use Card.
            Body to accomplish that. 
          </Card.Section>
        </Card.Body>
        <Card.Footer orientation={isExtraSmall ? "horizontal" : "vertical"}>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
      <Card className="mb-4" orientation={isSmall ? "vertical" : "horizontal"}>
        <Card.ImageCap
          src="https://picsum.photos/360/200/"
          srcAlt="Card image"
          logoSrc="https://via.placeholder.com/150"
          logoAlt="Card logo"
        />
        <Card.Section 
          title="Section title"
        >
          In this Card we only want to display Section, therefore no need to use Card.Body wrapper.
        </Card.Section>
        <Card.Footer orientation={isExtraSmall ? "horizontal" : "vertical"}>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card>
      <Card orientation={isSmall ? "vertical" : "horizontal"}>
        <Card.ImageCap
          src="https://picsum.photos/360/200/"
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
          <Card.Footer orientation={isExtraSmall ? "horizontal" : "vertical"} textElement="Some footer text">
            <Button>Action 1</Button>
            <Button>Action 2</Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </>
)}
```

## Card status

Note that in the example below, the content of `Card` is wrapped inside `Card.Body`. The `d-flex` class is added for the `horizontal` orientation to achieve horizontal variant. The `flex-column` class is added for the main `Card` component.

```jsx live
() => {
  const [orientation, setOrientation] = useState('vertical');
  const [variant, setVariant] = useState('warning');
  
  const handleChangeOrientation = (e) => setOrientation(e.target.value);
  const handleChangeVariant = (e) => setVariant(e.target.value);
  const isVertical = orientation === 'vertical';
  
  return (
    <>
      {/* start example form block */}
      <ExamplePropsForm
        inputs={[
          { value: orientation, setValue: setOrientation, options: ['horizontal', 'vertical'], name: 'orientation' },
          { value: variant, setValue: setVariant, options: ['primary', 'warning', 'danger', 'success'], name: 'status-variant' },
        ]}
      />
      {/* end example form block */}
      
      <Card orientation={orientation} className={`flex-column ${isVertical ? 'w-50' : ''}`}>
        <Card.Header
          title="Card title"
        />
        <Card.Body className={!isVertical ? 'd-flex' : ''}>
          <Card.Section
            title="Section title"
          >
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This card has even longer content than the first to
            show that equal height action.
          </Card.Section>
          <Card.Footer className={!isVertical ? 'justify-content-end' : ''}>
            <Button>Save</Button>
            <Button variant="danger">Remove</Button>
          </Card.Footer>
        </Card.Body>
        
        <Card.Status icon={Warning} variant={variant}>
          Warning lorem ipsum dolor sit amet
        </Card.Status>
      </Card>
    </>
  );
};
```

## Card Content Block Empty
### With image

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "25rem" }}>
      <Card.ImageCap
        src="https://picsum.photos/360/200/" 
        srcAlt="Card image"
      />
      <Card.Section className="text-center">
        <h2>Headline</h2>
        <p>This is an optional text description.</p>
        <Button variant="brand">Action</Button>
      </Card.Section>
    </Card>
)}
```

### Without image

```jsx live

() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card style={{ width: isExtraSmall ? "100%" : "25rem" }}>
      <Card.Section className="text-center">
        <h2>Headline</h2>
        <p>This is an optional text description.</p>
        <Button variant="brand">Action</Button>
      </Card.Section>
    </Card>
)}
```

### Horizontal variant with image

```jsx live
() => {
  const isSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card orientation={isSmall ? "vertical" : "horizontal"}>
      <Card.ImageCap
        src="https://picsum.photos/360/200/" 
        srcAlt="Card image"
      />
      <Card.Body>
        <Card.Section>
          <h2>Headline</h2>
          <p>This is an optional text description.</p>
        </Card.Section>
      </Card.Body>
      <Card.Footer className="justify-content-end">
        <Button variant="brand">Action</Button>
      </Card.Footer>
    </Card>
)}
```

### Horizontal variant without image

```jsx live
() => {
  const isSmall = useMediaQuery({ maxWidth: breakpoints.small.maxWidth });

  return (
    <Card orientation={isSmall ? "vertical" : "horizontal"}>
      <Card.Section>
        <h2>Headline</h2>
        <p>This is an optional text description.</p>
      </Card.Section>
      <Card.Footer className="justify-content-end">
        <Button variant="brand">Action</Button>
      </Card.Footer>
    </Card>
)}
```
## Fallback Image
### With Fallback custom Image

You can specify `fallbackSrc` image to show in case your main `src` fails to load.
A fallback source is available for both the main `ImageCap` component image and the logo.

```jsx live
() => {
  const isExtraSmall = useMediaQuery({maxWidth: breakpoints.small.maxWidth});

  return (
    <Card style={{width: isExtraSmall ? "100%" : "40%"}}>
      <Card.ImageCap
        src="fakeURL"
        fallbackSrc="https://picsum.photos/360/200/"
        srcAlt="Card image"
        logoSrc="fakeURL"
        fallbackLogoSrc="https://www.edx.org/images/logos/edx-logo-elm.svg"
        logoAlt="Card logo"
      />
      <Card.Header title="Title" subtitle="Subtitle" />
      <Card.Section title="Section title">
        This is a card section. It can contain anything but usually text, a list, or list of links.
        Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Footer>
        <Button>Action 1</Button>
      </Card.Footer>
  </Card>
)}
```

### With default Fallback Image

The default fallback image will be displayed if `fallbackSrc` is not specified.

```jsx live
() => {
  const isExtraSmall = useMediaQuery({maxWidth: breakpoints.small.maxWidth});

  return (
    <Card style={{width: isExtraSmall ? "100%" : "40%"}}>
      <Card.ImageCap 
        src="fakeURL"
        srcAlt="Card image"
        logoSrc="fakeURL"
        fallbackLogoSrc="https://www.edx.org/images/logos/edx-logo-elm.svg"
        logoAlt="Card logo"
      />
      <Card.Header title="Title" subtitle="Subtitle" />
      <Card.Section title="Section title">
        This is a card section. It can contain anything but usually text, a list, or list of links.
        Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Footer>
        <Button>Action 1</Button>
      </Card.Footer>
  </Card>
)}
```

## With loading state
### Vertical variant

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card isLoading style={{ width: isExtraSmall ? "100%" : "18rem" }}>
      <Card.ImageCap
        src="https://picsum.photos/360/200/"
        srcAlt="Card image"
      />
      <Card.Header title="Card Title" />
      <Card.Section>
        This is a card section. It can contain anything but usually text, a list, or list of links. Multiple sections have a card divider between them.
      </Card.Section>
      <Card.Footer>
        <Button>Action 1</Button>
      </Card.Footer>
    </Card>
)}
```

### Horizontal variant

```jsx live
() => {
  const isExtraSmall = useMediaQuery({ maxWidth: breakpoints.extraSmall.maxWidth });

  return (
    <Card isLoading orientation={isExtraSmall ? "vertical" : "horizontal"}>
      <Card.ImageCap
        skeletonHeight={isExtraSmall ? 140 : null}
        src="https://picsum.photos/360/200/"
        srcAlt="Card image"
        logoSrc="https://via.placeholder.com/150"
        logoAlt="Card logo"
      />
      <Card.Body>
        <Card.Header title="Title" />
        <Card.Section title="Section title">
          This is a special case where we want to have Footer with vertical 
          orientation in the Card with horizontal orientation.
        </Card.Section>
        <Card.Footer orientation="vertical" textElement="Some footer text">
          <Button>Action 1</Button>
          <Button>Action 2</Button>
        </Card.Footer>
      </Card.Body>
    </Card>
)}
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
      src="https://picsum.photos/360/200/"
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
    <Card.Footer textElement={<small className="text-muted">Last updated 3 mins ago</small>} />
  </Card>
  <Card>
    <Card.ImageCap
      src="https://picsum.photos/360/200/"
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
    <Card.Footer textElement={<small className="text-muted">Last updated 3 mins ago</small>} />
  </Card>
  <Card>
    <Card.ImageCap
      src="https://picsum.photos/360/200/"
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
    <Card.Footer textElement={<small className="text-muted">Last updated 3 mins ago</small>} />
  </Card>
  <Card>
    <Card.ImageCap
      src="https://picsum.photos/360/200/"
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
    <Card.Footer textElement={<small className="text-muted">Last updated 3 mins ago</small>} />
  </Card>
  <Card>
    <Card.ImageCap
      src="https://picsum.photos/360/200/"
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
    <Card.Footer textElement={<small className="text-muted">Last updated 3 mins ago</small>} />
  </Card>
  <Card>
    <Card.ImageCap
      src="https://picsum.photos/360/200/"
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
    <Card.Footer textElement={<small className="text-muted">Last updated 3 mins ago</small>} />
  </Card>
</CardGrid>
```

## CardDeck

Displays child `Card` components in a horizontal row with equal height and width, with an appropriate gutter between cards. The width of each child `Card` component is determined by the (optional) `columnSizes` prop. If any child `Card` components overflow beyond the parent's width, they will be hidden but accessible via scrolling horizontally or keyboard navigation.

For accessibility, if the child `Card` components are interactive (e.g., `isClickable`), pass the `hasInteractiveChildren` prop so the `CardDeck` itself isn't focusable.

```jsx live
() => {
  const [hasInteractiveChildren, setHasInteractiveChildren] = useState('false');

  const CardComponent = () => (
    <Card isClickable={hasInteractiveChildren === 'true'}>
      <Card.ImageCap
        src="https://picsum.photos/360/200/"
        srcAlt="Card image"
      />
      <Card.Header title="Card title" />
      <Card.Section  title="Section title">
        <HipsterIpsum numShortParagraphs={1} />
      </Card.Section>
    </Card>
  );

  return (
    <>
      {/* start example form block */}
      <ExamplePropsForm
        inputs={[
          {
            value: hasInteractiveChildren,
            setValue: setHasInteractiveChildren,
            options: ['true', 'false'],
            name: 'hasInteractiveChildren',
          },
        ]}
      />
      {/* end example form block */}

      <CardDeck hasInteractiveChildren={hasInteractiveChildren === 'true'}>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </CardDeck>
    </>
  );
}
```

### CardDeck.Deprecated

Gives any child `Card` components equal height with an appropriate gutter between cards. Each child `Card` component's width will be adjusted (e.g., become more narrow) to ensure all `Card` components fit within its parent's width.

Note: This component is a pass-thru from `react-bootstrap`.

```jsx live
() => {
  const CardComponent = () => (
    <Card>
      <Card.ImageCap
        src="https://picsum.photos/360/200/"
        srcAlt="Card image"
      />
      <Card.Header title="Card title" />
      <Card.Section title="Section title">
        <HipsterIpsum numShortParagraphs={1} />
      </Card.Section>
    </Card>
  );

  return (
    <CardDeck.Deprecated>
      <CardComponent />
      <CardComponent />
      <CardComponent />
    </CardDeck.Deprecated>
  )
}
```

## CardCarousel

Extends `CardDeck` to support navigating between any overflow `Card` components via left and right `IconButton` components as a scrollable carousel.

Includes support for an optional `title` and `subtitle`. You may rely on the default styles for the titles (e.g., if passing strings) or alternatively you may also pass custom HTML and JSX.

```jsx live
() => {
  const [canScrollHorizontal, setCanScrollHorizontal] = useState('true');
  const [disableOpacityMasks, setDisableOpacityMasks] = useState('false');
  const [hasOverflowCards, setHasOverflowCards] = useState('true');

  const CardComponent = () => (
    <Card isClickable>
      <Card.ImageCap
        src="https://picsum.photos/360/200/"
        srcAlt="Card image"
      />
      <Card.Header title="Card title" />
      <Card.Section  title="Section title">
        <HipsterIpsum numShortParagraphs={1} />
      </Card.Section>
    </Card>
  );

  const cardItems = useMemo(() => {
    if (hasOverflowCards === 'true') {
      return Array.from({ length: 8 }).map(() => <CardComponent key={uuidv4()} />);
    }
    return Array.from({ length: 2 }).map(() => <CardComponent key={uuidv4()} />);
  }, [hasOverflowCards]);

  return (
    <>
      {/* start example form block */}
      <ExamplePropsForm
        inputs={[
          {
            value: canScrollHorizontal,
            setValue: setCanScrollHorizontal,
            options: ['true', 'false'],
            name: 'canScrollHorizontal',
          },
          {
            value: disableOpacityMasks,
            setValue: setDisableOpacityMasks,
            options: ['true', 'false'],
            name: 'disableOpacityMasks',
          },
          {
            value: hasOverflowCards,
            setValue: setHasOverflowCards,
            options: ['true', 'false'],
            name: 'hasOverflowCards',
          }
        ]}
      />
      {/* end example form block */}

      <CardCarousel
        ariaLabel="example card carousel"
        title={<h3>Recommended for you</h3>}
        subtitle="The following content was picked just for you."
        canScrollHorizontal={canScrollHorizontal === 'true'}
        disableOpacityMasks={disableOpacityMasks === 'true'}
        onScrollPrevious={() => { console.log('onScrollPrevious'); } }
        onScrollNext={() => { console.log('onScrollNext'); } }
      >
        {cardItems}
      </CardCarousel>
    </>
  );
}
```
