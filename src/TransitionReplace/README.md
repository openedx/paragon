# Transition Replace

Manages a transition when replacing content. By default this component will transition the height and do a cross-fade. The transition can be customized.

TransitionReplace expects only one child at any time. Swap content inside the component (usually based on some state).

### Usage

```jsx
<TransitionReplace>
  {this.state.isEditing ? (
    <form key="the-form">
      <label htmlFor="name">First Name</label>
      <input type="text" value={name} />
      <button type="submit">Save</button>
    </form>
  ): (
    <div>
      <h4>First Name</h4>
      <p>{name}</p>
    </div>
  )}
</TransitionReplace>
```

**IMPORTANT NOTE: You must provide the `key` prop for all children**, even when only rendering a single item. This is how React will determine that a child is new rather than just updated.

### Custom Transition

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
