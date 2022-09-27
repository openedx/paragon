import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Button from '../../Button';
import CardHeader from '../CardHeader';
import CardContext from '../CardContext';

// eslint-disable-next-line react/prop-types
function CardHeaderWrapper({ isLoading }) {
  return (
    <CardContext.Provider value={{ isLoading }}>
      <CardHeader />
    </CardContext.Provider>
  );
}

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
  it('render without loading state', () => {
    const wrapper = mount(<CardHeaderWrapper />);
    expect(wrapper.exists('.pgn__card-header-loader')).toBe(false);
    expect(wrapper.props().isLoading).toBeUndefined();
  });
  it('render with loading state', () => {
    const wrapper = mount(<CardHeaderWrapper isLoading />);
    expect(wrapper.exists('.pgn__card-header-loader')).toBe(true);
    expect(wrapper.props().isLoading).toBe(true);
  });
});
