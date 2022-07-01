import React from 'react';
import { mount } from 'enzyme';
import DragError from '../DragError';

describe('<Dropzone.DragError />', () => {
  it('renders error message', () => {
    const wrapper = mount(<DragError message="Drag error message" />);
    const content = wrapper.find('div.pgn__dropzone-error-wrapper');
    expect(content.text()).toEqual('Drag error message');
  });
});
