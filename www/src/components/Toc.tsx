import React from 'react';
import PropTypes from 'prop-types';
// @ts-ignore
import { Sticky } from '~paragon-react';

export interface TocPropsTypes {
  data: {
    items?: Array<{
      url?: string | undefined;
      title?: string | undefined }>
  }
}

const Toc = ({ data }: TocPropsTypes) => {
  const generateTree = (headings: { items?: Array<any>; }) => (headings?.items?.length
    ? (
      <ul className="pgn-doc__toc-list">
        {headings.items.map((heading) => (
          <li key={heading.url}>
            <a href={heading.url}>{heading.title}</a>
            {!!heading.items && (
              <ul className="pgn-doc__toc-list">
                {generateTree(heading)}
              </ul>
            )}
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
