import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { useWindowSize } from '../..';

function FakeComponent() {
  const { width, height } = useWindowSize();

  return <div>{height} {width}</div>;
}

describe('useWindowSize hook', () => {
  const { innerHeight, innerWidth } = global;
  afterEach(() => {
    // reset globals
    global.innerWidth = innerWidth;
    global.innerHeight = innerHeight;
  });
  it('changes the width when window width changes', () => {
    // Change the viewport to 500px.
    global.innerWidth = 500;
    const wrapper = mount(<FakeComponent />);
    expect(wrapper.text()).toMatch('500');
    global.innerWidth = 850;
    act(() => {
      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));
    });
    expect(wrapper.text()).toMatch('850');
  });
  it('changes height when window width changes', () => {
    // Change the viewport to 600px.
    global.innerHeight = 600;
    const wrapper = mount(<FakeComponent />);
    expect(wrapper.text()).toMatch('600');
    global.innerHeight = 1050;
    act(() => {
      // Trigger the window resize event.
      global.dispatchEvent(new Event('resize'));
    });
    expect(wrapper.text()).toMatch('1050');
  });
});
