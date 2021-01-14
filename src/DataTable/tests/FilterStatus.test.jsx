import React from 'react';
import { mount } from 'enzyme';

import FilterStatus from '../FilterStatus';
import { Button } from '../..';

const props = {
  filterNames: ['foo', 'bar', 'baz'],
  buttonClassName: 'buttonClass',
  variant: 'variant',
  size: 'lorge',
  onClick: () => {},
  clearSelectionText: 'CLEAR ME',
  className: 'filterClass',
};

describe('<FilterStatus />', () => {
  it('passes props to the button', () => {
    const wrapper = mount(<FilterStatus {...props} />);
    const buttonProps = wrapper.find(Button).props();
    expect(buttonProps.className).toEqual(props.buttonClassName);
    expect(buttonProps.variant).toEqual(props.variant);
    expect(buttonProps.size).toEqual(props.size);
  });
  it('sets the button text', () => {
    const wrapper = mount(<FilterStatus {...props} />);
    expect(wrapper.find(Button).text()).toEqual(props.clearSelectionText);
  });
  it('clears the selection on click', () => {
    const clearSpy = jest.fn();
    const wrapper = mount(<FilterStatus {...props} onClick={clearSpy} />);
    wrapper.find(Button).simulate('click');
    expect(clearSpy).toHaveBeenCalledTimes(1);
  });
  it('displays the current filter names', () => {
    const wrapper = mount(<FilterStatus {...props} />);
    expect(wrapper.text()).toContain(props.filterNames.join(', '));
  });
  it('sets class names on the parent', () => {
    const wrapper = mount(<FilterStatus {...props} />);
    expect(wrapper.props().className).toEqual(props.className);
  });
});
