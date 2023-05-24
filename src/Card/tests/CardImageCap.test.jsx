import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
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

    expect(screen.getByAltText('Src alt text').src).toEqual('http://src.image/');
    expect(screen.getByAltText('Logo alt text').src).toEqual('http://logo.image/');
  });

  it('render with loading state', () => {
    render(
      <CardImageCapWrapper
        src="http://fake.image"
        logoSrc="http://fake.image"
        srcAlt="Src alt text"
        logoAlt="Logo alt text"
        isLoading
        logoSkeleton
      />,
    );

    expect(screen.queryByAltText('Src alt text')).toBeNull();
    expect(screen.queryByAltText('Logo alt text')).toBeNull();

    expect(screen.getByTestId('image-loader-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('image-loader-wrapper').firstChild).toHaveClass('pgn__card-image-cap-loader');
    expect(screen.getByTestId('image-loader-wrapper').lastChild).toHaveClass('pgn__card-logo-cap');
  });

  it('replaces image with fallback one in case of error', () => {
    render(
      <CardImageCapWrapper
        src="http://src.image/"
        srcAlt="Src alt text"
        fallbackSrc="http://src.image.fallback/"
        logoSrc="http://logo.image/"
        fallbackLogoSrc="http://logo.image.fallback/"
        logoAlt="Logo alt text"
      />,
    );
    const srcImg = screen.getByAltText('Src alt text');
    expect(srcImg.src).toEqual('http://src.image/');
    fireEvent.load(srcImg);
    fireEvent.error(srcImg);
    expect(srcImg.src).toEqual('http://src.image.fallback/');

    const logoImg = screen.getByAltText('Logo alt text');
    expect(logoImg.src).toEqual('http://logo.image/');
    fireEvent.load(srcImg);
    fireEvent.error(logoImg);
    expect(logoImg.src).toEqual('http://logo.image.fallback/');
  });

  it('hiding component if it isn`t fallbackLogoSrc and logoSrc don`t work', () => {
    render(<CardImageCapWrapper logoSrc="fakeURL" logoAlt="Logo alt text" />);

    const logoImg = screen.getByAltText('Logo alt text');
    fireEvent.load(logoImg);
    expect(logoImg.className).toEqual('pgn__card-logo-cap show');
    fireEvent.error(logoImg);
    expect(logoImg.className).toEqual('pgn__card-logo-cap');
  });

  it('hiding component if it isn`t fallbackSrc and src don`t work', () => {
    render(<CardImageCapWrapper src="fakeURL" fallbackSrc="fakeURL" srcAlt="Src alt text" />);

    const srcImg = screen.getByAltText('Src alt text');
    fireEvent.load(srcImg);
    fireEvent.error(srcImg);
    // test-file-stub is what our fileMock.js returns for all images
    expect(srcImg.src.endsWith('test-file-stub')).toEqual(true);
  });
});
