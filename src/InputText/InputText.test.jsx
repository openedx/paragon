import React from 'react';
import { mount } from 'enzyme';

import InputText from './index';

describe('<InputText />', () => {
  const label = 'label';
  const name = 'name';
  const props = {
    label,
    name,
  };

  describe('rendering', () => {
    it('should render with default type when type is not defined', () => {
      const wrapper = mount(<InputText {...props} />);
      expect(wrapper.find('input')).toHaveLength(1);

      const input = wrapper.find('input').at(0);
      expect(input.prop('type')).toEqual('text');
    });

    it('should render with default type when type is defined as undefined', () => {
      const wrapper = mount(<InputText {...props} type={undefined} />);
      expect(wrapper.find('input')).toHaveLength(1);

      const input = wrapper.find('input').at(0);
      expect(input.prop('type')).toEqual('text');
    });

    it('should render with default type when type is defined as null', () => {
      const wrapper = mount(<InputText {...props} type={null} />);
      expect(wrapper.find('input')).toHaveLength(1);

      const input = wrapper.find('input').at(0);
      expect(input.prop('type')).toEqual('text');
    });

    it('should render with specified type when type is defined', () => {
      const type = 'foobar';
      const wrapper = mount(<InputText {...props} type={type} />);
      expect(wrapper.find('input')).toHaveLength(1);

      const input = wrapper.find('input').at(0);
      expect(input.prop('type')).toEqual(type);
    });

    it('should render with the autocomplete property if set', () => {
      const wrapper = mount(<InputText {...props} autoComplete="off" />);
      expect(wrapper.find('input')).toHaveLength(1);

      const input = wrapper.find('input').at(0);
      expect(input.prop('autoComplete')).toEqual('off');
    });

    it('should render with custom classNames if set', () => {
      const wrapper = mount(<InputText {...props} className={['first', 'last']} />);
      expect(wrapper.find('input')).toHaveLength(1);

      const input = wrapper.find('input').at(0);
      expect(input.prop('type')).toEqual('text');
      expect(input.hasClass('first')).toEqual(true);
      expect(input.hasClass('last')).toEqual(true);
    });

    it('should not be readOnly if the readOnly property is not set', () => {
      const wrapper = mount(<InputText {...props} />);
      expect(wrapper.props().readOnly).toBeUndefined();
    });

    it('should render with the readOnly property if set', () => {
      const wrapper = mount(<InputText {...props} readOnly />);
      expect(wrapper.props().readOnly).toEqual(true);
    });
  });
});
