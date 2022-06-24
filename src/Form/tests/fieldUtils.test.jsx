import React from 'react';
import { mount } from 'enzyme';

import {
  callAllHandlers,
  useHasValue,
  mergeAttributeValues,
  useIdList,
  omitUndefinedProperties,
} from '../fieldUtils';

describe('omitUndefinedProperties', () => {
  it('removes undefined properties from an object', () => {
    const source = {
      one: 1,
      two: undefined,
      three: 3,
      four: null,
      five: '',
    };
    const output = omitUndefinedProperties(source);
    expect(output).toMatchObject({
      one: 1,
      three: 3,
      four: null,
      five: '',
    });
  });
  it('returns an empty object if no source is given', () => {
    const source = undefined;
    const output = omitUndefinedProperties(source);
    expect(output).toMatchObject({});
  });
});

describe('callAllHandlers', () => {
  it('returns a handler to call all handlers with a common parameter', () => {
    const parameter = 123;
    const first = jest.fn();
    const second = jest.fn();
    const third = jest.fn();
    const sharedHandler = callAllHandlers(first, second, third);
    sharedHandler(parameter);
    expect(first).toHaveBeenCalledWith(parameter);
    expect(second).toHaveBeenCalledWith(parameter);
    expect(third).toHaveBeenCalledWith(parameter);
  });
});

// eslint-disable-next-line react/prop-types
function IdListExample({ prefix, initialList }) {
  const [ids, useRegisteredId] = useIdList(prefix, initialList);
  const id1 = useRegisteredId();
  const id2 = useRegisteredId('explicit-id');
  return (
    <div>
      <span id="id-list">{ids.join(' ')}</span>
      <span id="first">{id1}</span>
      <span id="second">{id2}</span>
    </div>
  );
}
describe('useIdList', () => {
  describe('with default', () => {
    const wrapper = mount(<IdListExample prefix="prefix" initialList={['id-0']} />);
    const idList = wrapper.find('#id-list').first();
    const renderedIds = idList.text().split(' ');
    it('starts with the default id', () => {
      expect(renderedIds[0]).toBe('id-0');
    });
    it('generates a registered id', () => {
      expect(renderedIds[1]).toBe('prefix-1');
    });
    it('registers an explicit id', () => {
      expect(renderedIds[2]).toBe('explicit-id');
    });
  });
  describe('with no default', () => {
    const wrapper = mount(<IdListExample prefix="prefix" />);
    const idList = wrapper.find('#id-list').first();
    const renderedIds = idList.text().split(' ');
    it('only have the two ids', () => {
      expect(renderedIds.length).toBe(2);
    });
  });
});

describe('mergeAttributeValues', () => {
  it('joins not empty values with in a space delimited list', () => {
    const output = mergeAttributeValues('one', 'two', undefined, null, 'four');
    expect(output).toBe('one two four');
  });
  it('returns undefined if there are no values', () => {
    const output = mergeAttributeValues(undefined, null);
    expect(output).toBe(undefined);
  });
});

// eslint-disable-next-line react/prop-types
function HasValueExample({ defaultValue, value }) {
  const [hasValue, handleInputEvent] = useHasValue({ defaultValue, value });
  return (
    <div>
      {hasValue && <div id="has-value">Has value</div>}
      <input type="text" onBlur={handleInputEvent} />
    </div>
  );
}

describe('useHasValue', () => {
  describe('uncontrolled input with no default', () => {
    const wrapper = mount(<HasValueExample />);
    const input = wrapper.find('input').at(0);
    it('starts with the default id', () => {
      expect(wrapper.exists('#has-value')).toBe(false);
    });
    it('has value when a targets blur event has a value', () => {
      input.invoke('onBlur')({ target: { value: 'hello' } });
      expect(wrapper.exists('#has-value')).toBe(true);
    });
  });

  describe('uncontrolled input with a default value', () => {
    const wrapper = mount(<HasValueExample defaultValue="My value" />);
    const input = wrapper.find('input').at(0);
    it('starts with the default id', () => {
      expect(wrapper.exists('#has-value')).toBe(true);
    });
    it('has no value when a targets blur event has no value', () => {
      input.invoke('onBlur')({ target: { value: '' } });
      expect(wrapper.exists('#has-value')).toBe(false);
    });
  });

  describe('controlled value', () => {
    const wrapper = mount(<HasValueExample value="My value" />);
    const input = wrapper.find('input').at(0);
    it('starts with the default id', () => {
      expect(wrapper.exists('#has-value')).toBe(true);
    });
    it('continues to have a value despite a blur event saying there is not one but props say there is', () => {
      input.invoke('onBlur')({ target: { value: '' } });
      expect(wrapper.exists('#has-value')).toBe(true);
    });
  });
});
