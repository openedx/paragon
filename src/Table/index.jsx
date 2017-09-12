import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Table.scss';

class Table extends React.Component {
  getCaption() {
    return this.props.caption && (
      <caption>{this.props.caption}</caption>
    );
  }

  getHeadings() {
    return (
      <thead className={classNames(
        ...this.props.headingClassName.map(className => styles[className]),
      )}
      >
        <tr>
          {this.props.headings.map(heading => (
            <th
              key={heading.key}
              scope="col"
            >
              {heading.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }

  getBody() {
    return (
      <tbody>
        {this.props.data.map((row, i) => (
          <tr key={i}>
            {this.props.headings.map(heading => (
              <td key={heading.key}>{row[heading.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <table className={classNames(
        styles.table,
        ...this.props.className.map(className => styles[className]),
      )}
      >
        {this.getCaption()}
        {this.getHeadings()}
        {this.getBody()}
      </table>
    );
  }
}

Table.propTypes = {
  caption: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
  className: PropTypes.arrayOf(PropTypes.string),
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headings: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
  })).isRequired,
  headingClassName: PropTypes.arrayOf(PropTypes.string),
};

Table.defaultProps = {
  caption: null,
  className: [],
  headingClassName: [],
};

export default Table;
