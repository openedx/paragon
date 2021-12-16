import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect';

import { IconButton, IconButtonToggle } from '..';

describe('IconButtonToggle tests', () => {
  test('activeValue is correctly applied', () => {
    render(
      <IconButtonToggle activeValue="abc">
        <IconButton value="def">def</IconButton>
        <IconButton value="abc">abc</IconButton>
      </IconButtonToggle>,
    );
    expect(screen.getByTestId('icon-btn-val-abc')).toHaveClass('btn-icon-primary-active');
  });
  test('switching activeValue works as expected', async () => {
    const spyChanger = jest.fn();
    render(
      <IconButtonToggle activeValue="abc" onChange={spyChanger}>
        <IconButton alt="def button" value="def">def</IconButton>
        <IconButton alt="abc button" value="abc">abc</IconButton>
      </IconButtonToggle>,
    );
    expect(screen.getByTestId('icon-btn-val-def')).toHaveClass('btn-icon-primary');
    expect(screen.getByTestId('icon-btn-val-abc')).toHaveClass('btn-icon-primary-active');
    userEvent.click(screen.getByTestId('icon-btn-val-def'));
    const elem = await screen.findByTestId('icon-btn-val-def');
    expect(elem).toHaveClass('btn-icon-primary-active');
    expect(screen.getByTestId('icon-btn-val-abc')).toHaveClass('btn-icon-primary');
    expect(spyChanger).toHaveBeenCalledWith('def');
  });
});
