import React from 'react';
import { mount } from 'enzyme';
import Truncate from './index';

describe('<Truncate />', () => {
  it('render with inner children', () => {
    const wrapper = mount(
      <Truncate>
        Learners, course teams, researchers, developers
      </Truncate>,
    );
    expect(wrapper.text()).toEqual('Learners, course teams, researchers, developers');
  });
  it('render DOM element', () => {
    const wrapper = mount(
      <Truncate typeElement="span">
        Learners, course teams, researchers, developers
      </Truncate>,
    );
    const contents = wrapper.find('span');
    expect(contents.length).toEqual(1);
  });
  it('render with className', () => {
    const wrapper = mount(
      <Truncate className="pgn__truncate">
        Learners, course teams, researchers, developers
      </Truncate>,
    );
    expect(wrapper.hasClass('pgn__truncate')).toEqual(true);
  });
  it('render with lines', () => {
    const wrapper = mount(
      <Truncate lines={2}>
        Learners, course teams, researchers, developers
      </Truncate>,
    );
    expect(wrapper.props().lines).toEqual(2);
  });
  it('render with whiteSpace', () => {
    const wrapper = mount(
      <Truncate whiteSpace>
        Learners, course teams, researchers, developers
      </Truncate>,
    );
    expect(wrapper.props().whiteSpace).toEqual(true);
  });
  it('render with ellipsis', () => {
    const wrapper = mount(
      <Truncate ellipsis=">>>">
        Learners, course teams, researchers, developers
      </Truncate>,
    );
    expect(wrapper.props().ellipsis).toEqual('>>>');
  });
});
