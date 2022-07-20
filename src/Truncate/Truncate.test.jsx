import React from 'react';
import { mount } from 'enzyme';
import Truncate from './index';

describe('<Truncate />', () => {
  const wrapper = mount(
    <Truncate>
      Learners, course teams, researchers, developers
    </Truncate>,
  );

  it('render with inner children', () => {
    wrapper.setProps({ children: 'Learners, course teams, researchers, developers' });
    expect(wrapper.text()).toEqual('Learners, course teams, researchers, developers');
  });
  it('render DOM element', () => {
    wrapper.setProps({ typeElement: 'span' });
    const contents = wrapper.find('span');
    expect(contents.length).toEqual(1);
  });
  it('render with className', () => {
    wrapper.setProps({ className: 'pgn__truncate' });
    expect(wrapper.hasClass('pgn__truncate')).toEqual(true);
  });
  it('render with lines', () => {
    wrapper.setProps({ lines: 2 });
    expect(wrapper.props().lines).toEqual(2);
  });
  it('render with whiteSpace', () => {
    wrapper.setProps({ whiteSpace: true });
    expect(wrapper.props().whiteSpace).toEqual(true);
  });
  it('render with ellipsis', () => {
    wrapper.setProps({ ellipsis: '>>>' });
    expect(wrapper.props().ellipsis).toEqual('>>>');
  });
  // it('render with ellipsis', () => {
  //   const useReferenceSpy = jest.spyOn(React, 'useRef').mockReturnValue(ref);
  //   mount(
  //     <span>
  //       <Truncate>
  //         Learners, course teams, researchers, developers
  //       </Truncate>
  //     </span>,
  //   );
  //   expect(useReferenceSpy).toHaveBeenCalledTimes(2);
  //   // expect(ref.current.scrollWidth).not.toBeFalsy();
  //   // console.log(ref.current);
  // });
});
