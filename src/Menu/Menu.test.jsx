import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Add, Check } from '../../icons';
import { MenuItem } from '..';
import Menu from '.';
import Hyperlink from '../Hyperlink';
import Button from '../Button';
import Form from '../Form';

describe('Menu Item renders correctly', () => {
  it('renders as just a div with empty usage', () => {
    render(<Menu data-testid="menu" />);
    expect(screen.getByTestId('menu')).toBeInTheDocument();
  });

  it('renders as expected with menu items', () => {
    const tree = renderer.create((
      <Menu>
        <MenuItem> A Menu Item</MenuItem>
        <MenuItem iconBefore={Add} stoven>A Menu Item With an Icon Before</MenuItem>
        <MenuItem iconAfter={Check}>A Menu Item With an Icon After </MenuItem>
        <MenuItem disabled>A Disabled Menu Item</MenuItem>
        <MenuItem as={Hyperlink} destination="https://en.wikipedia.org/wiki/Hyperlink">A Link Menu Item</MenuItem>
        <MenuItem as={Button} variant="primary" size="inline">A Button Menu Item</MenuItem>
        <MenuItem as={Form.Checkbox}>A Checkbox Menu Item</MenuItem>
      </Menu>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Renders disabled menu items, but you can\'t click them', () => {
    const clickFn = jest.fn();
    render(
      <Menu>
        <MenuItem as={Button} iconBefore={Add} onClick={clickFn} disabled>Cant Touch This</MenuItem>
      </Menu>,
    );

    const button = screen.getByText('Cant Touch This');
    fireEvent.click(button);
    expect(clickFn).toHaveBeenCalledTimes(0);
  });
});

describe('Keyboard Interactions', () => {
  beforeEach(() => {
    render(
      <Menu>
        <MenuItem autofocus>Default</MenuItem>
        <MenuItem as={Button} iconBefore={Add}>Cant Touch This</MenuItem>
        <MenuItem iconBefore={Add}>Icon Before</MenuItem>
      </Menu>,
    );
  });

  it('should focus on the first item after click', () => {
    const defaultItem = screen.getByText('Default').parentElement;
    fireEvent.click(defaultItem);
    userEvent.tab();
    expect(defaultItem).toHaveFocus();
  });

  it('should focus the next item after ArrowDown keyDown', () => {
    const defaultItem = screen.getByText('Default');
    const cantTouchThisItem = screen.getByText('Cant Touch This').parentElement;

    userEvent.type(defaultItem, '{arrowdown}');

    expect(cantTouchThisItem).toHaveFocus();
  });

  it('should focus the next item after Tab keyDown', () => {
    const defaultItem = screen.getByText('Default').parentElement;
    const cantTouchThisItem = screen.getByText('Cant Touch This').parentElement;
    defaultItem.focus();
    userEvent.tab();

    expect(cantTouchThisItem).toHaveFocus();
  });

  it('should loop focus to the first item after Tab keyDown on last item', () => {
    const defaultItem = screen.getByText('Default').parentElement;
    const iconBeforeItem = screen.getByText('Icon Before');
    iconBeforeItem.focus();
    userEvent.tab();

    expect(defaultItem).toHaveFocus();
  });

  it('should loop focus to the last item after ArrowUp keyDown on first item', () => {
    const defaultItem = screen.getByText('Default').parentElement;
    const iconBeforeItem = screen.getByText('Icon Before').parentElement;
    defaultItem.focus();
    userEvent.type(defaultItem, '{arrowup}');

    expect(iconBeforeItem).toHaveFocus();
  });

  it('should focus the previous item after Shift + Tab keyDown', () => {
    const button1 = screen.getAllByRole('button')[0];
    const button2 = screen.getAllByRole('button')[1];

    button2.focus();
    userEvent.tab({ shift: true });

    expect(button1).toHaveFocus();
  });
});
