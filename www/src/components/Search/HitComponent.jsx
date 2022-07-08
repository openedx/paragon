import React from 'react';
import PropTypes from 'prop-types';
import AlgoliaClient from './client';

function HitComponent({ hit, userId, children }) {
  const { url: searchResultUrl, objectID, position } = hit;

  const handleClick = (e) => {
    e.preventDefault();
    const eventData = {
      events: [
        {
          eventType: 'click',
          eventName: 'Search result clicked',
          index: process.env.GATSBY_ALGOLIA_INDEX_NAME,
          timestamp: +new Date(),
          queryID: global.localStorage?.getItem('pgn__algolia-queryID'),
          objectIDs: [objectID],
          positions: [position],
          userToken: userId,
        },
      ],
    };
    AlgoliaClient.post('/1/events', eventData).then(() => window.location.assign(searchResultUrl));
  };

  return <a href="/#" onClick={handleClick}>{children}</a>;
}

HitComponent.propTypes = {
  children: PropTypes.node.isRequired,
  hit: PropTypes.shape({
    url: PropTypes.string,
    objectID: PropTypes.string,
    position: PropTypes.number,
  }).isRequired,
  userId: PropTypes.string.isRequired,
};

export default HitComponent;
