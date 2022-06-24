import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Add, Check } from '../../icons';
import { MenuItem } from '..';
import Menu from '.';
import Hyperlink from '../Hyperlink';
import Button from '../Button';
import Form from '../Form';

describe('Menu Item renders correctly', () => {
  it('renders as just a div With empty usage', () => {
    const wrapper = mount(<Menu />);
    expect(wrapper.find('div').exists()).toEqual(true);
  });
  it('renders as expected with menu items', () => {
    const tree = renderer.create((
      <Menu>
        <MenuItem> A Menu Item</MenuItem>
        <MenuItem iconBefore={Add} stoven>A Menu Item With an Icon Before</MenuItem>
        <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
        <MenuItem disabled>A Disabled Menu Item</MenuItem>
        <MenuItem as={Hyperlink} href="https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
        <MenuItem as={Button} variant="primary" size="inline">A Button Menu Item</MenuItem>
        <MenuItem as={Form.Checkbox}>A Checkbox Menu Item</MenuItem>
      </Menu>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Renders disabled menutitems, but you cant click them', () => {
    const clickFn = jest.fn();
    const wrapper = mount((
      <Menu>
        <MenuItem as={Button} iconBefore={Add} onClick={clickFn} disabled>Cant Touch This</MenuItem>
      </Menu>
    ));
    expect(clickFn).toHaveBeenCalledTimes(0);
    wrapper
      .find('button')
      .simulate('click');
    expect(clickFn).toHaveBeenCalledTimes(0);
  });
});

describe('Keyoard Interactions', () => {
  const wrapper = mount(
    <Menu>
      <MenuItem>Default</MenuItem>
      <MenuItem as={Button} iconBefore={Add}>Cant Touch This</MenuItem>
      <MenuItem iconBefore={Add}>Icon Before</MenuItem>
    </Menu>,
  );

  const menuContainer = wrapper.find(Menu);
  const menuItems = wrapper.find(MenuItem);

  it('should focus on the first item after click', () => {
    menuItems.at(0).simulate('click');
    expect(menuItems.at(0) === document.activeElement);
  });
  it('should focus the next item after ArrowDown keyDown', () => {
    menuContainer
      .simulate('keyDown', { key: 'ArrowDown' });
    expect(menuItems.at(1) === document.activeElement);
  });
  it('should focus the next item after Tab keyDown', () => {
    menuContainer.simulate('keyDown', { key: 'Tab' });
    expect(menuItems.at(2) === document.activeElement);
  });

  it('should loop focus to the first item after Tab keyDown on last item', () => {
    menuContainer.simulate('keyDown', { key: 'Tab' });
    expect(menuItems.at(0) === document.activeElement);
  });

  it('should loop focus to the last item after ArrowUp keyDown on first item', () => {
    menuContainer.simulate('keyDown', { key: 'ArrowUp' });
    expect(menuItems.at(2) === document.activeElement);
  });

  it('should focus the previous item after Shift + Tab keyDown', () => {
    menuContainer.simulate('keyDown', { key: 'Tab', shiftKey: true });
    expect(menuItems.at(1) === document.activeElement);
  });
});
