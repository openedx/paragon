import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../Button';
import CardHeader from '../CardHeader';

describe('<CardHeader />', () => {
  it('renders with title prop', () => {
    const tree = renderer.create((
      <CardHeader title="Title" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with title and subtitle prop', () => {
    const tree = renderer.create((
      <CardHeader title="Title" subtitle="Subtitle" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with actions', () => {
    const tree = renderer.create((
      <CardHeader
        title="Title"
        subtitle="Subtitle"
        actions={
          <Button>Action</Button>
      }
      />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with hasClamp prop', () => {
    const tree = renderer.create((
      <CardHeader hasClamp />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with maxLines prop', () => {
    const tree = renderer.create((
      <CardHeader hasClamp maxLines={2} />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
