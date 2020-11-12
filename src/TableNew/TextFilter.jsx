import React from 'react';

function TextFilter({
  column: { filterValue, preFilteredRows, setFilter, Header },
}) {

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${Header}`}
    />
  );
}

export default TextFilter;