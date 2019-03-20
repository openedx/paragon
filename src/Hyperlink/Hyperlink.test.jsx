import React from 'react';
import { mount } from 'enzyme';
import classNames from 'classnames';
import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';

import Hyperlink from './index';

const content = 'content';
const destination = 'destination';
const onClick = () => {};
const props = {
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
    const wrapper = mount(<Hyperlink {...props}>{content}</Hyperlink>);
    expect(wrapper.find('a').hostNodes().length).toEqual(1);
    expect(wrapper).toHaveLength(1);

    const anchor = wrapper.find('a').hostNodes();

    expect(anchor.prop('children')).toEqual([content, undefined]);
    expect(anchor.prop('href')).toEqual(destination);
    expect(anchor.prop('target')).toEqual('_self');
    expect(anchor.prop('onClick')).toEqual(onClick);

    expect(anchor.find('span')).toHaveLength(0);
    expect(anchor.find('i')).toHaveLength(0);
  });

  it('renders external Hyperlink', () => {
    const wrapper = mount(<Hyperlink {...externalLinkProps}>{content}</Hyperlink>);

    expect(wrapper.find('span')).toHaveLength(2);

    const icon = wrapper.find('span').at(1);

    expect(icon.prop('aria-hidden')).toEqual(false);
    expect(icon.prop('className'))
      .toEqual(classNames(FontAwesomeStyles.fa, FontAwesomeStyles['fa-external-link']));
    expect(icon.prop('aria-label')).toEqual(externalLinkAlternativeText);
    expect(icon.prop('title')).toEqual(externalLinkTitle);
  });
});

describe('event handlers are triggered correctly', () => {
  let spy;

  beforeEach(() => { spy = jest.fn(); });

  it('should fire onClick', () => {
    const wrapper = mount(<Hyperlink {...props} onClick={spy}>{content}</Hyperlink>);
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
