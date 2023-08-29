import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

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
        <MenuItem>Default</MenuItem>
        <MenuItem as={Button} iconBefore={Add}>Cant Touch This</MenuItem>
        <MenuItem iconBefore={Add}>Icon Before</MenuItem>
      </Menu>,
    );
  });

  it('should focus on the first item after click', () => {
    const defaultItem = screen.getByText('Default');
    fireEvent.click(defaultItem);
    expect(defaultItem === document.activeElement);
  });

  it('should focus the next item after ArrowDown keyDown', () => {
    const defaultItem = screen.getByText('Default');
    const cantTouchThisItem = screen.getByText('Cant Touch This');

    fireEvent.keyDown(defaultItem, { key: 'ArrowDown' });

    expect(cantTouchThisItem === document.activeElement);
  });

  it('should focus the next item after Tab keyDown', () => {
    const defaultItem = screen.getByText('Default');
    const cantTouchThisItem = screen.getByText('Cant Touch This');

    fireEvent.keyDown(defaultItem, { key: 'Tab' });

    expect(cantTouchThisItem === document.activeElement);
  });

  it('should loop focus to the first item after Tab keyDown on last item', () => {
    const defaultItem = screen.getByText('Default');
    const iconBeforeItem = screen.getByText('Icon Before');

    fireEvent.keyDown(iconBeforeItem, { key: 'Tab' });

    expect(defaultItem === document.activeElement);
  });

  it('should loop focus to the last item after ArrowUp keyDown on first item', () => {
    const defaultItem = screen.getByText('Default');
    const iconBeforeItem = screen.getByText('Icon Before');

    fireEvent.keyDown(defaultItem, { key: 'ArrowUp' });

    expect(iconBeforeItem === document.activeElement);
  });

  it('should focus the previous item after Shift + Tab keyDown', () => {
    const cantTouchThisItem = screen.getByText('Cant Touch This');
    const iconBeforeItem = screen.getByText('Icon Before');

    fireEvent.keyDown(iconBeforeItem, { key: 'Tab', shiftKey: true });

    expect(cantTouchThisItem === document.activeElement);
  });
});
