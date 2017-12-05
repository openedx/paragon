/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';

import asInput, { getDisplayName } from './index';

function testComponent(props) {
  return (
    <input
      id={props.id}
      defaultValue={props.value}
      onBlur={props.onBlur}
      onChange={props.onChange}
    />
  );
}

const InputTestComponent = asInput(testComponent);
const baseProps = {
  type: 'text',
  name: 'test',
  label: 'test component',
  description: 'i am a test component',
};

describe('getDisplayName', () => {
  it('returns the proper display name', () => {
    expect(getDisplayName({ displayName: 'foo' })).toEqual('foo');
    expect(getDisplayName({ name: 'bar' })).toEqual('bar');
    expect(getDisplayName({})).toEqual('Component');
  });
});

describe('asInput()', () => {
  it('renders', () => {
    const props = {
      ...baseProps,
      value: 'foofoo',
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.find('label').text()).toEqual(props.label);
    expect(wrapper.find('#description-asInput1').text()).toEqual(props.description);
    expect(wrapper.state('value')).toEqual(props.value);
  });

  it('creates generic prop id', () => {
    const props = {
      ...baseProps,
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.state('id')).toContain('asInput');
    expect(wrapper.find('label').prop('id')).toContain('asInput');
    expect(wrapper.find('input').prop('id')).toContain('asInput');
    expect(wrapper.find('small').prop('id')).toContain('asInput');
  });

  it('creates generic prop id when passed undefined id value', () => {
    const testId = undefined;
    const props = {
      ...baseProps,
      id: testId,
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.state('id')).toContain('asInput');
    expect(wrapper.find('label').prop('id')).toContain('asInput');
    expect(wrapper.find('input').prop('id')).toContain('asInput');
    expect(wrapper.find('small').prop('id')).toContain('asInput');
  });

  it('uses passed in prop id', () => {
    const testId = 'testId';
    const props = {
      ...baseProps,
      id: testId,
    };
    const wrapper = mount(<InputTestComponent {...props} />);
    expect(wrapper.state('id')).toEqual(testId);
    expect(wrapper.find('label').prop('id')).toEqual(`label-${testId}`);
    expect(wrapper.find('input').prop('id')).toEqual(testId);
    expect(wrapper.find('small').prop('id')).toEqual(`description-${testId}`);
  });

  describe('fires', () => {
    it('blur handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onBlur: spy,
      };
      const wrapper = mount(<InputTestComponent {...props} />);
      wrapper.find('input').simulate('blur');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('change handler', () => {
      const spy = jest.fn();
      const props = {
        ...baseProps,
        onChange: spy,
      };
      const wrapper = mount(<InputTestComponent {...props} />);
      wrapper.find('input').simulate('change');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    describe('validator', () => {
      it('on blur', () => {
        const spy = jest.fn();
        spy.mockReturnValueOnce({ isValid: true });
        const props = {
          ...baseProps,
          validator: spy,
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        wrapper.find('input').simulate('blur');
        expect(spy).toHaveBeenCalledTimes(1);
      });

      it('and displays error message when invalid', () => {
        const spy = jest.fn();
        const validationResult = {
          isValid: false,
          validationMessage: 'Invalid!!1',
        };
        spy.mockReturnValueOnce(validationResult);
        const props = {
          ...baseProps,
          validator: spy,
        };
        const wrapper = mount(<InputTestComponent {...props} />);
        wrapper.find('input').simulate('blur');
        expect(spy).toHaveBeenCalledTimes(1);
        const err = wrapper.find('.form-control-feedback');
        expect(err.exists()).toEqual(true);
        expect(err.text()).toEqual(validationResult.validationMessage);
      });
    });
  });
});
