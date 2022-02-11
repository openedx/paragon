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
    ) : 'No headings on the page');

  return (
    <div className={classNames(className, 'pgn-doc__toc')}>
      <p className="pgn-doc__toc-header">Contents</p>
      {generateTree(data)}
    </div>
  );
};

Toc.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object.isRequired,
  className: PropTypes.string,
};

Toc.defaultProps = {
  className: undefined,
};

export default Toc;
