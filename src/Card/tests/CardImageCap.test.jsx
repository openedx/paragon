import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
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

  it('renders with src, logoSrc and logoAlt props', () => {
    const tree = renderer.create((
      <CardImageCapWrapper src="http://fake.image" logoSrc="http://fake.image" logoAlt="Logo alt" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with scr prop in horizontal orientation', () => {
    const tree = renderer.create((
      <CardImageCapWrapper orientation="horizontal" src="http://fake.image" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with src and logoSrc prop in horizontal orientation', () => {
    const tree = renderer.create((
      <CardImageCapWrapper orientation="horizontal" src="http://fake.image" logoSrc="http://fake.image" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with loading equals lazy', () => {
    const tree = renderer.create((
      <CardImageCapWrapper src="http://fake.image" logoSrc="http://fake.image" logoAlt="Logo alt" imageLoadingType="lazy" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with correct horizontal class', async () => {
    const { container } = render(<CardImageCapWrapper orientation="horizontal" src="http://fake.image" />);

    expect(container.firstChild).toHaveClass('pgn__card-wrapper-image-cap horizontal');
  });

  it('renders with correct alt texts', async () => {
    render(
      <CardImageCapWrapper
        src="http://src.image/"
        logoSrc="http://logo.image/"
        srcAlt="Src alt text"
        logoAlt="Logo alt text"
      />,
    );

    expect(screen.getByAltText('Src alt text')).toBeInTheDocument();
    expect(screen.getByAltText('Logo alt text')).toBeInTheDocument();
  });
});
