/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';

import SearchField from './index';

const baseProps = {
  onSubmit: () => {},
};

describe('<SearchField />', () => {
  it('renders', () => {
    const props = {
      ...baseProps,
    };
    const wrapper = mount(<SearchField {...props} />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('uses passed in value', () => {
    const value = 'foofoo';
    const props = {
      ...baseProps,
      value,
    };
    const wrapper = mount(<SearchField {...props} />);
    expect(wrapper.state('value')).toEqual(value);
    expect(wrapper.find('input').prop('value')).toEqual(value);
  });

  it('overrides state value when props value changes', () => {
    const initValue = 'foofoo';
    const newValue = 'barbar';
    const props = {
      ...baseProps,
      value: initValue,
    };
    const wrapper = mount(<SearchField {...props} />);
    expect(wrapper.state('value')).toEqual(initValue);
    wrapper.setProps({
      value: newValue,
    });
    expect(wrapper.state('value')).toEqual(newValue);
  });

  it('does not override state value when props value changes with existing value', () => {
    const value = 'foofoo';
    const props = {
      ...baseProps,
      value,
    };
    const wrapper = mount(<SearchField {...props} />);
    expect(wrapper.state('value')).toEqual(value);
    wrapper.setProps({
      value,
    });
    expect(wrapper.state('value')).toEqual(value);
  });

  it('uses passed in placeholder', () => {
    const placeholder = 'foofoo';
    const props = {
      ...baseProps,
      placeholder,
    };
    const wrapper = mount(<SearchField {...props} />);
    expect(wrapper.find('input').prop('placeholder')).toEqual(placeholder);
  });

  it('uses passed in inputLabel text', () => {
    const inputLabel = 'Buscar:';
    const props = {
      ...baseProps,
      inputLabel,
    };
    const wrapper = mount(<SearchField {...props} />);
    expect(wrapper.find('label').text()).toEqual(inputLabel);
  });

  it('uses passed in screenReaderText', () => {
    const screenReaderText = {
      clearButton: 'Borrar búsqueda',
      searchButton: 'Enviar búsqueda',
    };
    const props = {
      ...baseProps,
      screenReaderText,
    };
    const wrapper = mount(<SearchField {...props} />);
    wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
    const searchActionButtons = wrapper.find('Button');
    expect(searchActionButtons.first().find('Icon').prop('screenReaderText')).toEqual(screenReaderText.clearButton);
    expect(searchActionButtons.last().find('Icon').prop('screenReaderText')).toEqual(screenReaderText.searchButton);
  });

  describe('fires', () => {
    it('focus handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onFocus: spy,
      };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('focus');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('blur handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onBlur: spy,
      };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('blur');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('change handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onChange: spy,
      };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('clear handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onClear: spy,
      };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      wrapper.find('.input-group-append button').first().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('submit handler on click', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onSubmit: spy,
      };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      wrapper.find('.input-group-append button').last().simulate('click');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('submit handler on enter keypress', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onSubmit: spy,
      };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      wrapper.find('input').simulate('keypress', { key: 'Enter' });
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('does not fire', () => {
    it('submit handler on non-enter keypress', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onSubmit: spy,
      };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      wrapper.find('input').simulate('keypress', { key: 's' });
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });

  describe('clear button', () => {
    it('renders', () => {
      const props = {
        ...baseProps,
      };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      expect(wrapper.find('.input-group-append button').length).toEqual(2);
    });

    it('clears input', () => {
      const props = {
        ...baseProps,
        hasClearButton: true,
      };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      expect(wrapper.find('input').prop('value')).toEqual('foobar');
      expect(wrapper.find('.input-group-append button').length).toEqual(2);
      wrapper.find('.input-group-append button').first().simulate('click');
      expect(wrapper.find('input').prop('value')).toEqual('');
      expect(wrapper.find('.input-group-append button').length).toEqual(1);
    });
  });
});
