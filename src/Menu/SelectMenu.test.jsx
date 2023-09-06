import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
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
});

describe('mouse behavior & keyboard behavior', () => {
  it('opens on trigger click', () => {
    const { getByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    expect(menuTrigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('should focus on the first item after opening', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    expect(menuTrigger).toHaveAttribute('aria-expanded', 'true');
    const menuItem = getAllByRole('link')[0];
    userEvent.tab();
    expect(menuItem).toHaveFocus();
  });

  it('returns focus to trigger on close', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    fireEvent.click(menuItems[7]);
    expect(menuTrigger).toHaveFocus();
  });
});

describe('keyboard Interactions', () => {
  it('should focus on the first item after opening', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    userEvent.tab();
    expect(menuItems[0]).toHaveFocus();
  });

  it('should focus the next item after ArrowDown keyDown', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    userEvent.keyboard('[arrowdown]');
    expect(menuItems[1]).toHaveFocus();
  });

  it('should focus the next item after ArrowRight keyDown', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    userEvent.keyboard('[arrowright]');
    expect(menuItems[1]).toHaveFocus();
  });

  it('should focus the previous item after ArrowUp keyDown', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    menuItems[1].focus();
    userEvent.keyboard('[arrowup]');
    expect(menuItems[0]).toHaveFocus();
  });

  it('should focus the previous item after ArrowLeft keyDown', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    menuItems[1].focus();
    userEvent.keyboard('[arrowleft]');
    expect(menuItems[0]).toHaveFocus();
  });

  it('edge behavior should loop start to end', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    userEvent.keyboard('[arrowup]');
    expect(menuItems[menuItems.length - 1]).toHaveFocus();
  });
  it('edge behavior should loop end to start', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    userEvent.keyboard('[arrowup]');
    userEvent.keyboard('[arrowdown]');
    expect(menuItems[0]).toHaveFocus();
  });

  it('should move focus to the last item when pressing the End key', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    userEvent.keyboard('[end]');
    expect(menuItems[menuItems.length - 1]).toHaveFocus();
  });
  it('should move focus to the first item when pressing the Home key', () => {
    const { getByRole, getAllByRole } = render(defaultSelectMenu());
    const menuTrigger = getByRole('button', { name: 'Select...', expanded: false });
    userEvent.click(menuTrigger);
    const menuItems = getAllByRole('link');
    menuItems[menuItems.length - 1].focus();
    userEvent.keyboard('[home]');
    expect(menuItems[0]).toHaveFocus();
  });
});
