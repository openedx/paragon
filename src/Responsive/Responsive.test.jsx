import React from 'react';
import { mount } from 'enzyme';
import { Context as ResponsiveContext } from 'react-responsive';

import {
  breakpoints,
  ExtraSmall,
  Small,
  Medium,
  Large,
  ExtraLarge,
  ExtraExtraLarge,
  LargerThanExtraSmall,
} from './index';

describe('<ExtraSmall />', () => {
  it('should render children for extra small displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
        <ExtraSmall>
          <p>Hello world</p>
        </ExtraSmall>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for larger than extra small displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.small.minWidth }}>
        <ExtraSmall>
          <p>Hello world</p>
        </ExtraSmall>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<Small />', () => {
  it('should render children for small displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.small.maxWidth }}>
        <Small>
          <p>Hello world</p>
        </Small>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for smaller than small displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
        <Small>
          <p>Hello world</p>
        </Small>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });

  it('should not render children for larger than small displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.medium.minWidth }}>
        <Small>
          <p>Hello world</p>
        </Small>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<Medium />', () => {
  it('should render children for medium displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.medium.maxWidth }}>
        <Medium>
          <p>Hello world</p>
        </Medium>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for smaller than medium displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.small.maxWidth }}>
        <Medium>
          <p>Hello world</p>
        </Medium>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });

  it('should not render children for larger than medium displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.large.minWidth }}>
        <Medium>
          <p>Hello world</p>
        </Medium>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<Large />', () => {
  it('should render children for large displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
        <Large>
          <p>Hello world</p>
        </Large>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for smaller than large displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.medium.maxWidth }}>
        <Large>
          <p>Hello world</p>
        </Large>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });

  it('should not render children for larger than large displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.extraLarge.minWidth }}>
        <Large>
          <p>Hello world</p>
        </Large>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<ExtraLarge />', () => {
  it('should render children for extra large displays', () => {
  //  global.innerWidth = breakpoints.extraLarge.maxWidth;

    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.extraLarge.minWidth }}>
        <ExtraLarge>
          <p>Hello world</p>
        </ExtraLarge>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for smaller than extra large displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.large.maxWidth }}>
        <ExtraLarge>
          <p>Hello world</p>
        </ExtraLarge>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });

  it('should not render children for larger than extra large displays', () => {
    global.innerWidth = breakpoints.extraExtraLarge.minWidth;

    const wrapper = mount((
      <Large>
        <p>Hello world</p>
      </Large>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<ExtraExtraLarge />', () => {
  it('should render children for extra large displays', () => {
    global.innerWidth = breakpoints.extraExtraLarge.minWidth;

    const wrapper = mount((
      <ExtraExtraLarge>
        <p>Hello world</p>
      </ExtraExtraLarge>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for smaller than extra large displays', () => {
    global.innerWidth = breakpoints.extraLarge.maxWidth;

    const wrapper = mount((
      <ExtraExtraLarge>
        <p>Hello world</p>
      </ExtraExtraLarge>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});

describe('<ExtraLarge />', () => {
  it('should render children for larger than extra small displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.small.minWidth }}>
        <LargerThanExtraSmall>
          <p>Hello world</p>
        </LargerThanExtraSmall>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('should not render children for extra small displays', () => {
    const wrapper = mount((
      <ResponsiveContext.Provider value={{ width: breakpoints.extraSmall.maxWidth }}>
        <LargerThanExtraSmall>
          <p>Hello world</p>
        </LargerThanExtraSmall>
      </ResponsiveContext.Provider>
    ));
    expect(wrapper.find('p')).toHaveLength(0);
  });
});
