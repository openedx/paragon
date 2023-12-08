import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Info, Home } from '../../icons';
import { IconButton, IconButtonToggle, Icon } from '..';

describe('IconButtonToggle tests', () => {
  const iconInfo = Info;
  const iconHome = Home;

  test('activeValue is correctly applied', () => {
    render(
      <IconButtonToggle activeValue="abc">
        <IconButton iconAs={Icon} value="def" alt="def" src={iconInfo} />
        <IconButton iconAs={Icon} value="abc" alt="abc" src={iconHome} />
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
        <IconButton iconAs={Icon} value="def" alt="def" src={iconInfo} />
        <IconButton iconAs={Icon} value="abc" alt="abc" src={iconHome} />
      </IconButtonToggle>,
    );
    const btnDef = screen.getByTestId('icon-btn-val-def');
    const btnAbc = screen.getByTestId('icon-btn-val-abc');

    expect(btnDef).toHaveClass('btn-icon-primary');
    expect(btnDef).toHaveAttribute('aria-selected', 'false');

    expect(btnAbc).toHaveClass('btn-icon-primary-active');
    expect(btnAbc).toHaveAttribute('aria-selected', 'true');

    userEvent.click(btnDef);

    waitFor(() => {
      expect(btnDef).toHaveClass('btn-icon-primary-active');
      expect(btnDef).toHaveAttribute('aria-selected', 'false');
    });

    waitFor(() => {
      expect(btnAbc).toHaveClass('btn-icon-primary');
      expect(btnAbc).toHaveAttribute('aria-selected', 'true');
    });

    waitFor(() => {
      expect(spyChanger).toHaveBeenCalledWith('def');
    });
  });
});
