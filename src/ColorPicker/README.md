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
  const [colorSm, setColorSm] = useState('');
  const [colorMd, setColorMd] = useState('');

  return (
    <div className="d-flex bg-light p-2" style={{ columnGap: '1rem' }}>
      <ColorPicker color={colorSm} setColor={setColorSm} size="sm" />
      <ColorPicker color={colorMd} setColor={setColorMd} size="md" />
    </div>
  );
};
```

### With good and malformatted default color passed

```jsx live
() => {
  const [color, setColor] = useState('#32116c');
  const [colorBad, setColorBad] = useState('#badcolor');

  return (
    <div className="d-flex bg-light p-2" style={{ columnGap: '1rem' }}>
      <ColorPicker color={color} setColor={setColor} />
      <ColorPicker color={colorBad} setColor={setColorBad} />
    </div>
  );
};
```
