---
title: 'Image'
type: 'component'
categories:
- Imagery & Iconography
components:
- Image
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: |

---

<p className="lead">
  This is a pass through component from React-Bootstrap.<br/>
  <a href="https://react-bootstrap.github.io/components/images/" target="_blank" rel="noopener noreferrer">
    See React-Bootstrap for documentation.
  </a>
</p>

## Basic Styles

```jsx live
<>
  <Image
    className="mr-2"
    src="https://picsum.photos/100/100/"
    rounded
    alt="Image description"
  />
  <Image
    className="mr-2"
    src="https://picsum.photos/100/100/"
    roundedCircle
    alt="Image description"
  />
  <Image
    className="mr-2"
    src="https://picsum.photos/100/100/"
    thumbnail
    alt="Image description"
  />
</>
```

## Fluid Sizing

```jsx live
<Image src="https://picsum.photos/1600/800/" fluid alt="Image description" />
```


