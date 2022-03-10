import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Toc = ({ data, className }) => {
  const generateTree = (headings) => (headings?.items?.length
    ? (
      <ul className="pgn-doc__toc-list">
        {headings.items.map(heading => (
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
    <div className={classNames(className, 'pgn-doc__toc')}>
      <p className="pgn-doc__toc-header">Contents</p>
      {tocTree}
    </div>
  ) : null;
};

const itemsShape = {
  url: PropTypes.string,
  title: PropTypes.string,
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
