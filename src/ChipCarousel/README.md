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

``ChipCarousel`` component creates a scrollable horizontal block of chips with buttons for navigating to the previous and next set of chips.

## Basic Usage

```jsx live
() => {
  const [offset, setOffset] = useState(120);
  const [offsetType, setOffsetType] = useState('fixed');
  const [gap, setGap] = useState(3)
  
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
              max: offsetType === 'percentage' ? 100 : 1000,
              step: offsetType === 'percentage' ? 1 : 50,
            },
            name: 'offset'
          },
          {
            value: offsetType,
            setValue: setOffsetType,
            options: ['percentage', 'fixed'],
            name: 'offsetType'
          },
          {
            value: gap,
            setValue: setGap,
            range: { min: 0, max: 6, step: 0.5 },
            name: 'offset'
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
