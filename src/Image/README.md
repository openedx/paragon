---
title: 'Image'
type: 'component'
categories:
- Imagery & Iconography
- Content
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
    src="https://source.unsplash.com/100x100/?nature,flower"
    rounded
    alt="Image description"
  />
  <Image
    className="mr-2"
    src="https://source.unsplash.com/100x100/?nature,flower"
    roundedCircle
    alt="Image description"
  />
  <Image
    className="mr-2"
    src="https://source.unsplash.com/100x100/?nature,flower"
    thumbnail
    alt="Image description"
  />
</>
```

## Fluid Sizing

```jsx live
<Image src="https://source.unsplash.com/1600x800/?nature,flower" fluid alt="Image description" />
```


