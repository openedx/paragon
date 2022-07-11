---
title: 'Skeleton'
type: 'component'
components:
- Skeleton
categories:
- Status & metadata
status: 'New'
designStatus: 'Done'
devStatus: 'Done'
notes: |
  Something special about this component
---

The Skeleton component should be used directly in your components in place of content that is loading. The component is automatically sized to the correct dimensions, you have the ability to customize your skeleton component flexibly.

## Basic Usage

For convenient customization of the loading component, **width** and **height** properties are available, you can also set the number of columns in the displayed Skeleton.

```jsx live
() => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = e => setChecked(e.target.checked);

  const exampleTitle = 'Example title';
  const exampleDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

  return (
    <>
      <Form.Checkbox className="mb-3" checked={isChecked} onChange={handleChange}>
        Loading state
      </Form.Checkbox>
      <h3>{isChecked ? <Skeleton skeletonHeight={30} /> : exampleTitle }</h3>
      {isChecked ? <Skeleton skeletonCount={4} /> : exampleDescription}
    </>
)}
```

## With image

Skeleton is convenient to use with images, including those in a circle format.

```jsx live
() => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = e => setChecked(e.target.checked);

  return (
    <>
      <Form.Checkbox className="mb-3" checked={isChecked} onChange={handleChange}>
        Loading state
      </Form.Checkbox>
      <div>
        {isChecked ? 
          <Skeleton
            skeletonCircle
            skeletonWidth={200}
            skeletonHeight={200}
          /> 
        : <Image
              alt="some image"
              roundedCircle
              src="https://source.unsplash.com/200x200/?nature,flower"
          />}
      </div>
    </>
)}
```
