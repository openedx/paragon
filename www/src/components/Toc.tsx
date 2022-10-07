import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
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
  },
  className?: string,
}

const Toc = ({ data, className }: IToc) => {
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
    <Sticky
      offset={6}
      className={classNames('pgn-doc__toc', className)}
    >
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
  className: PropTypes.string,
};

Toc.defaultProps = {
  className: undefined,
};

export default Toc;
