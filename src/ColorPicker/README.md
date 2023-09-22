---
title: 'ColorPicker'
type: 'component'
components:
- ColorPicker
categories:
- Imagery & Iconography
status: 'In progress'
designStatus: 'In progress'
devStatus: 'In progress'
notes: |
---

### Basic Usage

```jsx live
() => {
  const [colorSm, setColorSm] = useState('#60c6b5')
  const [colorMd, setColorMd] = useState('#ea0000')

  return (
  <div className="d-flex bg-light p-2" style={{ columnGap: '1rem' }}>
    <ColorPicker color={colorSm} setColor={setColorSm} size="sm" />
    <ColorPicker color={colorMd} setColor={setColorMd} size="md" />
  </div>
  )
}
```
### With good and malformatted default color passed

Input Requirement for the `ColorPicker`  
For the `ColorPicker` to function correctly, please ensure you provide a valid hexadecimal color value.  

Valid Format: `#rrggbb`  

-  `rr`, `gg`, `bb` represent two-digit hexadecimal numbers (ranging from `00` to `FF`).  
  
Note:
-  *Passing an empty string or a malformatted value will trigger an error in the color picker modal. Always ensure your input matches the correct format.*

```jsx live

() => {
  const [color, setColor] = useState('')
  const [colorBad, setColorBad] = useState('#badcolor')

  return (
  <div className="d-flex bg-light p-2" style={{ columnGap: '1rem' }}>
    <ColorPicker color={color} setColor={setColor} />
    <ColorPicker color={colorBad} setColor={setColorBad} />
  </div>
  )
}
```

