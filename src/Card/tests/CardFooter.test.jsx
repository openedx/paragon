import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../Button';
import CardFooter from '../CardFooter';

const footerText = 'Sample footer text';
const actions = (
  <>
    <Button>Action 1</Button>
    <Button>Action 2</Button>
  </>
);

describe('<CardFooter />', () => {
  it('renders vertical orientation without footer text', () => {
    const tree = renderer.create((
      <CardFooter>
        {actions}
      </CardFooter>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders vertical orientation with footer text', () => {
    const tree = renderer.create((
      <CardFooter text={footerText}>
        {actions}
      </CardFooter>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked vertical orientation without footer text', () => {
    const tree = renderer.create((
      <CardFooter isStacked>
        {actions}
      </CardFooter>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked vertical orientation with footer text', () => {
    const tree = renderer.create((
      <CardFooter isStacked text={footerText}>
        {actions}
      </CardFooter>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders horizontal orientation without footer text', () => {
    const tree = renderer.create((
      <CardFooter orientation="horizontal">
        {actions}
      </CardFooter>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders horizontal orientation with footer text', () => {
    const tree = renderer.create((
      <CardFooter text={footerText} orientation="horizontal">
        {actions}
      </CardFooter>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked horizontal orientation without footer text', () => {
    const tree = renderer.create((
      <CardFooter isStacked orientation="horizontal">
        {actions}
      </CardFooter>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders stacked horizontal orientation with footer text', () => {
    const tree = renderer.create((
      <CardFooter isStacked text={footerText} orientation="horizontal">
        {actions}
      </CardFooter>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
