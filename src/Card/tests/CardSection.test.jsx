import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Button from '../../Button';
import CardSection from '../CardSection';

describe('<CardSection />', () => {
  it('renders with default props', () => {
    const tree = renderer.create((
      <CardSection>
        Section content
      </CardSection>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with custom title prop', () => {
    const tree = renderer.create((
      <CardSection title="Custom title">
        Section content
      </CardSection>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with custom actions prop', () => {
    const tree = renderer.create((
      <CardSection
        title="Custom title"
        actions={
          <Button>Action</Button>
        }
      >
        Section content
      </CardSection>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders muted variant', () => {
    const tree = renderer.create((
      <CardSection
        title="Custom title"
        muted
        actions={
          <Button>Action</Button>
        }
      >
        Section content
      </CardSection>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders card section text without clamp', () => {
    const wrapper = mount(<CardSection>Section content</CardSection>);
    expect(wrapper.prop('hasClamp')).toEqual(false);
  });
  it('renders card section text with clamp', () => {
    const wrapper = mount(
      <CardSection hasClamp title="Section title">
        Section content
      </CardSection>,
    );
    expect(wrapper.prop('hasClamp')).toEqual(true);
  });
  it('renders card section text with clamp max lines', () => {
    const wrapper = mount(
      <CardSection hasClamp maxLines={2} title="Section title">
        Section content
      </CardSection>,
    );
    expect(wrapper.prop('maxLines')).toEqual(2);
  });
});
