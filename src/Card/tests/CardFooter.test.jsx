import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
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
  it('renders footer text without clamp', () => {
    const wrapper = mount(<CardFooter>{actions}</CardFooter>);
    expect(wrapper.prop('hasClamp')).toEqual(false);
  });
  it('renders footer text with clamp', () => {
    const wrapper = mount(
      <CardFooter hasClamp textElement="Long footer Title">
        {actions}
      </CardFooter>,
    );
    expect(wrapper.prop('hasClamp')).toEqual(true);
  });
  it('renders footer text with clamp max lines', () => {
    const wrapper = mount(
      <CardFooter hasClamp maxLines={3} textElement="Long footer Title">
        {actions}
      </CardFooter>,
    );
    expect(wrapper.prop('maxLines')).toEqual(3);
  });
  it('renders footer text as element', () => {
    const textElement = <a href="https://example.com">Link text here</a>;
    const wrapper = mount(<CardFooterWrapper textElement={textElement} />);
    const link = wrapper.find('a');
    expect(wrapper.find('button').length).toEqual(2);
    expect(link.exists()).toEqual(true);
    expect(link.prop('children')).toEqual('Link text here');
    expect(link.prop('href')).toEqual('https://example.com');
  });
});
