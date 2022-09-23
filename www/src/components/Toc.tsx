import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Sticky } from '~paragon-react'; // eslint-disable-line

interface IItems {
  url?: string,
  title?: string,
  items?: Array<IItems>,
}

export interface IToc {
  data: {
    items?: Array<IItems>
  }
}

const Toc = ({ data }: IToc) => {
  const generateTree = (headings: { items?: Array<IItems> }) => (headings?.items?.length
    ? (
      <ul className="pgn-doc__toc-list">
        {headings.items.map(heading => (
          <li key={heading.url}>
            <a href={heading.url}>{heading.title}</a>
            {!!heading.items && generateTree(heading)}
          </li>
        ))}
      </ul>
    ) : null);

  const tocTree = generateTree(data);

  return tocTree ? (
    <Sticky className="pgn-doc__toc">
      <p className="pgn-doc__toc-header">Contents</p>
      {tocTree}
    </Sticky>
  ) : null;
};

const itemsShape = {
  url: PropTypes.string,
  title: PropTypes.string,
  items: PropTypes.array,
};
itemsShape.items = PropTypes.arrayOf(PropTypes.shape(itemsShape));

Toc.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape(itemsShape)),
  }).isRequired,
};

export default Toc;
