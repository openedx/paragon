import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Button from '../../Button';
import CardSection from '../CardSection';
import CardContext from '../CardContext';

// eslint-disable-next-line react/prop-types
function CardSectionWrapper({ isLoading }) {
  return (
    <CardContext.Provider value={{ isLoading }}>
      <CardSection />
    </CardContext.Provider>
  );
}

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
  it('render without loading state', () => {
    const wrapper = mount(<CardSectionWrapper />);
    expect(wrapper.exists('.pgn__card-section-loader')).toBe(false);
    expect(wrapper.props().isLoading).toBeUndefined();
  });
  it('render with loading state', () => {
    const wrapper = mount(<CardSectionWrapper isLoading />);
    expect(wrapper.exists('.pgn__card-section-loader')).toBe(true);
    expect(wrapper.props().isLoading).toBe(true);
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
