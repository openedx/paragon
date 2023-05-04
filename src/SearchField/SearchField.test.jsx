/* eslint-disable react/prop-types */
import React from 'react';
import { shallow, mount } from 'enzyme';
import { TextEncoder } from 'util';
import { Search, Close } from '../../icons';
import Icon from '../Icon';

import SearchField from './index';

const BUTTON_LOCATION_VARIANTS = [
  'internal',
  'external',
];

const baseProps = {
  onSubmit: () => {},
};

describe('<SearchField /> with basic usage', () => {
  beforeAll(() => {
    Object.defineProperty(global, 'TextEncoder', {
      value: TextEncoder,
    });
  });
  it('should match the snapshot', () => {
    const wrapper = shallow(<SearchField {...baseProps} />);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should pass correct props to `SearchField.Advanced`', () => {
    const wrapper = shallow(<SearchField {...baseProps} />);
    const props = wrapper.find(SearchField.Advanced).props();
    expect(props.children).toEqual(expect.any(Array));
    expect(props.className).toEqual(undefined);
    expect(props.icons).toEqual({
      clear: <Icon src={Close} />,
      submit: <Icon src={Search} />,
    });
    expect(props.onFocus).toEqual(expect.any(Function));
    expect(props.onBlur).toEqual(expect.any(Function));
    expect(props.onChange).toEqual(expect.any(Function));
    expect(props.onSubmit).toEqual(expect.any(Function));
    expect(props.onClear).toEqual(expect.any(Function));
    expect(props.value).toEqual(expect.any(String));
    expect(props.screenReaderText).toEqual({
      label: 'search',
      clearButton: 'clear search',
      submitButton: 'submit search',
    });
    expect(props.formAriaLabel).toEqual(undefined);
    expect(props.className).toEqual(undefined);
    expect(BUTTON_LOCATION_VARIANTS.includes(props.submitButtonLocation)).toEqual(true);
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
    const wrapper = mount(<SearchField {...baseProps} placeholder="foobar" inputProps={{ 'data-testid': 'foo' }} />);
    expect(wrapper.find(SearchField.Input).prop('placeholder')).toEqual('foobar');
    expect(wrapper.find('input').prop('placeholder')).toEqual('foobar');
    expect(wrapper.find('input').prop('data-testid')).toEqual('foo');
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
    const submitLabel = wrapper.find('button[type="submit"] .sr-only').text();
    expect(submitLabel).toEqual(screenReaderText.submitButton);
    wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
    const resetLabel = wrapper.find('button[type="reset"] .sr-only').text();
    expect(resetLabel).toEqual(screenReaderText.clearButton);
  });
  it('should add div if `submitButtonLocation` is passed', () => {
    const wrapperDefault = mount(<SearchField {...baseProps} />);
    const wrapperExternal = mount(<SearchField {...baseProps} submitButtonLocation="external" />);
    expect(wrapperDefault.find('.pgn__searchfield_wrapper').length).toEqual(0);
    expect(wrapperExternal.find('.pgn__searchfield_wrapper').length).toEqual(1);
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
      wrapper.find('input').simulate('submit');
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
  describe('advanced usage', () => {
    it('should pass props to the clear button', () => {
      const buttonProps = { variant: 'inline' };
      const wrapper = mount(
        <SearchField.Advanced {...baseProps}>
          <SearchField.Input />
          <SearchField.ClearButton {...buttonProps} />
        </SearchField.Advanced>,
      );
      wrapper.find('input').simulate('change', { target: { value: 'foobar' } });
      expect(wrapper.find('button').prop('variant')).toEqual(buttonProps.variant);
    });
    it('should pass props to the label', () => {
      const labelProps = { variant: 'inline' };
      const wrapper = mount(
        <SearchField.Advanced {...baseProps}>
          <SearchField.Label {...labelProps}>Labeled</SearchField.Label>
        </SearchField.Advanced>,
      );
      expect(wrapper.find('label').prop('variant')).toEqual(labelProps.variant);
    });
    it('should pass props to the submit button', () => {
      const buttonText = 'Some test text';
      const buttonProps = {
        submitButtonLocation: 'external',
        buttonText,
      };
      const wrapper = mount(
        <SearchField.Advanced {...baseProps}>
          <SearchField.SubmitButton {...buttonProps} />
        </SearchField.Advanced>,
      );
      expect(wrapper.find('button').hasClass('pgn__searchfield__button')).toBe(true);
      expect(wrapper.find('button').text().includes(buttonText)).toBe(true);
    });
    it('should pass variant to the submit button', () => {
      const buttonProps = {
        submitButtonLocation: 'external',
      };
      const wrapperDefault = mount(
        <SearchField.Advanced {...baseProps}>
          <SearchField.SubmitButton {...buttonProps} />
        </SearchField.Advanced>,
      );
      const wrapperDark = mount(
        <SearchField.Advanced {...baseProps}>
          <SearchField.SubmitButton {...buttonProps} variant="dark" />
        </SearchField.Advanced>,
      );
      expect(wrapperDefault.find('button').hasClass('btn-primary')).toBe(true);
      expect(wrapperDark.find('button').hasClass('btn-brand')).toBe(true);
    });
  });
});
