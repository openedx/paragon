import React from 'react';
import renderer from 'react-test-renderer';
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
});
