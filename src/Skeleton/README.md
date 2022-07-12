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

``React Skeleton`` component should be used directly in your components in place of content that is loading. 
This tool has the ability to customize loading state your component.
Сan read more about ``React Skeleton`` on the [official documentation repository](https://github.com/dvtng/react-loading-skeleton).

## Basic Usage

For convenient customization of the loading component, **width** and **height** properties are available, 
you can also set the number of columns in the displayed ``React Skeleton``.

```jsx live
() => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = e => setChecked(e.target.checked);

  const exampleTitle = 'Example title';
  const exampleDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
          'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ' +
          'printer took a galley of type and scrambled it to make a type specimen book. It has survived not ' +
          'only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

  return (
    <>
      <Form.Checkbox 
        className="mb-3"
        checked={isChecked}
        onChange={handleChange}
      >
        Show loading state
      </Form.Checkbox>
      <h3>{isChecked ? <Skeleton height={30} /> : exampleTitle}</h3>
      {isChecked ? <Skeleton count={4} /> : exampleDescription}
    </>
)}
```

## With image

``React Skeleton`` is convenient to use with images, including those in a **circle** format.

```jsx live
() => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = e => setChecked(e.target.checked);

  return (
    <>
      <Form.Checkbox
        className="mb-3"
        checked={isChecked}
        onChange={handleChange}
      >
        Show loading state
      </Form.Checkbox>
      <div>
        {isChecked ? 
          <Skeleton
            circle
            width={200}
            height={200}
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

## With color theme

``React Skeleton`` allows you to customize the **background color** and **animation loading color** of your component.
The animation speed can also be adjusted using the parameter **duration** and the animation direction using the property **direction**.

```jsx live
() => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = e => setChecked(e.target.checked);

  const exampleTitle = 'Example title with color theme';
  const exampleDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
          'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ' +
          'printer took a galley of type and scrambled it to make a type specimen book. It has survived not ' +
          'only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';

  return (
    <>
      <Form.Checkbox 
        className="mb-3"
        checked={isChecked}
        onChange={handleChange}
      >
        Show loading state
      </Form.Checkbox>
      <h3>
        {isChecked ? 
          <Skeleton 
            baseColor="lightgrey" 
            highlightColor="darkslategrey" 
            height={30}
            duration={5}
            direction="rtl"
          /> 
          : exampleTitle}
      </h3>
      {isChecked ? 
        <Skeleton 
          baseColor="lightgrey" 
          highlightColor="darkslategrey" 
          count={4}
          duration={5}
          direction="rtl"
        /> 
        : exampleDescription}
    </>
)}
```

## With custom wrapper

By wrapping the ``React Skeleton`` in a container, you can flexibly customize the elements of the skeleton.

```jsx live
() => {
  const [isChecked, setChecked] = useState(false);
  const handleChange = e => setChecked(e.target.checked);

  const exampleTitle = 'Example title with custom wrapper';
  const exampleDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
          'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown ' +
          'printer took a galley of type and scrambled it to make a type specimen book. It has survived not ' +
          'only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.';
  
  const customWrapper = ({ children }) => {
    return (
      <div
        style={{
          border: '1px solid #ccc',
          display: 'block',
          padding: '0.5rem',
          marginBottom: '0.2rem',
        }}
      >
        {children}
      </div>
    )
  }

  return (
    <>
      <Form.Checkbox 
        className="mb-3"
        checked={isChecked}
        onChange={handleChange}
      >
        Show loading state
      </Form.Checkbox>
      <h3>{isChecked ? <Skeleton wrapper={customWrapper} /> : exampleTitle}</h3>
      {isChecked ? <Skeleton wrapper={customWrapper} count={3} /> : exampleDescription}
    </>
)}
```
