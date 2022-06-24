/* eslint-disable react/button-has-type */
import React from 'react';
import { mount } from 'enzyme';
import useCheckboxSetValues from '../useCheckboxSetValues';

function Example() {
  const [values, {
    add, remove, set, clear,
  }] = useCheckboxSetValues(['cheddar']);
  return (
    <>
      <span id="values">{values.join(' ')}</span>
      <button id="add" onClick={() => add('provolone')}>Add</button>
      <button id="remove" onClick={() => remove('provolone')}>Add</button>
      <button id="set" onClick={() => set(['cheddar', 'swiss', 'provolone'])}>Add</button>
      <button id="clear" onClick={() => clear()}>Add</button>
    </>
  );
}

describe('useCheckboxSetValues', () => {
  const wrapper = mount(<Example />);

  const getValues = () => {
    const valueStr = wrapper.find('#values').first().text();
    if (valueStr === '') {
      return [];
    }
    return valueStr.split(' ');
  };

  const addButton = wrapper.find('#add').first();
  const removeButton = wrapper.find('#remove').first();
  const setButton = wrapper.find('#set').first();
  const clearButton = wrapper.find('#clear').first();

  it('has a default value', () => {
    const values = getValues();
    expect(values).toEqual(['cheddar']);
  });

  it('can append a value', () => {
    addButton.simulate('click');
    const values = getValues();
    expect(values).toEqual(['cheddar', 'provolone']);
  });

  it('can remove a value', () => {
    removeButton.simulate('click');
    const values = getValues();
    expect(values).toEqual(['cheddar']);
  });

  it('can replace all values', () => {
    setButton.simulate('click');
    const values = getValues();
    expect(values).toEqual(['cheddar', 'swiss', 'provolone']);
  });

  it('can clear all values', () => {
    clearButton.simulate('click');
    const values = getValues();
    expect(values).toEqual([]);
  });
});
