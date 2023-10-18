import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Add, Check } from '../../icons';
import { MenuItem, SelectMenu } from '..';
import Hyperlink from '../Hyperlink';

const app = document.createElement('div');
document.body.appendChild(app);

function DefaultSelectMenu(props) {
  return <SelectMenu {...props}><MenuItem>A Menu Item</MenuItem></SelectMenu>;
}

function defaultSelectMenu() {
  return (
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
  );
}

describe('correct rendering', () => {
  it('renders as expected', () => {
    const tree = renderer.create((
      <DefaultSelectMenu />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with a default message you set', () => {
    render(DefaultSelectMenu({ defaultMessage: 'Pick Me' }));
    expect(screen.getByText('Pick Me')).toBeInTheDocument();
  });

  it('renders with a button as link', () => {
    render(DefaultSelectMenu({ isLink: true }));
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn-link');
  });

  it('renders with Brand button variant', () => {
    render(DefaultSelectMenu({ variant: 'brand' }));
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn-brand');
  });

  it('renders as disabled', () => {
    render(DefaultSelectMenu({ disabled: true }));
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
  });
  it('rendering with Brand button variant', () => {
    const wrapper = mount(<DefaultSelectMenu variant="brand" />);
    expect(wrapper.find(Button).prop('variant')).toEqual('brand');
    expect(wrapper.find('button').hasClass('btn-brand')).toEqual(true);
  });

  it('renders with Brand button variant', () => {
    render(DefaultSelectMenu({ variant: 'brand' }));
    const button = screen.getByRole('button');
    expect(button).toHaveClass('btn-brand');
  });
});

describe('mouse behavior & keyboard behavior', () => {
  it('opens on trigger click', async () => {
    const { getByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    expect(menuTrigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('should focus on the first item after opening', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    expect(menuTrigger).toHaveAttribute('aria-expanded', 'true');
    const menuItem = getAllByRole('link')[0];
    expect(menuItem).toHaveFocus();
  });

  it('returns focus to trigger on close', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    await userEvent.click(menuItems[7]);
    expect(menuTrigger).toHaveFocus();
  });
});

describe('keyboard Interactions', () => {
  it('should focus on the first item after opening', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    expect(menuItems[0]).toHaveFocus();
  });

  it('should focus the next item after ArrowDown keyDown', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    await userEvent.keyboard('[arrowdown]');
    expect(menuItems[1]).toHaveFocus();
  });
  it('should focus the next item after ArrowRight keyDown', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    await userEvent.keyboard('[arrowright]');
    expect(menuItems[1]).toHaveFocus();
  });
  it('should focus the previous item after ArrowUp keyDown', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    menuItems[1].focus();
    await userEvent.keyboard('[arrowup]');
    expect(menuItems[0]).toHaveFocus();
  });

  it('should focus the previous item after ArrowLeft keyDown', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    menuItems[1].focus();
    await userEvent.keyboard('[arrowleft]');
    expect(menuItems[0]).toHaveFocus();
  });

  it('edge behavior should loop start to end', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    await userEvent.keyboard('[arrowup]');
    expect(menuItems[menuItems.length - 1]).toHaveFocus();
  });
  it('edge behavior should loop end to start', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    await userEvent.keyboard('[arrowup]');
    await userEvent.keyboard('[arrowdown]');
    expect(menuItems[0]).toHaveFocus();
  });

  it('should move focus to the last item when pressing the End key', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    await userEvent.keyboard('[end]');
    expect(menuItems[menuItems.length - 1]).toHaveFocus();
  });
  it('should move focus to the first item when pressing the Home key', async () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { name: 'Select...', expanded: false });
    await userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    menuItems[menuItems.length - 1].focus();
    await userEvent.keyboard('[home]');
    expect(menuItems[0]).toHaveFocus();
  });
});
