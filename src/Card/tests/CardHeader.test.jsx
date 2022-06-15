import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../../Button';
import CardHeader from '../CardHeader';
import CardContext from '../CardContext';

// eslint-disable-next-line react/prop-types
const CardHeaderWrapper = ({ isLoading }) => (
  <CardContext.Provider value={{ isLoading }}>
    <CardHeader />
  </CardContext.Provider>
);

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
  it('renders with loading state', () => {
    const tree = renderer.create((
      <CardHeaderWrapper isLoading />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
