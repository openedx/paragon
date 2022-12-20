import React, { useEffect, useRef, useState } from 'react';
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

function Toc({ data, className }: IToc) {
  const [active, setActive] = useState('');
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].intersectionRatio >= 0.5) {
        setActive(entries[0].target.id);
      }
    };

    observer.current = new IntersectionObserver(handleObserver, { rootMargin: '-50px 0px -80% 0px', threshold: 0.5 });
    const elements = document.querySelectorAll('main h2, main h3, main h4, main h5, main h6');
    elements.forEach((elem) => observer.current?.observe(elem));

    return () => observer.current?.disconnect();
  }, [data]);

  const generateTree = (headings: { items?: Array<IItems> }) => (headings?.items?.length
    ? (
      <ul className="pgn-doc__toc-list">
        {headings.items.map(heading => (
          <li key={heading.url}>
            <a
              href={heading.url}
              className={classNames({ active: `#${active}` === heading.url })}
            >
              {heading.title}
            </a>
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
}

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
