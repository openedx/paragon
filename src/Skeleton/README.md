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
---

`Skeleton` component can be used directly in your components in place of content that is loading.
This tool has the ability to customize loading state of you component.
You can read more about `Skeleton` on the [official documentation repository](https://github.com/dvtng/react-loading-skeleton).

## Basic Usage

For convenient customization of the loading component, **width** and **height** properties are available,
you can also set the number of columns in the displayed `Skeleton`.

```jsx live
() => {
  const [isChecked, setChecked] = useState(true);
  const handleChange = (e) => setChecked(e.target.checked);

  const exampleTitle = 'Example title';
  const exampleDescription =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
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
      <h3>{isChecked ? <Skeleton /> : exampleTitle}</h3>
      {isChecked ? <Skeleton count={4} /> : exampleDescription}
    </>
  );
};
```

## With image

`Skeleton` is convenient to use with images, including those in a **circle** format.

```jsx live
() => {
  const [isChecked, setChecked] = useState(true);
  const handleChange = (e) => setChecked(e.target.checked);

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
        {isChecked ? (
          <Skeleton circle width={200} height={200} />
        ) : (
          <Image
            alt="some image"
            roundedCircle
            src="https://picsum.photos/200/200/"
          />
        )}
      </div>
    </>
  );
};
```

## With custom theme

`Skeleton Theme` allows you to customize the styles of your nested components in a flexible way.
Settings will be passed on to the rest of the `Skeleton` components in the hierarchy.

```jsx live
() => {
  const [isChecked, setChecked] = useState(true);
  const handleChange = (e) => setChecked(e.target.checked);

  const exampleTitle = 'Example title with color theme';
  const exampleDescription =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
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
      <SkeletonTheme
        baseColor="lightgrey"
        highlightColor="darkslategrey"
        duration={5}
        direction="rtl"
      >
        <h3>{isChecked ? <Skeleton /> : exampleTitle}</h3>
        <div>{isChecked ? <Skeleton count={4} /> : exampleDescription}</div>
      </SkeletonTheme>
    </>
  );
};
```

## With custom wrapper

By wrapping the `Skeleton` in a container, you can flexibly customize the elements of the skeleton.

```jsx live
() => {
  const [isChecked, setChecked] = useState(true);
  const handleChange = (e) => setChecked(e.target.checked);

  const exampleTitle = 'Example title with custom wrapper';
  const exampleDescription =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown " +
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
    );
  };

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
      <div>
        {isChecked ? (
          <Skeleton wrapper={customWrapper} count={3} />
        ) : (
          exampleDescription
        )}
      </div>
    </>
  );
};
```
