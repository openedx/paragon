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
  <a href="https://react-bootstrap-v4.netlify.app/components/carousel/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

## Basic Usage

```jsx live
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://picsum.photos/1600/800/"
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
      src="https://picsum.photos/1600/800/"
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
      src="https://picsum.photos/1600/800/"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
```
