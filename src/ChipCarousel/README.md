---
title: 'ChipCarousel'
type: 'component'
components:
- ChipCarousel
categories:
- Content
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |
---

The ``ChipCarousel`` component creates a scrollable horizontal block of chips with buttons for navigating to the previous and next set of chips.

## Basic Usage

```jsx live
() => {
  const MAX_PERCENTAGE = 100;
  const MAX_FIXED = 1000;
  const [offset, setOffset] = useState(50);
  const [offsetType, setOffsetType] = useState('fixed');
  const [gap, setGap] = useState(3)
  
  const handleChangeOffsetType = (value) => {
    const currentMax = offsetType === 'percentage' ? MAX_PERCENTAGE : MAX_FIXED
    const newMax = value === 'percentage' ? MAX_PERCENTAGE : MAX_FIXED
    const ration = offset / currentMax
    const newOffset = Math.floor(newMax * ration)
    setOffset(newOffset);
    setOffsetType(value);
  }
  
  return (
    <>
      {/* start example form block */}
      <ExamplePropsForm
        inputs={[
          {
            value: offset,
            setValue: setOffset,
            range: {
              min: 0,
              max: offsetType === 'percentage' ? MAX_PERCENTAGE : MAX_FIXED,
              step: offsetType === 'percentage' ? 1 : 50,
            },
            name: 'offset'
          },
          {
            value: offsetType,
            setValue: handleChangeOffsetType,
            options: ['percentage', 'fixed'],
            name: 'offsetType'
          },
          {
            value: gap,
            setValue: setGap,
            range: { min: 0, max: 6, step: 0.5 },
            name: 'gap'
          },
        ]}
      />
      {/* end example form block */}
      <ChipCarousel
        offset={offset}
        offsetType={offsetType}
        ariaLabel="example chip carousel"
        gap={gap}
        items={Array.from({ length: 40 },
          (_, index) => (
            <Chip
              key={`Chip-${index}`}
              onClick={() => console.log(`Chip #${index + 1} clicked`)}
            >
              Chip #{index + 1}
            </Chip>
          )
        )}
      />
    </>
  )
}
```
