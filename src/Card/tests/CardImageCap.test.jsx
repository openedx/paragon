import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CardImageCap from '../CardImageCap';

describe('<CardImageCap />', () => {
  it('renders with scr prop', () => {
    const tree = renderer.create((
      <CardImageCap src="http://fake.image" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with src and logoSrc prop', () => {
    const tree = renderer.create((
      <CardImageCap src="http://fake.image" logoSrc="http://fake.image" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with scr prop in horizontal orientation', () => {
    const tree = renderer.create((
      <CardImageCap
        src="http://fake.image"
        orientation="horizontal"
      />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with src and logoSrc prop in horizontal orientation', () => {
    const tree = renderer.create((
      <CardImageCap
        src="http://fake.image"
        logoSrc="http://fake.image"
        orientation="horizontal"
      />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with horizontal orientation', () => {
    const wrapper = mount(<CardImageCap src="http://fake.image" orientation="horizontal" />);

    expect(wrapper.exists('.horizontal')).toBe(true);
  });
});
