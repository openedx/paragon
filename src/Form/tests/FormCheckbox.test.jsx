import React from 'react';
import { mount } from 'enzyme';
import FormCheckbox from '../FormCheckbox';
import FormGroup from '../FormGroup';
import FormLabel from '../FormLabel';

describe('FormCheckbox', () => {
  const handleChange = jest.fn();
  const handleFocus = jest.fn();
  const handleBlur = jest.fn();
  const wrapper = mount((
    <FormCheckbox
      value="green"
      name="color"
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
      description="Describe green"
    >
      Green
    </FormCheckbox>
  ));
  const inputNode = wrapper.find('input[value="green"]').first();

  it('renders an input with a name and value', () => {
    wrapper.exists('input[value="green"]');
    expect(inputNode.props().name).toBe('color');
  });

  it('has an associated label', () => {
    const inputNodeId = inputNode.props().id;
    wrapper.exists({ htmlFor: inputNodeId });
    const labelNode = wrapper.find({ htmlFor: inputNodeId }).hostNodes().first();
    expect(labelNode.text()).toBe('Green');
  });

  it('has an associated description', () => {
    const describerIds = inputNode.props()['aria-describedby'];
    const describerNode = wrapper.find({ id: describerIds }).hostNodes().first();
    wrapper.exists({ id: describerIds });
    expect(describerNode.text()).toBe('Describe green');
  });

  it('calls the change handler', () => {
    inputNode.simulate('change');
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'green' }),
        type: 'change',
      }),
    );
  });

  it('calls the focus handler', () => {
    inputNode.simulate('focus');
    expect(handleFocus).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'green' }),
        type: 'focus',
      }),
    );
  });

  it('calls the blur handler', () => {
    inputNode.simulate('blur');
    expect(handleBlur).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: 'green' }),
        type: 'blur',
      }),
    );
  });
});

describe('FormCheckbox with FormGroup', () => {
  const handleChange = jest.fn();
  const handleFocus = jest.fn();
  const handleBlur = jest.fn();
  const wrapper = mount((
    <FormGroup controlId="group-id">
      <FormLabel>Group Label</FormLabel>
      <FormCheckbox
        value="green"
        name="color"
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        description="Describe green"
      >
        Green
      </FormCheckbox>
    </FormGroup>
  ));

  it('renders an a group with a label', () => {
    expect(wrapper.exists('#group-id')).toBe(true);
    const groupNode = wrapper.find('#group-id').first();
    const labelledById = groupNode.props()['aria-labelledby'];
    expect(labelledById).toBeTruthy();
    expect(wrapper.exists(`#${labelledById}`)).toBe(true);
    const labelNode = wrapper.find(`#${labelledById}`).first();
    expect(labelNode.text()).toBe('Group Label');
  });
});
