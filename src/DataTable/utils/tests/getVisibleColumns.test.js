/* eslint-disable object-curly-newline */

import getVisibleColumns, { selectColumn } from '../getVisibleColumns';

describe('getVisibleColums', () => {
  const visibleColumns = [{ id: 'foo' }];
  it('adds the sort column', () => {
    expect(getVisibleColumns(true, [], [])).toEqual([selectColumn]);
  });
  it('returns the visible columns', () => {
    expect(getVisibleColumns(false, visibleColumns)).toEqual(visibleColumns);
  });
  it('adds the sort column before visible columns', () => {
    expect(getVisibleColumns(true, visibleColumns))
      .toEqual([selectColumn, ...visibleColumns]);
  });
  it('uses a manual sort column if given one', () => {
    const manualSort = { id: 'manual' };
    expect(getVisibleColumns(true, visibleColumns, [], manualSort)).toEqual([manualSort, ...visibleColumns]);
  });
  it('adds additional columns after the visible columns', () => {
    const additionalColumns = [{ id: 'bar' }, { id: 'baz' }];
    expect(getVisibleColumns(false, visibleColumns, additionalColumns))
      .toEqual([...visibleColumns, ...additionalColumns]);
  });
  it('puts columns in the correct order', () => {
    const additionalColumns = [{ id: 'bar' }, { id: 'baz' }];
    expect(getVisibleColumns(true, visibleColumns, additionalColumns))
      .toEqual([selectColumn, ...visibleColumns, ...additionalColumns]);
  });
});
