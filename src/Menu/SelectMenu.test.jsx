import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { Add, Check } from '../../icons';
import { MenuItem, SelectMenu } from '..';
import Hyperlink from '../Hyperlink';
import Button from '../Button';

const app = document.createElement('div');
document.body.appendChild(app);
const selectMenu = mount(
  (
    <SelectMenu>
      <MenuItem>A Menu Item</MenuItem>
      <MenuItem iconBefore={Add}>A Menu Item With an Icon Before</MenuItem>
      <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
      <MenuItem disabled>A Disabled Menu Item</MenuItem>
      <MenuItem as={Hyperlink} destination="https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
      <MenuItem>Falstaff</MenuItem>
      <MenuItem>Scipio</MenuItem>
      <MenuItem>Faustus</MenuItem>
      <MenuItem>Cordelia</MenuItem>
      <MenuItem>Renfrancine</MenuItem>
      <MenuItem>Stovern</MenuItem>
      <MenuItem>Kainian</MenuItem>
      <MenuItem>M. Hortens</MenuItem>
    </SelectMenu>
  ), { attachTo: app },
);

function DefaultSelectMenu(props) {
  return <SelectMenu {...props}><MenuItem>A Menu Item</MenuItem></SelectMenu>;
}
const menuTrigger = selectMenu.find(Button);

const menuOpen = (isOpen, wrapper) => {
  expect(wrapper.find(Button).prop('aria-expanded')).toEqual(isOpen);
};

describe('correct rendering', () => {
  it('renders as expected', () => {
    const tree = renderer.create((
      <DefaultSelectMenu />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with a default message you set', () => {
    const wrapper = mount(<DefaultSelectMenu defaultMessage="Pick Me" />);
    expect(wrapper.find(Button).text()).toEqual('Pick Me');
  });
  it('renders with a button as link', () => {
    const wrapper = mount(<DefaultSelectMenu isLink />);
    expect(wrapper.find(Button).prop('variant')).toEqual('link');
  });
  it('rendering with Brand button variant', () => {
    const wrapper = mount(<DefaultSelectMenu variant="brand" />);
    expect(wrapper.find(Button).prop('variant')).toEqual('brand');
    expect(wrapper.find('button').hasClass('btn-brand')).toEqual(true);
  });
});

describe('mouse behavior & keyboard behavior', () => {
  menuTrigger.simulate('click');
  const menuItems = selectMenu.find('.pgn__menu-item');

  it('opens on trigger click', () => {
    menuTrigger.simulate('click'); // Open
    menuOpen(true, selectMenu);
  });

  it('should focus on the first item after opening', () => {
    expect(menuItems.first().is(':focus')).toBe(true);
  });
  it('returns focus to trigger on close', () => {
    menuItems.at(7).simulate('click');
    expect(menuTrigger === document.activeElement);
  });
});

describe('keyboard Interactions', () => {
  menuTrigger.simulate('click'); // Open
  const menuItems = selectMenu.find('.pgn__menu-item');
  const menuContainer = selectMenu.find('.pgn__menu');

  it('should focus on the first item after opening', () => {
    expect(menuItems.at(0) === document.activeElement);
  });
  it('should focus the next item after ArrowDown keyDown', () => {
    menuContainer.simulate('keyDown', { key: 'ArrowDown' });
    expect(menuItems.at(1) === document.activeElement);
  });
  it('should focus the next item after ArrowDown right', () => {
    menuContainer.simulate('keyDown', { key: 'ArrowRight' });
    expect(menuItems.at(2) === document.activeElement);
  });
  it('should focus the previous item after ArrowDown up', () => {
    menuContainer.simulate('keyDown', { key: 'ArrowUp' });
    expect(menuItems.at(1) === document.activeElement);
  });
  it('should focus the previous item after ArrowDown left', () => {
    menuContainer.simulate('keyDown', { key: 'ArrowLeft' });
    expect(menuItems.at(0) === document.activeElement);
  });
  it('edge behavior should loop', () => {
    menuContainer.simulate('keyDown', { key: 'ArrowUp' });
    expect(menuItems.at(menuItems.length - 1) === document.activeElement);
    menuContainer.simulate('keyDown', { key: 'ArrowDown' });
    expect(menuItems.at(0) === document.activeElement);
  });
  it('home should go to first, End to last', () => {
    menuContainer.simulate('keyDown', { key: 'End' });
    expect(menuItems.at(menuItems.length - 1) === document.activeElement);
    menuContainer.simulate('keyDown', { key: 'Home' });
    expect(menuItems.at(0) === document.activeElement);
  });
});
