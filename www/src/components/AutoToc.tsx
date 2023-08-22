import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import slugify from 'slugify';
import { Sticky } from '~paragon-react';
import slugify from 'slugify';

interface IItems {
  url?: string,
  title?: string,
  items?: Array<IItems>,
}

export interface IAutoToc {
  className?: string,
  tab?: string,
  addAnchors?: boolean,
}

function createAnchor(slug: string): HTMLAnchorElement {
  const anchor = document.createElement('a');
  anchor.ariaHidden = 'true';
  anchor.tabIndex = -1;
  anchor.href = `#${slug}`;
  const span = document.createElement('span');
  span.className = 'pgn-doc__anchor';
  span.innerText = '#';
  anchor.appendChild(span);
  return anchor;
}

function getNestedHeadingsData(headingsArray: NodeListOf<HTMLHeadElement>): IItems {
  const result: IItems = { items: [] };
  let parentHeadingLevel = 2;
  headingsArray.forEach(heading => {
    const headingLevel = parseInt(heading.tagName.slice(-1), 10);
    const headingData = {
      url: `#${heading.id}`,
      title: heading.firstChild!.textContent!,
      items: [],
    };
    if (!result.items!.length || headingLevel <= parentHeadingLevel) {
      parentHeadingLevel = headingLevel;
      result.items!.push(headingData);
    } else {
      const headingDepth = headingLevel - parentHeadingLevel;
      let target = result.items![result.items!.length - 1];
      for (let i = 1; i < headingDepth; i++) {
        if (target?.items!.length) {
          target = target.items[target.items.length - 1];
        }
      }
      target.items!.push(headingData);
    }
  });
  return result;
}

function AutoToc({ className, tab = '', addAnchors = true }: IAutoToc) {
  const [active, setActive] = useState('');
  const [headingsData, setHeadingsData] = useState<IItems>({ items: [] });
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].intersectionRatio >= 0.5) {
        setActive(entries[0].target.id);
      }
    };

    observer.current = new IntersectionObserver(handleObserver, { rootMargin: '-50px 0px -80% 0px', threshold: 0.5 });
    const elements = document.querySelectorAll<HTMLHeadElement>('main h2, main h3, main h4, main h5, main h6');
    if (addAnchors) {
      elements.forEach(el => {
        if (el.textContent) {
          el.classList.add('pgn-doc__heading');
          const slug = slugify(el.textContent, { lower: true });
          el.id = slug;
          const anchor = createAnchor(slug);
          el.appendChild(anchor);
        }
      });
    }
    const headings = getNestedHeadingsData(elements);
    setHeadingsData(headings);
    elements.forEach((elem) => observer.current?.observe(elem));

    return () => observer.current?.disconnect();
  }, [tab, addAnchors]);

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

  const tocTree = generateTree(headingsData);

  return (
    <Sticky
      offset={6}
      className={classNames('pgn-doc__toc', className)}
    >
      <p className="pgn-doc__toc-header">Contents</p>
      {tocTree}
    </Sticky>
  );
}

AutoToc.propTypes = {
  className: PropTypes.string,
  tab: PropTypes.string,
  addAnchors: PropTypes.bool,
};

AutoToc.defaultProps = {
  className: undefined,
  tab: undefined,
  addAnchors: undefined,
};

export default AutoToc;
