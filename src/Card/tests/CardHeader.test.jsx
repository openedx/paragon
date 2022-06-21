import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
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
  it('renders card header text without clamp', () => {
    const wrapper = mount(<CardHeader />);
    expect(wrapper.prop('hasClamp')).toEqual(false);
  });
  it('renders card header text with clamp', () => {
    const wrapper = mount(<CardHeader hasClamp />);
    expect(wrapper.prop('hasClamp')).toEqual(true);
  });
  it('renders card header text with clamp max lines', () => {
    const wrapper = mount(<CardHeader hasClamp maxLines={2} />);
    expect(wrapper.prop('maxLines')).toEqual(2);
  });
});
