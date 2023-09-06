/* eslint-disable react/button-has-type */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { useToggle } from '../..';

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
function FakeComponent({ defaultIsOn, handlers }) {
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
    const { getByTestId } = render(<FakeComponent
      defaultIsOn={false}
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    expect(getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_OFF);
    const { getAllByTestId } = render(<FakeComponent
      defaultIsOn
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    expect(getAllByTestId('toggle-value')[1]).toHaveTextContent(TOGGLE_IS_ON);
  });

  it('setOn turns toggle on', () => {
    const { getByText, getByTestId } = render(<FakeComponent
      defaultIsOn={false}
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    fireEvent.click(getByText('set on'));
    expect(getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_ON);
    expect(mockHandleToggleOn).toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();
    fireEvent.click(getByText('set on'));
    expect(getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_ON);
  });

  it('setOff turns toggle off', () => {
    const { getByText, getByTestId } = render(<FakeComponent
      defaultIsOn
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    fireEvent.click(getByText('set off'));
    expect(getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_OFF);
    expect(mockHandleToggleOff).toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();
    fireEvent.click(getByText('set off'));
    expect(getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_OFF);
  });

  it('toggle toggles', () => {
    const { getByText, getByTestId } = render(<FakeComponent
      defaultIsOn={false}
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />);
    fireEvent.click(getByText('toggle'));
    expect(getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_ON);
    expect(mockHandleToggleOn).toHaveBeenCalled();
    expect(mockHandleToggleOff).not.toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();
    resetHandlerMocks();
    fireEvent.click(getByText('toggle')); // Try again to ensure it changes it back.
    expect(getByTestId('toggle-value')).toHaveTextContent(TOGGLE_IS_OFF);
    expect(mockHandleToggleOn).not.toHaveBeenCalled();
    expect(mockHandleToggleOff).toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();
  });
});
