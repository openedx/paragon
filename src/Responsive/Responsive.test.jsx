import React from 'react';
import { mount } from 'enzyme';

import '../utils/reactResponsive.mock';

import {
  breakpoints,
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  LargerThanExtraSmall,
} from './index';

describe('<ExtraSmall />', () => {
  it('should render children for extra small displays', () => {
    global.innerWidth = breakpoints.extraSmall.maxWidth;

    const wrapper = mount((
      <ExtraSmall>
        <p>Hello world</p>
      </ExtraSmall>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for larger than extra small displays', () => {
    global.innerWidth = breakpoints.small.minWidth;

    const wrapper = mount((
      <ExtraSmall>
        <p>Hello world</p>
      </ExtraSmall>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<Small />', () => {
  it('should render children for small displays', () => {
    global.innerWidth = breakpoints.small.maxWidth;

    const wrapper = mount((
      <Small>
        <p>Hello world</p>
      </Small>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for smaller than small displays', () => {
    global.innerWidth = breakpoints.extraSmall.maxWidth;

    const wrapper = mount((
      <Small>
        <p>Hello world</p>
      </Small>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });

  it('should not render children for larger than small displays', () => {
    global.innerWidth = breakpoints.medium.minWidth;

    const wrapper = mount((
      <Small>
        <p>Hello world</p>
      </Small>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<Medium />', () => {
  it('should render children for medium displays', () => {
    global.innerWidth = breakpoints.medium.maxWidth;

    const wrapper = mount((
      <Medium>
        <p>Hello world</p>
      </Medium>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for smaller than medium displays', () => {
    global.innerWidth = breakpoints.small.maxWidth;

    const wrapper = mount((
      <Medium>
        <p>Hello world</p>
      </Medium>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });

  it('should not render children for larger than medium displays', () => {
    global.innerWidth = breakpoints.large.minWidth;

    const wrapper = mount((
      <Medium>
        <p>Hello world</p>
      </Medium>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<Large />', () => {
  it('should render children for large displays', () => {
    global.innerWidth = breakpoints.large.maxWidth;

    const wrapper = mount((
      <Large>
        <p>Hello world</p>
      </Large>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for smaller than large displays', () => {
    global.innerWidth = breakpoints.medium.maxWidth;

    const wrapper = mount((
      <Large>
        <p>Hello world</p>
      </Large>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });

  it('should not render children for larger than large displays', () => {
    global.innerWidth = breakpoints.extraLarge.minWidth;

    const wrapper = mount((
      <Large>
        <p>Hello world</p>
      </Large>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<ExtraLarge />', () => {
  it('should render children for extra large displays', () => {
    global.innerWidth = breakpoints.extraLarge.minWidth;

    const wrapper = mount((
      <ExtraLarge>
        <p>Hello world</p>
      </ExtraLarge>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for smaller than extra large displays', () => {
    global.innerWidth = breakpoints.large.maxWidth;

    const wrapper = mount((
      <ExtraLarge>
        <p>Hello world</p>
      </ExtraLarge>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<ExtraLarge />', () => {
  it('should render children for larger than extra small displays', () => {
    global.innerWidth = breakpoints.small.minWidth;

    const wrapper = mount((
      <LargerThanExtraSmall>
        <p>Hello world</p>
      </LargerThanExtraSmall>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for extra small displays', () => {
    global.innerWidth = breakpoints.extraSmall.maxWidth;

    const wrapper = mount((
      <LargerThanExtraSmall>
        <p>Hello world</p>
      </LargerThanExtraSmall>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});
