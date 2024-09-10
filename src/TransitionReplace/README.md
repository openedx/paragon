---
title: 'TransitionReplace'
type: 'component'
components:
- TransitionReplace
categories:
- Choreography
status: 'Stable'
designStatus: 'Done'
devStatus: 'Done'
notes: ''
---

Manages a transition when replacing content. By default, this component will transition the height and do a cross-fade. The transition can be customized.

TransitionReplace expects only one child at any time. Swap content inside the component (usually based on some state).

## Basic usage

```jsx live
() => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <TransitionReplace className="mb-3">
        {isEditing ? (
          <Form.Group>
            <Form.Label>First Name</Form.Label>
            <Form.Control value="some name" />
          </Form.Group>
        ) : (
          <div key="other">
            <h4 className="mt-0">First Name</h4>
            <p>Some name</p>
            <p>Some description text.</p>
          </div>
        )}
      </TransitionReplace>
      <Button variant="primary" onClick={() => setIsEditing(!isEditing)}>
        Toggle
      </Button>
    </div>
  );
};
```

**IMPORTANT NOTE: You must provide the `key` prop for all children**, even when only rendering a single item. This is how React will determine that a child is new rather than just updated.

## Custom Transition

TransitionReplace uses [CSSTransition from the ReactTransitionGroup package](http://reactcommunity.org/react-transition-group/css-transition). The `transitionClassNames` prop is a pass-through to CSSTransitions's `classNames` prop. You can use this to change the crossfade animation. By default this value is `pgn__transition-replace` and the cross-fade is defined as below:

```css
.pgn__transition-replace-enter {
  opacity: 0;
}
.pgn__transition-replace-enter-active {
  opacity: 1;
  z-index: 1;
  transition: opacity 300ms ease;
}
.pgn__transition-replace-exit {
  opacity: 1;
}
.pgn__transition-replace-exit-active {
  opacity: 0;
  transition: opacity 300ms ease;
}
```

If you change the timing in CSS you should also match it using the `enterDuration` and `exitDuration` props.

### Note:

Children are not required. When this component is empty, the a child inserted into it will not transition the height (from zero). No "replacement" transition will occur and new content will pop in like a normal insert. This behaviour makes it easier to work with asyncronously loaded content (for example: during the first load you don't have to do any special handling).

### Custom transition example usage

```jsx live
function DemoTransitionReplace() {
  const contentOptions = [
    <blockquote className="h2 m-0" key={0}>
      <p>
        You know the golden rule, don’t you boy? Those who have the gold make
        the rules.
      </p>
      <footer>— Crazy hunch-backed old guy in Aladdin</footer>
    </blockquote>,
    <blockquote className="m-0" key={1}>
      <p>People say nothing is impossible, but I do nothing every day.</p>
      <footer>— A. A. Milne</footer>
    </blockquote>,
    <blockquote className="h2 m-0" key={2}>
      <p>
        I won’t go into a big spiel about reincarnation, but the first time I
        was in the Gucci store in Chicago was the closest I’ve ever felt to
        home.
      </p>
      <footer>— Kanye</footer>
    </blockquote>,
    <blockquote className="m-0" key={3}>
      <p>The first time I see a jogger smiling, I’ll consider it.</p>
      <footer>— Joan Rivers</footer>
    </blockquote>,
  ];

  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const changeContent = () => {
    setCurrentContentIndex((currentContentIndex + 1) % contentOptions.length);
  };

  return (
    <div>
      <Button variant="primary" className="mb-2" onClick={changeContent}>
        Next Quote
      </Button>
      <div
        style={{
          background: '#eee',
          padding: '1rem',
          maxWidth: '15rem',
        }}
      >
        <TransitionReplace>
          {contentOptions[currentContentIndex]}
        </TransitionReplace>
      </div>
    </div>
  );
}
```
