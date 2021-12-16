import React from 'react';
import renderer from 'react-test-renderer';
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
const CardFooterWrapper = ({ orientation = 'vertical', ...props }) => (
  <CardContext.Provider value={{ orientation }}>
    <CardFooter {...props}>
      {actions}
    </CardFooter>
  </CardContext.Provider>
);

describe('<CardFooter />', () => {
  it('renders vertical orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders vertical orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper text={footerText} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked vertical orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper isStacked />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked vertical orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper text={footerText} isStacked />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders horizontal orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders horizontal orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" text={footerText} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked horizontal orientation without footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" isStacked />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked horizontal orientation with footer text', () => {
    const tree = renderer.create((<CardFooterWrapper orientation="horizontal" isStacked text={footerText} />)).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
