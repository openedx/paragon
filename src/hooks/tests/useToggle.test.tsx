/* eslint-disable react/button-has-type */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useToggle } from '../..';
import { ToggleHandlers } from '../useToggle';

const TOGGLE_IS_ON = 'on';
const TOGGLE_IS_OFF = 'off';

const mockHandleToggleOn = jest.fn();
const mockHandleToggleOff = jest.fn();
const mockHandleToggle = jest.fn();

const resetHandlerMocks = () => {
  mockHandleToggleOn.mockReset();
  mockHandleToggleOff.mockReset();
  mockHandleToggle.mockReset();
};

// eslint-disable-next-line react/prop-types
function FakeComponent({ defaultIsOn, handlers }: { defaultIsOn: boolean, handlers: ToggleHandlers }) {
  const [isOn, setOn, setOff, toggle] = useToggle(defaultIsOn, handlers);

  return (
    <div>
      <div data-testid="toggle-value">{isOn ? TOGGLE_IS_ON : TOGGLE_IS_OFF}</div>
      <button id="set-on" onClick={setOn}>set on</button>
      <button id="set-off" onClick={setOff}>set off</button>
      <button id="toggle" onClick={toggle}>toggle</button>
    </div>
  );
}

describe('useToggle hook', () => {
  beforeEach(() => {
    resetHandlerMocks();
  });

  it('toggles respect defaults on or off', () => {
    render(<FakeComponent
      defaultIsOn={false}
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    expect(screen.getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_OFF);
    render(<FakeComponent
      defaultIsOn
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    expect(screen.getAllByTestId('toggle-value')[1]).toHaveTextContent(TOGGLE_IS_ON);
  });

  it('setOn turns toggle on', async () => {
    render(<FakeComponent
      defaultIsOn={false}
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    await userEvent.click(screen.getByText('set on'));
    expect(screen.getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_ON);
    expect(mockHandleToggleOn).toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();
    await userEvent.click(screen.getByText('set on'));
    expect(screen.getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_ON);
  });

  it('setOff turns toggle off', async () => {
    render(<FakeComponent
      defaultIsOn
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    await userEvent.click(screen.getByText('set off'));
    expect(screen.getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_OFF);
    expect(mockHandleToggleOff).toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();
    await userEvent.click(screen.getByText('set off'));
    expect(screen.getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_OFF);
  });

  it('toggle toggles', async () => {
    render(<FakeComponent
      defaultIsOn={false}
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    await userEvent.click(screen.getByText('toggle'));
    expect(screen.getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_ON);
    expect(mockHandleToggleOn).toHaveBeenCalled();
    expect(mockHandleToggleOff).not.toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();
    resetHandlerMocks();
    await userEvent.click(screen.getByText('toggle')); // Try again to ensure it changes it back.
    expect(screen.getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_OFF);
    expect(mockHandleToggleOn).not.toHaveBeenCalled();
    expect(mockHandleToggleOff).toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();
  });
});
