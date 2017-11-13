/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { mount } from 'enzyme';
import Button from './index';

const defaultProps = {
  label: 'Click me!',
};

describe('<Button />', () => {
  let wrapper;
  let button;

  beforeEach(() => {
    wrapper = mount(
      <Button
        {...defaultProps}
      />,
    );

    button = wrapper.find('button');
  });
  it('renders', () => {
    expect(button).toHaveLength(1);
  });
  it('puts focus on button', () => {
    expect(button.matchesElement(document.activeElement)).toEqual(false);
    button.simulate('click');
    expect(button.at(0).matchesElement(document.activeElement)).toEqual(true);
  });
  it('calls onClick prop', () => {
    const onClickSpy = jest.fn();
    wrapper.setProps({ onClick: onClickSpy });

    expect(onClickSpy).toHaveBeenCalledTimes(0);
    button.simulate('click');
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
