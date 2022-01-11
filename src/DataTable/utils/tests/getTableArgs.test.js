/* eslint-disable object-curly-newline */
import {
  useSortBy, useFilters, useRowSelect, usePagination, useExpanded,
} from 'react-table';
import getTableArgs from '../getTableArgs';

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
    [{ tableOptions, isExpandable: true }, [tableOptions, useExpanded]],
    [{ tableOptions, isFilterable: true, isSelectable: true }, [tableOptions, useFilters, useRowSelect]],
    [{ tableOptions, isFilterable: true, isExpandable: true }, [tableOptions, useFilters, useExpanded]],
    [
      { tableOptions, isFilterable: true, isSelectable: true, isSortable: true, isPaginated: true, isExpandable: true },
      [tableOptions, useFilters, useSortBy, useExpanded, usePagination, useRowSelect],
    ],
    [
      { tableOptions, isSelectable: true, isSortable: true },
      [tableOptions, useSortBy, useRowSelect],
    ],
    [
      { tableOptions, isFilterable: true, isPaginated: true },
      [tableOptions, useFilters, usePagination],
    ],
    [
      { tableOptions, isPaginated: true, isExpandable: true },
      [tableOptions, useExpanded, usePagination],
    ],
  ])('returns functions in order %#', (input, expectedResult) => {
    expect(getTableArgs(input)).toEqual(expectedResult);
  });
});
