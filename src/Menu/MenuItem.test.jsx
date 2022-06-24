import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Add, Check } from 'icons';
import { MenuItem } from '..';
import Button from '../Button';

const children = 'Hello World';

describe('Menu Item', () => {
  it('renders as expected with both icons', () => {
    const tree = renderer.create((
      <MenuItem iconBefore={Add} iconAfter={Check}>{children}</MenuItem>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('The Button can be clicked', () => {
    const clickFn = jest.fn();
    const wrapper = mount((
      <MenuItem as={Button} iconBefore={Add} onClick={clickFn}>{children}</MenuItem>
    ));
    expect(clickFn).toHaveBeenCalledTimes(0);
    wrapper
      .find('button')
      .simulate('click');
    expect(clickFn).toHaveBeenCalledTimes(1);
  });
  it('Disabled Button cant be clicked', () => {
    const clickFn = jest.fn();
    const wrapper = mount(
      <MenuItem as={Button} iconBefore={Add} onClick={clickFn} disabled>
        I am nonoperational
      </MenuItem>,
    );
    expect(clickFn).toHaveBeenCalledTimes(0);
    wrapper
      .find('button')
      .simulate('click');
    expect(clickFn).toHaveBeenCalledTimes(0);
  });
});
