import React from 'react';
import renderer from 'react-test-renderer';

import Spinner from '.';

describe('Spinner', () => {
  it('should render a spinner', () => {
    const tree = renderer.create((
      <Spinner animation="border" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render a spinner with screen reader text', () => {
    const tree = renderer.create((
      <Spinner animation="border" screenReaderText="loading" />
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
