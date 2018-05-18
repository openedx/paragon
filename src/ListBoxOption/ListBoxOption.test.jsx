import React from 'react';
import { shallow } from 'enzyme';

import ListBoxOption from './index';

describe('ListBoxOption', () => {
  const listBoxOptionChild = 'test';
  const listBoxOption = (
    <ListBoxOption>{listBoxOptionChild}</ListBoxOption>
  );

  let wrapper;

  describe('rendering', () => {
    it('should have false aria-selected attribute by default', () => {
      wrapper = shallow(listBoxOption);

      expect(wrapper.prop('aria-selected')).toEqual(false);
    });

    it('should have false aria-selected attribute when isSelected prop is false', () => {
      wrapper = shallow(listBoxOption);

      wrapper.setProps({
        isSelected: false,
      });

      expect(wrapper.prop('aria-selected')).toEqual(false);
    });

    it('should have true aria-selected attribute when isSelected prop is true', () => {
      wrapper = shallow(listBoxOption);

      wrapper.setProps({
        isSelected: true,
      });

      expect(wrapper.prop('aria-selected')).toEqual(true);
    });

    it('should render a div by default', () => {
      wrapper = shallow(listBoxOption);

      expect(wrapper.find('div')).toHaveLength(1);
    });

    it('should render an HTML element when tag prop is an HTML element', () => {
      wrapper = shallow(listBoxOption);

      wrapper.setProps({
        tag: 'li',
      });

      expect(wrapper.find('div')).toHaveLength(0);
      expect(wrapper.find('li')).toHaveLength(1);
    });

    it('should have correct default classNames', () => {
      wrapper = shallow(listBoxOption);

      expect(wrapper.prop('className')).toEqual(expect.stringContaining('list-group-item'));
      expect(wrapper.prop('className')).toEqual(expect.stringContaining('list-group-item-action'));
    });

    it('should not have active className by default', () => {
      wrapper = shallow(listBoxOption);

      expect(wrapper.prop('className')).not.toEqual(expect.stringContaining('active'));
    });

    it('should have correct default id', () => {
      wrapper = shallow(listBoxOption);

      expect(wrapper.prop('id')).toBeNull();
    });

    it('should have correct id when index prop is a number', () => {
      wrapper = shallow(listBoxOption);

      const index = 1;

      wrapper.setProps({
        index,
      });

      expect(wrapper.prop('id')).toEqual(`list-box-option-${index}`);
    });

    it('should have option role', () => {
      wrapper = shallow(listBoxOption);

      expect(wrapper.prop('role')).toEqual('option');
    });

    it('should have active className when isSelected prop is true', () => {
      wrapper = shallow(listBoxOption);

      wrapper.setProps({
        isSelected: true,
      });

      expect(wrapper.prop('className')).toEqual(expect.stringContaining('active'));
    });
  });
  describe('behavior', () => {
    it('should call onSelect on mouse down', () => {
      wrapper = shallow(listBoxOption);
      const onSelectSpy = jest.fn();

      wrapper.setProps({
        onSelect: onSelectSpy,
      });

      wrapper.simulate('mouseDown');
      expect(onSelectSpy).toHaveBeenCalledTimes(1);
    });

    it('should call onSelect when receiving new isSelected prop', () => {
      wrapper = shallow(listBoxOption);
      const onSelectSpy = jest.fn();

      wrapper.setProps({
        onSelect: onSelectSpy,
      });

      wrapper.setProps({
        isSelected: true,
      });

      expect(onSelectSpy).toHaveBeenCalledTimes(1);
    });
  });
});
