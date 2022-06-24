/* eslint-disable react/button-has-type */
import React from 'react';
import { mount } from 'enzyme';
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

const expectToggleToBeOn = (wrapper) => {
  expect(wrapper.find('#toggle-value').text()).toMatch(TOGGLE_IS_ON);
};
const expectToggleToBeOff = (wrapper) => {
  expect(wrapper.find('#toggle-value').text()).toMatch(TOGGLE_IS_OFF);
};

// eslint-disable-next-line react/prop-types
function FakeComponent({ defaultIsOn, handlers }) {
  const [isOn, setOn, setOff, toggle] = useToggle(defaultIsOn, handlers);

  return (
    <div>
      <div id="toggle-value">{isOn ? TOGGLE_IS_ON : TOGGLE_IS_OFF}</div>
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

  const wrapper = mount((
    <FakeComponent
      defaultIsOn={false}
      handlers={{
        handleToggleOn: mockHandleToggleOn,
        handleToggleOff: mockHandleToggleOff,
        handleToggle: mockHandleToggle,
      }}
    />
  ));
  const wrapperDefaultOnNoHandlers = mount(<FakeComponent defaultIsOn />);

  it('toggles respect defaults on or off', () => {
    expectToggleToBeOff(wrapper);
    expectToggleToBeOn(wrapperDefaultOnNoHandlers);
  });

  it('setOn turns toggle on', () => {
    wrapper.find('#set-on').simulate('click');
    wrapper.update();
    expectToggleToBeOn(wrapper);
    expect(mockHandleToggleOn).toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();

    // try again to ensure on only sets it on.
    wrapper.find('#set-on').simulate('click');
    wrapper.update();
    expectToggleToBeOn(wrapper);
  });
  // Toggle is on
  it('setOff turns toggle off', () => {
    wrapper.find('#set-off').simulate('click');
    wrapper.update();
    expectToggleToBeOff(wrapper);
    expect(mockHandleToggleOff).toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();

    // try again to ensure on only sets it off.
    wrapper.find('#set-off').simulate('click');
    wrapper.update();
    expectToggleToBeOff(wrapper);
  });
  // Toggle is off
  it('toggle toggles', () => {
    wrapper.find('#toggle').simulate('click');
    wrapper.update();
    expectToggleToBeOn(wrapper);
    expect(mockHandleToggleOn).toHaveBeenCalled();
    expect(mockHandleToggleOff).not.toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();

    resetHandlerMocks();

    // try again to ensure it changes it back
    wrapper.find('#toggle').simulate('click');
    wrapper.update();
    expectToggleToBeOff(wrapper);
    expect(mockHandleToggleOn).not.toHaveBeenCalled();
    expect(mockHandleToggleOff).toHaveBeenCalled();
    expect(mockHandleToggle).toHaveBeenCalled();
  });
});
