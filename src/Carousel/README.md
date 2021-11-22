---
title: 'Carousel'
type: 'component'
components:
- Carousel
- CarouselItem
- CarouselCaption
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
  <a href="https://react-bootstrap.github.io/components/carousel/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

### Basic Usage

```jsx live
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/1600x800/?nature,flower"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/1600x800/?nature,plants"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://source.unsplash.com/1600x800/?nature,fruit"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
```

### Theme Variables (SCSS)

```scss
$carousel-control-color:             $white !default;
$carousel-control-width:             15% !default;
$carousel-control-opacity:           .5 !default;
$carousel-control-hover-opacity:     .9 !default;
$carousel-control-transition:        opacity .15s ease !default;

$carousel-indicator-width:           30px !default;
$carousel-indicator-height:          3px !default;
$carousel-indicator-hit-area-height: 10px !default;
$carousel-indicator-spacer:          3px !default;
$carousel-indicator-active-bg:       $white !default;
$carousel-indicator-transition:      opacity .6s ease !default;

$carousel-caption-width:             70% !default;
$carousel-caption-color:             $white !default;

$carousel-control-icon-width:        20px !default;

$carousel-control-prev-icon-bg:      str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3e%3c/svg%3e"), "#", "%23") !default;
$carousel-control-next-icon-bg:      str-replace(url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='#{$carousel-control-color}' viewBox='0 0 8 8'%3e%3cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3e%3c/svg%3e"), "#", "%23") !default;

$carousel-transition-duration:       .6s !default;
$carousel-transition:                transform $carousel-transition-duration ease-in-out !default;
```