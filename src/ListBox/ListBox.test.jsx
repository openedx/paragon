import React from 'react';
import { shallow } from 'enzyme';

import ListBox from './index';
import ListBoxOption from '../ListBoxOption';

describe('ListBox', () => {
  const listBox = (
    <ListBox>
      <ListBoxOption>test1</ListBoxOption>
      <ListBoxOption>test2</ListBoxOption>
      <ListBoxOption>test3</ListBoxOption>
    </ListBox>
  );

  let wrapper;

  describe('rendering', () => {
    it('should have null aria-activedescendant attribute by default', () => {
      wrapper = shallow(listBox);

      expect(wrapper.prop('aria-activedescendant')).toEqual(null);
    });

    it('should have correct aria-activedescendant attribute when selectedOptionIndex state is non-null', () => {
      wrapper = shallow(listBox);

      const selectedOptionIndex = 1;

      wrapper.setState({
        selectedOptionIndex,
      });

      expect(wrapper.prop('aria-activedescendant')).toEqual(`list-box-option-${selectedOptionIndex}`);
    });

    it('selectedOptionIndex prop should override selectedOptionIndex state', () => {
      wrapper = shallow(listBox);

      wrapper.setState({
        selectedOptionIndex: 1,
      });

      const selectedOptionIndex = 2;

      wrapper.setProps({
        selectedOptionIndex,
      });

      expect(wrapper.prop('aria-activedescendant')).toEqual(`list-box-option-${selectedOptionIndex}`);
    });

    it('should render a div by default', () => {
      wrapper = shallow(listBox);
      expect(wrapper.find('div')).toHaveLength(1);
    });

    it('should render an HTML element when passed tag prop is an HTML element', () => {
      wrapper = shallow(listBox);

      wrapper.setProps({
        tag: 'li',
      });

      expect(wrapper.find('div')).toHaveLength(0);
      expect(wrapper.find('li')).toHaveLength(1);
    });

    it('should have correct default classNames', () => {
      wrapper = shallow(listBox);

      expect(wrapper.prop('className')).toEqual(expect.stringContaining('list-group'));
    });

    it('should have listbox role', () => {
      wrapper = shallow(listBox);

      expect(wrapper.prop('role')).toEqual('listbox');
    });

    it('should have 0 tabIndex', () => {
      wrapper = shallow(listBox);

      expect(wrapper.prop('tabIndex')).toEqual(0);
    });
  });
  describe('behavior', () => {
    it('should select first ListBoxOption on focus if not ListBoxOption selected', () => {
      wrapper = shallow(listBox);

      wrapper.simulate('focus');
      expect(wrapper.state('selectedOptionIndex')).toEqual(0);
    });

    it('should not select first ListBoxOption on focus if ListBoxOption selected', () => {
      wrapper = shallow(listBox);

      wrapper.setState({
        selectedOptionIndex: 1,
      });

      wrapper.simulate('focus');
      expect(wrapper.state('selectedOptionIndex')).toEqual(1);
    });

    it('should select next ListBoxOption on down arrow key', () => {
      wrapper = shallow(listBox);

      wrapper.simulate('focus');
      wrapper.simulate('keyDown', { key: 'ArrowDown', preventDefault() { } });

      expect(wrapper.state('selectedOptionIndex')).toEqual(1);
    });

    it('should not select next ListBoxOption on down arrow key if at end of list', () => {
      wrapper = shallow(listBox);

      wrapper.simulate('focus');

      wrapper.setState({
        selectedOptionIndex: 2,
      });

      wrapper.simulate('keyDown', { key: 'ArrowDown', preventDefault() { } });

      expect(wrapper.state('selectedOptionIndex')).toEqual(2);
    });

    it('should select previous ListBoxOption on up arrow key', () => {
      wrapper = shallow(listBox);

      wrapper.simulate('focus');

      wrapper.setState({
        selectedOptionIndex: 1,
      });

      wrapper.simulate('keyDown', { key: 'ArrowUp', preventDefault() { } });

      expect(wrapper.state('selectedOptionIndex')).toEqual(0);
    });

    it('should not select previous ListBoxOption on up arrow key if at start of list', () => {
      wrapper = shallow(listBox);

      wrapper.simulate('focus');
      wrapper.simulate('keyDown', { key: 'ArrowUp', preventDefault() { } });

      expect(wrapper.state('selectedOptionIndex')).toEqual(0);
    });

    it('should not change ListBoxOption selection on non supported key', () => {
      wrapper = shallow(listBox);

      wrapper.simulate('focus');
      wrapper.simulate('keyDown', { key: 'leftArrow', preventDefault() { } });

      expect(wrapper.state('selectedOptionIndex')).toEqual(0);
    });

    it('should update state when child\'s onSelect is called', () => {
      wrapper = shallow(listBox);

      wrapper.find(ListBoxOption).at(1).dive().simulate('mouseDown');

      expect(wrapper.state('selectedOptionIndex')).toEqual(1);
    });
  });
});
