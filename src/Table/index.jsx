import React from 'react';
import classNames from 'classnames';
import FontAwesomeStyles from 'font-awesome/css/font-awesome.min.css';
import isRequiredIf from 'react-proptype-conditional-require';
import PropTypes from 'prop-types';

import styles from './Table.scss';
import Button from '../Button';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = props.tableSortable ?
      {
        sortedColumn: this.props.defaultSortedColumn,
        sortDirection: this.props.defaultSortDirection,
      }
      :
      {
        sortedColumn: '',
        sortDirection: '',
      };

    this.onSortClick = this.onSortClick.bind(this);
  }

  onSortClick(columnKey) {
    let newDirection = 'desc';

    if (this.state.sortedColumn === columnKey) {
      newDirection = (this.state.sortDirection === 'desc' ? 'asc' : 'desc');

      this.setState({
        sortDirection: newDirection,
      });
    } else {
      this.setState({
        sortedColumn: columnKey,
        sortDirection: newDirection,
      });
    }

    const currentlySortedColumn = this.props.columns.find(
      column => (columnKey === column.key));
    currentlySortedColumn.onSort(newDirection);
  }

  getCaption() {
    return this.props.caption && (
      <caption>{this.props.caption}</caption>
    );
  }

  getHeadingText(columnKey) {
    let text = '';

    if (this.state.sortedColumn === columnKey) {
      text = this.state.sortDirection === 'desc' ? 'sort descending' : 'sort ascending';
    } else {
      text = 'click to sort';
    }

    return text;
  }

  /* eslint-disable class-methods-use-this */
  getSortIcon(sortDirection) {
    let sortIconClassName = '';

    switch (sortDirection) {
      case 'asc':
        sortIconClassName = 'fa-sort-asc';
        break;
      case 'desc':
        sortIconClassName = 'fa-sort-desc';
        break;
      default:
        sortIconClassName = 'fa-sort';
        break;
    }
    return (<span
      className={classNames(FontAwesomeStyles.fa, FontAwesomeStyles[sortIconClassName])}
    />);
  }

  getTableHeading(column) {
    return (
      this.props.tableSortable && column.columnSortable ?
        <Button
          display={
            <span>
              {column.label}
              <span className={classNames(styles['sr-only'])}>
                {' '}
                {this.getHeadingText(column.key)}
              </span>
              {' '}
              {this.getSortIcon(column.key === this.state.sortedColumn ? this.state.sortDirection : '')}
            </span>}
          onClick={() => this.onSortClick(column.key)}
        />
        :
        column.label
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
              className={this.props.tableSortable ?
                classNames({ sortable: col.columnSortable }) :
                undefined}
              key={col.key}
              scope="col"
            >
              {this.getTableHeading(col)}
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
    columnSortable: isRequiredIf(PropTypes.bool, props => props.tableSortable),
    onSort: isRequiredIf(PropTypes.func, props => props.columnSortable),
  })).isRequired,
  headingClassName: PropTypes.arrayOf(PropTypes.string),
  tableSortable: PropTypes.bool,
  /* eslint-disable react/require-default-props */
  defaultSortedColumn: isRequiredIf(PropTypes.string, props => props.tableSortable),
  /* eslint-disable react/require-default-props */
  defaultSortDirection: isRequiredIf(PropTypes.string, props => props.tableSortable),
};

Table.defaultProps = {
  caption: null,
  className: [],
  headingClassName: [],
  tableSortable: false,
};

export default Table;
