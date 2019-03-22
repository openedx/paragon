/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-multi-comp */
import React from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered';
import 'bootstrap/scss/utilities/_screenreaders.scss';

import Button from '../Button';
import ListBox from '../ListBox';
import ListBoxOption from '../ListBoxOption';

const fruits = {
  Apple: '🍎',
  Orange: '🍊',
  Strawberry: '🍓',
  Banana: '🍌',
};

class ListBoxWrapperForOnSelect extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);

    this.state = {
      selectedOption: null,
      selectedOptionIndex: null,
    };

    this.fruits = fruits;
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
          {this.state.selectedOptionIndex === undefined ?
            <span className="sr-only">none</span> :
            <span arialabelledby={`list-box-option-${this.state.selectedOptionIndex}`} >
              {this.getSelectedFruitEmoji(this.state.selectedOption)}
            </span>
          }
        </span>
        <ListBox style={{ width: '200px' }}>
          {children}
        </ListBox>
      </React.Fragment>
    );
  }
}

class ListBoxWrapperForSelectedOptionIndex extends React.Component {
  constructor(props) {
    super(props);

    this.onSelect = this.onSelect.bind(this);
    this.onButtonClick = this.onButtonClick.bind(this);

    this.state = {
      reset: true,
    };

    this.fruits = Object.keys(fruits);
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
        <Button
          buttonType="primary"
          label="Click me to reset your selected fruit!"
          onClick={this.onButtonClick}
        />
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

storiesOf('ListBox', module)
  .addDecorator(centered)
  .add('basic usage', () => (
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
  ))
  .add('using tag prop', () => (
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
  ))
  .add('using onSelect prop', () => (
    <ListBoxWrapperForOnSelect />
  ))
  .add('using selectedOptionIndex prop', () => (
    <ListBoxWrapperForSelectedOptionIndex />
  ));

