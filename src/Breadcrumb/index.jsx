import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Breadcrumb.scss';
import Icon from '../Icon';

const Breadcrumbs = ({ links, activeLabel, spacer }) => {
  const linkCount = links.length;

  return (
    <nav aria-label="breadcrumb">
      <ol className={classNames(styles['list-inline'])}>
        {links.map(({ url, label }, i) => (
          <React.Fragment key={url}>
            <li className={classNames(styles['list-inline-item'])}><a href={url}>{label}</a></li>
            {(activeLabel || ((i + 1) < linkCount)) &&
              <li className={classNames(styles['list-inline-item'])} role="presentation" aria-label="spacer">
                {spacer || <Icon className={['fa', 'fa-chevron-right']} />}
              </li>
            }
          </React.Fragment>
        ))}
        {activeLabel && <li className={classNames(styles['list-inline-item'])} key="active">{activeLabel}</li>}
      </ol>
    </nav>
  );
};

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
  activeLabel: PropTypes.string,
  spacer: PropTypes.element,
};

Breadcrumbs.defaultProps = {
  activeLabel: undefined,
  spacer: undefined,
};

export default Breadcrumbs;
