import React from 'react';
import PropTypes from 'prop-types';

import styles from './Table.scss';

class Table extends React.Component {
  getHeadings() {
    return (
      <thead className={styles['thead-default']}>
        <tr>
          {this.props.headings.map(heading => (
            <th key={heading.key}>{heading.display}</th>
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
      <table className={styles.table}>
        {this.getHeadings(this.props.headings)}
        {this.getBody()}
      </table>
    );
  }
}

Table.propTypes = {
  headings: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Table;
