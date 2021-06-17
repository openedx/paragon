import selectionsReducer, { initialState as defaultInitialState } from '../data/reducer';
import {
  setSelectedRowsAction,
  setSelectAllRowsAllPagesAction,
  deleteSelectedRowAction,
  addSelectedRowAction,
  clearSelectionAction,
  clearPageSelectionAction,
} from '../data/actions';

describe('DataTable selections reducer', () => {
  it('sets individual selected rows', () => {
    const rows = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const itemCount = 20;
    const action = setSelectedRowsAction(rows, itemCount);
    const updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual({
      ...defaultInitialState,
      selectedRows: rows,
    });
  });
  it('sets selected rows, when the entire table is selected', () => {
    const rows = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const itemCount = 3;
    const action = setSelectedRowsAction(rows, itemCount);
    const updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual({
      isEntireTableSelected: true,
      selectedRows: rows,
    });
  });
  it('selects entire table', () => {
    const initialState = {
      ...defaultInitialState,
      selectedRows: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
    const action = setSelectAllRowsAllPagesAction();
    const updatedState = selectionsReducer(initialState, action);
    expect(updatedState).toEqual({
      isEntireTableSelected: true,
      selectedRows: initialState.selectedRows,
    });
  });
  it('deletes a selected row', () => {
    const rows = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const initialState = {
      ...defaultInitialState,
      selectedRows: rows,
    };
    const action = deleteSelectedRowAction(1);
    const updatedState = selectionsReducer(initialState, action);
    expect(updatedState).toEqual({
      ...defaultInitialState,
      selectedRows: [{ id: 2 }, { id: 3 }],
    });
  });
  it('adds a selected row', () => {
    const row = { id: 1 };
    const itemCount = 5;
    const action = addSelectedRowAction(row, itemCount);
    const updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual({
      ...defaultInitialState,
      selectedRows: [row],
    });
  });
  it('adds a selected row, when entire table is selected', () => {
    const row = { id: 1 };
    const itemCount = 1;
    const action = addSelectedRowAction(row, itemCount);
    const updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual({
      selectedRows: [row],
      isEntireTableSelected: true,
    });
  });
  it('clears all selections and resets to default initial state', () => {
    const rows = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const initialState = {
      ...defaultInitialState,
      selectedRows: rows,
    };
    const action = clearSelectionAction();
    const updatedState = selectionsReducer(initialState, action);
    expect(updatedState).toEqual(defaultInitialState);
  });
  it('clears page selections', () => {
    const rows = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const initialState = {
      ...defaultInitialState,
      selectedRows: rows,
    };
    const action = clearPageSelectionAction([1, 2]);
    const updatedState = selectionsReducer(initialState, action);
    expect(updatedState).toEqual({
      ...defaultInitialState,
      selectedRows: [{ id: 3 }],
    });
  });
  it('handles unknown action', () => {
    const action = { type: 'SOME UNKNOWN ACTION' };
    const updatedState = selectionsReducer(defaultInitialState, action);
    expect(updatedState).toEqual(defaultInitialState);
  });
});
