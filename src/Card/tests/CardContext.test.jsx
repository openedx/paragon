import React from 'react';
import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { CardContextProvider } from '../CardContext';
import Card from '..';

describe('correct rendering', () => {
  it('renders a context element', () => {
    const tree = renderer.create((
      <CardContextProvider>Text</CardContextProvider>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders a context with correct props', () => {
    render(
      <CardContextProvider orientation="horizontal">
        <Card.Footer>Test</Card.Footer>
      </CardContextProvider>,
    );
    expect(screen.getByText('Test').className).toContain('horizontal');
  });
});
