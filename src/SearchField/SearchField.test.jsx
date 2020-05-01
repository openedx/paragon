/* eslint-disable react/prop-types */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';

import SearchField from './index';
import SearchFieldLabel from './SearchFieldLabel';
import SearchFieldInput from './SearchFieldInput';
import SearchFieldClearButton from './SearchFieldClearButton';
import SearchFieldSubmitButton from './SearchFieldSubmitButton';

const baseProps = {
  onSubmit: () => {},
};

describe('<SearchField /> with basic usage', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<SearchField {...baseProps} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should pass correct props to `SearchField.Advanced`', () => {
    const wrapper = shallow(<SearchField {...baseProps} />);
    expect(wrapper.find(SearchField.Advanced).props()).toEqual({
      children: [
        <SearchFieldLabel />,
        <SearchFieldInput />,
        <SearchFieldClearButton />,
        <SearchFieldSubmitButton />,
      ],
      className: undefined,
      icons: {
        clear: <FontAwesomeIcon icon={faTimes} />,
        submit: <FontAwesomeIcon icon={faSearch} />,
      },
      onFocus: expect.any(Function),
      onBlur: expect.any(Function),
      onChange: expect.any(Function),
      onSubmit: expect.any(Function),
      onClear: expect.any(Function),
      value: '',
      screenReaderText: {
        label: 'search',
        clearButton: 'clear search',
        submitButton: 'submit search',
      },
    });
  });

  it('should pass correct props to `SearchField.Label`', () => {
    const label = 'foobar';
    let props = { ...baseProps, label };
    let wrapper = mount(<SearchField {...props} />);

    expect(wrapper.find(SearchField.Label).prop('children')).toEqual(label);
    expect(wrapper.find('label').prop('children')).toEqual(label);

    props = {
      ...baseProps,
      screenReaderText: { label, submitButton: 'submit foobar' },
    };

    wrapper = mount(<SearchField {...props} />);
    expect(wrapper.find('label').children().equals(<span className="sr-only">{label}</span>)).toBeTruthy();
  });

  it('should pass correct props to `SearchField.Input`', () => {
    const wrapper = mount(<SearchField {...baseProps} placeholder="foobar" />);
    expect(wrapper.find(SearchField.Input).prop('placeholder')).toEqual('foobar');
    expect(wrapper.find('input').prop('placeholder')).toEqual('foobar');
  });

  it('should use passed in initial `value` prop', () => {
    const value = 'foobar';
    const props = { ...baseProps, value };
    const wrapper = mount(<SearchField {...props} />);

    expect(wrapper.find(SearchField.Advanced).prop('value')).toEqual(value);
    expect(wrapper.find('input').prop('value')).toEqual(value);
  });

  it('should use passed in `screenReaderText` prop', () => {
    const screenReaderText = {
      label: 'buscar',
      submitButton: 'enviar búsqueda',
      clearButton: 'borrar búsqueda',
    };
    const props = { ...baseProps, screenReaderText };
    const wrapper = mount(<SearchField {...props} />);
    wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
    expect(wrapper.find('button[type="reset"] .sr-only').prop('children')).toEqual(screenReaderText.clearButton);
    expect(wrapper.find('button[type="submit"] .sr-only').prop('children')).toEqual(screenReaderText.submitButton);
  });

  describe('should fire', () => {
    it('focus handler', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onFocus: spy };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('focus');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('blur handler', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onBlur: spy };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('blur');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('change handler', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onChange: spy };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('clear handler', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onClear: spy };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      wrapper.find('button[type="reset"]').simulate('reset');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('submit handler on submit button click', () => {
      const spy = jest.fn();
      const props = { ...baseProps, onSubmit: spy };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      wrapper.find('button[type="submit"]').simulate('submit');
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith('foobar');
    });
  });

  describe('clear button', () => {
    it('should be visible with input value', () => {
      const props = { ...baseProps };
      const wrapper = mount(<SearchField {...props} />);
      expect(wrapper.find('button[type="reset"]').exists()).toBeFalsy();
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      expect(wrapper.find('button[type="reset"]').exists()).toBeTruthy();
    });

    it('should clear input value when clicked', () => {
      const props = { ...baseProps };
      const wrapper = mount(<SearchField {...props} />);
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      expect(wrapper.find('input').prop('value')).toEqual('foobar');
      wrapper.find('button[type="reset"]').simulate('reset');
      expect(wrapper.find('input').prop('value')).toEqual('');
    });
  });
});
