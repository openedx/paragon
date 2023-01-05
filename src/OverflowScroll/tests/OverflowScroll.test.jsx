import React from 'react';
import renderer from 'react-test-renderer';
import OverflowScroll from '../OverflowScroll';

describe('<OverflowScroll />', () => {
  it('renders OverflowScroll', () => {
    const tree = renderer.create((
      <OverflowScroll ariaLabel="example overflow scroll">
        <OverflowScroll.Items>
          <div>item</div>
          <div>item</div>
          <div>item</div>
          <div>item</div>
          <div>item</div>
        </OverflowScroll.Items>
      </OverflowScroll>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
