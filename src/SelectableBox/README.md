---
title: 'SelectableBox'
type: 'component'
components:
- SelectableBox
- SelectableBoxSet
categories:
- Forms
- Content
status: 'New'
designStatus: 'Done'
devStatus: 'In progress'
notes: |
---

A box that has selection states. It can be used as an alternative to a radio button or checkbox set.

The ``SelectableBox`` can contain any kind of content as long as it is not clickable. In other words, there should be no clickable targets distinct from selection.

### Basic Usage

As ``Checkbox``

```jsx live
() => {
  const type = 'checkbox';
  const allCheeseOptions = ['swiss', 'cheddar', 'pepperjack'];
  const [checkedCheeses, { add, remove, set, clear }] = useCheckboxSetValues(['swiss']);

  const handleChange = e => {
    e.target.checked ? add(e.target.value) : remove(e.target.value);
  };
  
  const firstSelectableBox = <div>
    <h3>It is my first SelectableBox</h3>
    <p>Swiss</p>
  </div>;
  
  const isInvalid = () => checkedCheeses.includes('swiss');

  return (
    <SelectableBox.Set
      value={checkedCheeses}
      type={type}
      onChange={handleChange}
      name="cheeses"
    >
      <SelectableBox value="swiss" type={type}>
        {firstSelectableBox}
      </SelectableBox>
      <SelectableBox value="cheddar" inputHidden={false} type={type}>
        Cheddar
      </SelectableBox>
      <SelectableBox
        value="pepperjack"
        inputHidden={false}
        type={type}
        isInvalid={isInvalid()}
      >
        <h3>Pepperjack</h3>
      </SelectableBox>
    </SelectableBox.Set>
  );
}
```

As ``Radio``

```jsx live
() => {
  const type = 'radio';
  const [value, setValue] = useState('green');
  const handleChange = e => setValue(e.target.value);
  
  const firstSelectableBox = <div>
    <h3>It is Red color</h3>
    <p>Select me</p>
  </div>;

  return (
    <SelectableBox.Set
      type={type}
      value={value}
      onChange={handleChange}
      name="colors"
    >
      <SelectableBox value="red" type={type}>
        {firstSelectableBox}
      </SelectableBox>
      <SelectableBox value="green" inputHidden={false} type={type}>
        <h3>Green</h3>
        <p>Leaves and grass</p>
      </SelectableBox>
      <SelectableBox value="blue" inputHidden={false} type={type}>
        <h3>Blue</h3>
        <p>The sky</p>
      </SelectableBox>
    </SelectableBox.Set>
  );
}
```

As ``Checkbox`` with ``isIndeterminate``

```jsx live
() => {
  const type = 'checkbox';
  const allCheeseOptions = ['swiss', 'cheddar', 'pepperjack'];
  const [checkedCheeses, { add, remove, set, clear }] = useCheckboxSetValues(['swiss']);

  const allChecked = allCheeseOptions.every(value => checkedCheeses.includes(value));
  const someChecked = allCheeseOptions.some(value => checkedCheeses.includes(value));
  const isIndeterminate = someChecked && !allChecked;

  const handleChange = e => {
    e.target.checked ? add(e.target.value) : remove(e.target.value);
  };

  const handleCheckAllChange = ({ checked }) => {
    checked ? set(allCheeseOptions) : clear();
  };
  
  const firstSelectableBox = <div>
    <h3>It is my first SelectableBox</h3>
    <p>Swiss</p>
  </div>;

  return (
    <>
      <SelectableBox
        checked={allChecked}
        isIndeterminate={isIndeterminate}
        onClick={handleCheckAllChange}
        inputHidden={false}
        type={type}
      >
        All the cheese
      </SelectableBox>
      <SelectableBox.Set
        value={checkedCheeses}
        type={type}
        onChange={handleChange}
        name="cheeses"
      >
        <SelectableBox value="swiss" type={type}>
          {firstSelectableBox}
        </SelectableBox>
        <SelectableBox value="cheddar" inputHidden={false} type={type}>
          Cheddar
        </SelectableBox>
        <SelectableBox value="pepperjack" inputHidden={false} type={type}>
          <h3>Pepperjack</h3>
        </SelectableBox>
      </SelectableBox.Set>
    </>
  );
}
```