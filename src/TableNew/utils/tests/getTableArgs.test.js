/* eslint-disable object-curly-newline */
import {
  useSortBy, useFilters, useRowSelect, usePagination,
} from 'react-table';
import getTableArgs from '../getTableArgs';

console.log('GET TABLE ARGS', getTableArgs);

describe('getTableArgs', () => {
  const tableOptions = { foo: 'bar' };
  it('returns tableOptions if no other arguments are given', () => {
    expect(getTableArgs({ tableOptions })).toEqual([tableOptions]);
  });
  // order is important for these arguments
  test.each([
    [{ tableOptions, isFilterable: true }, [tableOptions, useFilters]],
    [{ tableOptions, isSelectable: true }, [tableOptions, useRowSelect]],
    [{ tableOptions, isSortable: true }, [tableOptions, useSortBy]],
    [{ tableOptions, isPaginated: true }, [tableOptions, usePagination]],
    [{ tableOptions, isFilterable: true, isSelectable: true }, [tableOptions, useFilters, useRowSelect]],
    [
      { tableOptions, isFilterable: true, isSelectable: true, isSortable: true, isPaginated: true },
      [tableOptions, useFilters, useSortBy, usePagination, useRowSelect],
    ],
    [
      { tableOptions, isSelectable: true, isSortable: true },
      [tableOptions, useSortBy, useRowSelect],
    ],
    [
      { tableOptions, isFilterable: true, isPaginated: true },
      [tableOptions, useFilters, usePagination],
    ],
  ])('returns functions in order %#', (input, expectedResult) => {
    expect(getTableArgs(input)).toEqual(expectedResult);
  });
});
