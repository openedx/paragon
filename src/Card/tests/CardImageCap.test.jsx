import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import CardImageCap from '../CardImageCap';
import CardContext from '../CardContext';

// eslint-disable-next-line react/prop-types
function CardImageCapWrapper({ orientation = 'vertical', isLoading, ...props }) {
  return <CardContext.Provider value={{ orientation, isLoading }}><CardImageCap {...props} /></CardContext.Provider>;
}

describe('<CardImageCap />', () => {
  it('renders with scr prop and srcAlt', () => {
    const tree = renderer.create((
      <CardImageCapWrapper src="http://fake.image" srcAlt="Alt text" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with src, logoSrc, logoAlt, fallbackSrc, fallbackLogoSrc props', () => {
    const tree = renderer.create((
      <CardImageCapWrapper
        src="http://fake.image"
        fallbackSrc="http://fake.image"
        logoSrc="http://fake.image"
        fallbackLogoSrc="http://fake.image"
        logoAlt="Logo alt"
      />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with scr prop in horizontal orientation', () => {
    const tree = renderer.create((
      <CardImageCapWrapper orientation="horizontal" src="http://fake.image" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with src, logoSrc, fallbackSrc, fallbackLogoSrc prop in horizontal orientation', () => {
    const tree = renderer.create((
      <CardImageCapWrapper
        orientation="horizontal"
        src="http://fake.image"
        fallbackSrc="http://fake.image"
        logoSrc="http://fake.image"
        fallbackLogoSrc="http://fake.image"
      />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with correct horizontal class', () => {
    const wrapper = mount(<CardImageCapWrapper orientation="horizontal" src="http://fake.image" />);

    expect(wrapper.exists('.horizontal')).toBe(true);
  });

  it('renders with correct alt texts', () => {
    const wrapper = mount(
      <CardImageCapWrapper
        src="http://fake.image"
        logoSrc="http://fake.image"
        srcAlt="Src alt text"
        logoAlt="Logo alt text"
      />,
    );
    const imgInstances = wrapper.find('img');
    expect(imgInstances.length).toEqual(2);
    expect(imgInstances.at(0).props().alt).toBe('Src alt text');
    expect(imgInstances.at(1).props().alt).toBe('Logo alt text');
  });
  it('render without loading state', () => {
    const wrapper = mount(
      <CardImageCapWrapper
        src="http://fake.image"
        logoSrc="http://fake.image"
      />,
    );
    expect(wrapper.exists('.pgn__card-image-cap-loader')).toBe(false);
    expect(wrapper.props().isLoading).toBeUndefined();
  });
  it('render with loading state', () => {
    const wrapper = mount(
      <CardImageCapWrapper
        src="http://fake.image"
        logoSrc="http://fake.image"
        isLoading
      />,
    );
    expect(wrapper.exists('.pgn__card-image-cap-loader')).toBe(true);
    expect(wrapper.props().isLoading).toBe(true);
  });
});
