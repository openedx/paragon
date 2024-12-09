---
title: 'ListBox'
type: 'component'
components:
- ListBox
- ListBoxOption
categories:
- Forms (deprecated)
status: 'Deprecate Soon'
designStatus: 'TBD'
devStatus: 'To Do'
notes: 'Not used anywhere in code on Github. Consult design.'
---

## basic usage

```jsx live
<ListBox>
  <ListBoxOption>
    Apple
  </ListBoxOption>
  <ListBoxOption>
    Orange
  </ListBoxOption>
  <ListBoxOption>
    Strawberry
  </ListBoxOption>
  <ListBoxOption>
    Banana
  </ListBoxOption>
</ListBox>
```

## using tag prop

```jsx live
<React.Fragment>
  <div>This is an ordered list!</div>
  <ListBox tag="ol">
    <ListBoxOption tag="li">
      Apple
    </ListBoxOption>
    <ListBoxOption tag="li">
      <div>Orange</div>
    </ListBoxOption>
    <ListBoxOption tag="li">
      Strawberry
    </ListBoxOption>
    <ListBoxOption tag="li">
      Banana
    </ListBoxOption>
  </ListBox>
</React.Fragment>
```

## using onSelect prop

```jsx live
class ListBoxWrapperForOnSelect extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);

    this.state = {
      selectedOption: null,
      selectedOptionIndex: null,
    };

    this.fruits = {
      Apple: '🍎',
      Orange: '🍊',
      Strawberry: '🍓',
      Banana: '🍌',
    };
  }

  onSelect(option, index) {
    this.setState({
      selectedOption: option,
      selectedOptionIndex: index,
    });
  }

  getSelectedFruitEmoji(fruit) {
    return fruit ? this.fruits[fruit] : '';
  }

  render() {
    const children = Object.keys(this.fruits).map((fruit, index) => (
      <ListBoxOption
        key={fruit}
        onSelect={() => this.onSelect(fruit, index)}
        style={{ textAlign: 'center' }}
      >
        {fruit}
      </ListBoxOption>
    ));

    return (
      <React.Fragment>
        <span aria-live="polite">
          Selected Fruit:
          {this.state.selectedOptionIndex === undefined ? (
            <span className="sr-only">none</span>
          ) : (
            <span
              aria-labelledby={`list-box-option-${
                this.state.selectedOptionIndex
              }`}
            >
              {this.getSelectedFruitEmoji(this.state.selectedOption)}
            </span>
          )}
        </span>
        <ListBox style={{ width: '200px' }}>
          {children}
        </ListBox>
      </React.Fragment>
    );
  }
}
```

## using selectedOptionIndex prop

```jsx live
class ListBoxWrapperForSelectedOptionIndex extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);

    this.state = {
      reset: true,
    };

    this.fruits = Object.keys({
      Apple: '🍎',
      Orange: '🍊',
      Strawberry: '🍓',
      Banana: '🍌',
    });
  }

  onButtonClick() {
    this.setState({
      reset: true,
    });
  }

  onSelect() {
    this.setState({
      reset: false,
    });
  }

  render() {
    const children = this.fruits.map(fruit => (
      <ListBoxOption
        key={fruit}
        onSelect={this.onSelect}
        style={{ textAlign: 'center' }}
      >
        {fruit}
      </ListBoxOption>
    ));

    return (
      <React.Fragment>
        <Button variant="primary" onClick={this.onButtonClick}>
          Click me to reset your selected fruit!
        </Button>
        <ListBox
          selectedOptionIndex={this.state.reset ? null : undefined}
          style={{ margin: '10px' }}
        >
          {children}
        </ListBox>
      </React.Fragment>
    );
  }
}
```
