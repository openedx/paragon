import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { faInfoCircle, faPlane } from '@fortawesome/free-solid-svg-icons';

// adds special assertions like toHaveTextContent
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import { IconButton, IconButtonToggle } from '..';

describe('IconButtonToggle tests', () => {
  const iconInfo = faInfoCircle;
  const iconPlane = faPlane;

  test('activeValue is correctly applied', () => {
    render(
      <IconButtonToggle activeValue="abc">
        <IconButton value="def" alt="def" icon={iconInfo} />
        <IconButton value="abc" alt="abc" icon={iconPlane} />
      </IconButtonToggle>,
    );
    const btnAbc = screen.getByTestId('icon-btn-val-abc');

    expect(btnAbc).toHaveClass('btn-icon-primary-active');
    expect(btnAbc).toHaveAttribute('aria-selected', 'true');
  });
  test('switching activeValue works as expected', () => {
    const spyChanger = jest.fn();
    render(
      <IconButtonToggle activeValue="abc" onChange={spyChanger}>
        <IconButton value="def" alt="def" icon={iconInfo} />
        <IconButton value="abc" alt="abc" icon={iconPlane} />
      </IconButtonToggle>,
    );
    const btnDef = screen.getByTestId('icon-btn-val-def');
    const btnAbc = screen.getByTestId('icon-btn-val-abc');

    expect(btnDef).toHaveClass('btn-icon-primary');
    expect(btnDef).toHaveAttribute('aria-selected', 'false');

    expect(btnAbc).toHaveClass('btn-icon-primary-active');
    expect(btnAbc).toHaveAttribute('aria-selected', 'true');

    userEvent.click(btnDef);

    waitFor(() => expect(btnDef).toHaveClass('btn-icon-primary-active'));
    waitFor(() => expect(btnDef).toHaveAttribute('aria-selected', 'false'));

    waitFor(() => expect(btnAbc).toHaveClass('btn-icon-primary'));
    waitFor(() => expect(btnAbc).toHaveAttribute('aria-selected', 'true'));

    expect(spyChanger).toHaveBeenCalledWith('def');
  });
});
