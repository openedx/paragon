import React from 'react';
import { mount } from 'enzyme';

import Hyperlink from './index';

const content = 'content';
const destination = 'destination';
const onClick = () => {};
const props = {
  content,
  destination,
  onClick,
};
const externalLinkAlternativeText = 'externalLinkAlternativeText';
const externalLinkTitle = 'externalLinktTitle';
const externalLinkProps = {
  target: '_blank',
  externalLinkAlternativeText,
  externalLinkTitle,
  ...props,
};

describe('correct rendering', () => {
  it('renders Hyperlink', () => {
    const wrapper = mount(<Hyperlink {...props} />).find('a');
    expect(wrapper).toHaveLength(1);

    expect(wrapper.prop('className')).toContain('pgn__hyperlink');
    expect(wrapper.prop('children')).toEqual([content, undefined]);
    expect(wrapper.prop('href')).toEqual(destination);
    expect(wrapper.prop('target')).toEqual('_self');
    expect(wrapper.prop('onClick')).toEqual(onClick);

    expect(wrapper.find('span')).toHaveLength(0);
    expect(wrapper.find('i')).toHaveLength(0);
  });

  it('renders external Hyperlink', () => {
    const wrapper = mount(<Hyperlink {...externalLinkProps} />);

    expect(wrapper.find('span')).toHaveLength(3);

    const icon = wrapper.find('span').at(1);
    const iconImage = icon.find('svg').at(0);

    expect(icon.prop('className')).toEqual('pgn__icon');
    expect(iconImage.prop('role')).toEqual('img');
    expect(iconImage.prop('width')).toEqual(24);
    expect(iconImage.prop('height')).toEqual(24);
  });
});

describe('security', () => {
  it('prevents reverse tabnabbing for links with target="_blank"', () => {
    const wrapper = mount(<Hyperlink {...externalLinkProps} />);
    expect(wrapper.find('a').prop('rel')).toEqual('noopener noreferrer');
  });
});

describe('event handlers are triggered correctly', () => {
  let spy;

  beforeEach(() => { spy = jest.fn(); });

  it('should fire onClick', () => {
    const wrapper = mount(<Hyperlink {...props} onClick={spy} />);
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
