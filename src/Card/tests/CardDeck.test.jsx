import React from 'react';
import renderer from 'react-test-renderer';
import CardDeck from '../CardDeck';
import Card from '../index';

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

function CardContent({ cardCount = 5, ...props }) {
  return Array.from({ length: cardCount }).map(() => <ExampleCard {...props} />);
}

describe('<CardDeck />', () => {
  it('renders default columnSizes', () => {
    const tree = renderer.create((
      <CardDeck>
        <CardContent />
      </CardDeck>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders with controlled columnSizes', () => {
    const tree = renderer.create((
      <CardDeck
        columnSizes={{
          xs: 12,
          md: 6,
          lg: 4,
          xl: 3,
        }}
      >
        <CardContent />
      </CardDeck>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has tabIndex="-1" when `hasInteractiveChildren` is true', () => {
    const tree = renderer.create((
      <CardDeck hasInteractiveChildren>
        <CardContent isClickable />
      </CardDeck>
    )).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
