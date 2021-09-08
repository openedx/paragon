import React from 'react';
import renderer from 'react-test-renderer';
import CardSelect from './CardSelect';

describe('<CardSelect />', () => {
  describe('First card selected', () => {
    it('First card selected', () => {
      const tree = renderer.create((
        <CardSelect
          cardsData={[
            { name: 'card1', title: 'Lorem Ipsum 1' },
            { name: 'card2', title: 'Lorem Ipsum 2', img: 'https://source.unsplash.com/360x200/?nature' },
            { name: 'card3', title: 'Lorem Ipsum 3', img: 'https://source.unsplash.com/360x200' }]}
          selectedCardName="card1"
        />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Second card selected', () => {
    it('Second card selected', () => {
      const tree = renderer.create((
        <CardSelect
          cardsData={[
            { name: 'card1', title: 'Lorem Ipsum 1' },
            { name: 'card2', title: 'Lorem Ipsum 2', img: 'https://source.unsplash.com/360x200/?nature' },
            { name: 'card3', title: 'Lorem Ipsum 3', img: 'https://source.unsplash.com/360x200' }]}
          selectedCardName="card2"
        />
      )).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
