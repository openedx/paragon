import React from 'react';
import { mount } from 'enzyme';

import TableCell from '../TableCell';

const props = {
  getCellProps: () => ({ className: 'red' }),
  render: () => 'Cell data',
  column: {},
};

describe('<TableCell />', () => {
  let wrapper;
  beforeEach(() => {
    // Rendering a cell outside of a table causes a warning, so it is wrapped the appropriate html
    wrapper = mount(<table><tbody><tr><TableCell {...props} /></tr></tbody></table>);
  });

  it('renders a table cell', () => {
    const cell = wrapper.find('td');
    expect(cell.length).toEqual(1);
  });
  it('adds props to the cell', () => {
    const cell = wrapper.find('td');
    expect(cell.props().className).toEqual('pgn__data-table-cell-wrap red');
  });
  it('renders cell content', () => {
    const cell = wrapper.find('td');
    expect(cell.text()).toEqual('Cell data');
  });
  it('adds class names to the cell span', () => {
    const addedClass = 'align-me';
    wrapper = mount(
      <table>
        <tbody>
          <tr>
            <TableCell {...{ ...props, column: { cellClassName: addedClass } }} />
          </tr>
        </tbody>
      </table>,
    );
    const cell = wrapper.find('td');
    expect(cell.props().className).toContain(addedClass);
  });
});
