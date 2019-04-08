import React from 'react';
import classNames from 'classnames';
import isRequiredIf from 'react-proptype-conditional-require';
import PropTypes from 'prop-types';

import Button from '../Button';
import withDeprecatedProps, { DEPR_TYPES } from '../withDeprecatedProps';


class Table extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sortedColumn: props.tableSortable ? this.props.defaultSortedColumn : '',
      sortDirection: props.tableSortable ? this.props.defaultSortDirection : '',
    };

    this.onSortClick = this.onSortClick.bind(this);
  }

  onSortClick(columnKey) {
    let newDirection = 'desc';

    if (this.state.sortedColumn === columnKey) {
      newDirection = (this.state.sortDirection === 'desc' ? 'asc' : 'desc');
    }

    this.setState({
      sortedColumn: columnKey,
      sortDirection: newDirection,
    });

    const currentlySortedColumn = this.props.columns.find(column => (columnKey === column.key));
    currentlySortedColumn.onSort(newDirection);
  }

  getCaption() {
    return this.props.caption && (
      <caption>{this.props.caption}</caption>
    );
  }

  getSortButtonScreenReaderText(columnKey) {
    let text;

    if (this.state.sortedColumn === columnKey) {
      text = this.props.sortButtonsScreenReaderText[this.state.sortDirection];
    } else {
      text = this.props.sortButtonsScreenReaderText.defaultText;
    }

    return text;
  }

  getSortIcon(sortDirection) {
    const sortIconClassName = ['fa-sort', sortDirection].filter(n => n).join('-');

    return (<span
      className={classNames('fa', sortIconClassName)}
      aria-hidden
    />);
  }

  getTableHeading(column) {
    let heading;
    if (this.props.tableSortable && column.columnSortable) {
      heading = (<Button
        className={['btn-header']}
        label={
          <span>
            {column.label}
            <span className={classNames('sr-only')}>
              {' '}
              {this.getSortButtonScreenReaderText(column.key)}
            </span>
            {' '}
            {this.getSortIcon(column.key === this.state.sortedColumn ? this.state.sortDirection : '')}
          </span>}
        onClick={() => this.onSortClick(column.key)}
      />);
    } else if (column.hideHeader) {
      heading = (<span className={classNames('sr-only')}>{column.label}</span>);
    } else {
      heading = column.label;
    }

    return heading;
  }

  getHeadings() {
    return (
      <thead
        className={classNames(
          ...this.props.headingClassName,
          { 'd-inline': this.props.hasFixedColumnWidths },
        )}
      >
        <tr className={classNames({ 'd-flex': this.props.hasFixedColumnWidths })}>
          {this.props.columns.map(col => (
            <th
              className={classNames(
                { sortable: this.props.tableSortable && col.columnSortable },
                this.props.hasFixedColumnWidths ? col.width : null,
              )}
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
      <tbody className={classNames({ 'd-inline': this.props.hasFixedColumnWidths })}>
        {this.props.data.map((row, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={i} className={classNames({ 'd-flex': this.props.hasFixedColumnWidths })}>
            {this.props.columns.map(({ key, width }) => (
              React.createElement(
                (key === this.props.rowHeaderColumnKey) ? 'th' : 'td',
                {
                  key,
                  className: classNames(this.props.hasFixedColumnWidths ? width : null),
                  scope: (key === this.props.rowHeaderColumnKey) ? 'row' : null,
                },
                row[key],
              )
            ))}
          </tr>
        ))}
      </tbody>
    );
  }

  render() {
    return (
      <table className={classNames(
        'table',
        this.props.className,
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
  className: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
    columnSortable: isRequiredIf(PropTypes.bool, props => props.tableSortable),
    onSort: isRequiredIf(PropTypes.func, props => props.columnSortable),
    hideHeader: PropTypes.bool,
    width: isRequiredIf(PropTypes.string, props => props.hasFixedColumnWidths),
  })).isRequired,
  headingClassName: PropTypes.arrayOf(PropTypes.string),
  tableSortable: PropTypes.bool,
  hasFixedColumnWidths: PropTypes.bool,
  /* eslint-disable react/require-default-props */
  defaultSortedColumn: isRequiredIf(PropTypes.string, props => props.tableSortable),
  /* eslint-disable react/require-default-props */
  defaultSortDirection: isRequiredIf(PropTypes.string, props => props.tableSortable),
  sortButtonsScreenReaderText: isRequiredIf(
    PropTypes.shape({
      asc: PropTypes.string,
      desc: PropTypes.string,
      defaultText: PropTypes.string,
    }),
    props => props.tableSortable,
  ),
  rowHeaderColumnKey: PropTypes.string,
};

Table.defaultProps = {
  caption: null,
  className: undefined,
  headingClassName: [],
  tableSortable: false,
  hasFixedColumnWidths: false,
  sortButtonsScreenReaderText: {
    asc: 'sort ascending',
    desc: 'sort descending',
    defaultText: 'click to sort',
  },
};


export default withDeprecatedProps(Table, 'Table', {
  className: {
    deprType: DEPR_TYPES.FORMAT,
    expect: value => typeof value === 'string',
    transform: value => (Array.isArray(value) ? value.join(' ') : value),
    message: 'It should be a string.',
  },
});
