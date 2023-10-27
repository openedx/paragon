import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Button from '../../Button';
import CardFooter from '../CardFooter';
import CardContext from '../CardContext';

const footerText = 'Sample footer text';
const actions = (
  <>
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </>
);

// eslint-disable-next-line react/prop-types
function CardFooterWrapper({ orientation = 'vertical', isLoading, ...props }) {
  return (
    <CardContext.Provider value={{ orientation, isLoading }}>
      <CardFooter {...props}>
        {actions}
      </CardFooter>
    </CardContext.Provider>
  );
}

describe('<CardFooter />', () => {
  it('renders vertical orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders vertical orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper textElement={footerText} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked vertical orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper isStacked />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked vertical orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper textElement={footerText} isStacked />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders horizontal orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders horizontal orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" textElement={footerText} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked horizontal orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" isStacked />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked horizontal orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" isStacked textElement={footerText} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders footer text as element', () => {
    const textElement = <a href="https://example.com">Link text here</a>;
    const { getByText } = render(<CardFooterWrapper textElement={textElement} />);
    const link = getByText('Link text here');

    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('https://example.com');
  });

  it('renders without loading state', () => {
    const { container } = render(<CardFooterWrapper />);
    expect(container.querySelector('.pgn__card-footer-loader')).toBeNull();
  });

  it('renders with loading state', () => {
    const { container } = render(<CardFooterWrapper isLoading />);
    expect(container.querySelector('.pgn__card-footer-loader')).toBeTruthy();
  });
});
