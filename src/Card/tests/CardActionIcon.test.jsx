import React from 'react';
import renderer from 'react-test-renderer';
import CardActionIcon from '../CardActionIcon';

describe('<CardActionIcon />', () => {
  it('renders without props', () => {
    const tree = renderer.create((
      <CardActionIcon />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders with "overflow" option for actionIcon prop', () => {
    const tree = renderer.create((
      <CardActionIcon actionIcon="overflow" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
