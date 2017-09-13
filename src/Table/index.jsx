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
          {this.props.columns.map(col => (
            <th
              key={col.key}
              scope="col"
            >
              {col.label}
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
            {this.props.columns.map(col => (
              <td key={col.key}>{row[col.key]}</td>
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
        styles['table-responsive'],
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
  columns: PropTypes.arrayOf(PropTypes.shape({
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
