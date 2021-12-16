import React from 'react';

import { render, screen, waitFor } from '@testing-library/react';

// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

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
  test('switching activeValue works as expected', () => {
    const spyChanger = jest.fn();
    render(
      <IconButtonToggle activeValue="abc" onChange={spyChanger}>
        <IconButton alt="def button" value="def">def</IconButton>
        <IconButton alt="abc button" value="abc">abc</IconButton>
      </IconButtonToggle>,
    );
    const btnDef = screen.getByTestId('icon-btn-val-def');
    const btnAbc = screen.getByTestId('icon-btn-val-abc');
    expect(btnDef).toHaveClass('btn-icon-primary');
    expect(btnAbc).toHaveClass('btn-icon-primary-active');
    userEvent.click(btnDef);
    waitFor(() => expect(btnDef).toHaveClass('btn-icon-primary-active'));
    waitFor(() => expect(btnAbc).toHaveClass('btn-icon-primary'));
    expect(spyChanger).toHaveBeenCalledWith('def');
  });
});
