import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import { Add, Check } from '../../icons';
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

  it('The Button can be clicked', async () => {
    const clickFn = jest.fn();
    render(
      <MenuItem as={Button} iconBefore={Add} onClick={clickFn}>
        {children}
      </MenuItem>,
    );
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(clickFn).toHaveBeenCalledTimes(1);
  });

  it('Disabled Button can\'t be clicked', async () => {
    const clickFn = jest.fn();
    render(
      <MenuItem as={Button} iconBefore={Add} onClick={clickFn} disabled>
        I am nonoperational
      </MenuItem>,
    );
    const button = screen.getByRole('button');

    await userEvent.click(button);

    expect(clickFn).toHaveBeenCalledTimes(0);
  });
});
