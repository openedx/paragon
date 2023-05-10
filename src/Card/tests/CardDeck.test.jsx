import React from 'react';
import renderer from 'react-test-renderer';
import { v4 as uuidv4 } from 'uuid';
import CardDeck from '../CardDeck';
import Card from '..';

function ExampleCard(props) {
  return (
    <Card {...props}>
      <Card.ImageCap src="http://fake.image" />
      <Card.Body>
        <Card.Header>Card title</Card.Header>
        <Card.Section>
          This is a wider card with supporting text below as a natural lead-in to
          additional content. This card has even longer content than the first to
          show that equal height action.
        </Card.Section>
      </Card.Body>
      <Card.Footer textElement={<small className="text-muted">Last updated 3 mins ago</small>} />
    </Card>
  );
}

function getCardContent({ cardCount = 5, ...cardProps } = {}) {
  return Array.from({ length: cardCount }).map(() => <ExampleCard key={uuidv4()} {...cardProps} />);
}

describe('<CardDeck />', () => {
  it('renders default columnSizes', () => {
    const cardContent = getCardContent();
    const tree = renderer.create((
      <CardDeck>
        {cardContent}
      </CardDeck>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with controlled columnSizes', () => {
    const cardContent = getCardContent();
    const tree = renderer.create((
      <CardDeck
        columnSizes={{
          xs: 12,
          md: 6,
          lg: 4,
          xl: 3,
        }}
      >
        {cardContent}
      </CardDeck>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has tabIndex="-1" when `hasInteractiveChildren` is true', () => {
    const cardContent = getCardContent({ isClickable: true });
    const tree = renderer.create((
      <CardDeck hasInteractiveChildren>
        {cardContent}
      </CardDeck>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with disabled equal height', () => {
    const cardContent = getCardContent();
    const tree = renderer.create((
      <CardDeck hasEqualColumnHeights={false}>
        {cardContent}
      </CardDeck>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
