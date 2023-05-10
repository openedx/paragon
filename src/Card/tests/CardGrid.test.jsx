import React from 'react';
import renderer from 'react-test-renderer';
import CardGrid from '../CardGrid';
import Card from '..';

const cardContent = (
  <Card>
    <Card.ImageCap src="http://fake.image" />
    <Card.Body>
      <Card.Header>Card title</Card.Header>
      <Card.Section>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Section>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
);

describe('<CardGrid />', () => {
  describe('Uncontrolled Rendering', () => {
    it('renders default columnSizes', () => {
      const tree = renderer.create((
        <CardGrid>
          {cardContent}
        </CardGrid>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Controlled Rendering', () => {
    it('renders with controlled columnSizes', () => {
      const tree = renderer.create((
        <CardGrid
          columnSizes={{
            xs: 12,
            md: 6,
            lg: 4,
            xl: 3,
          }}
        >
          {cardContent}
        </CardGrid>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('renders with disabled equal height', () => {
      const tree = renderer.create((
        <CardGrid hasEqualColumnHeights={false}>
          {cardContent}
        </CardGrid>
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
