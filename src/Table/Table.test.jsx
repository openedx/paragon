/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { shallow } from 'enzyme';

import Table from './index';

const props = {
  headings: [
    { key: 'num', label: 'Number' },
    { key: 'x2', label: 'Number * 2' },
    { key: 'sq', label: 'Number Squared' },
  ],
  data: [
    { sq: 1, num: 1, x2: 2 },
    { sq: 4, num: 2, x2: 4 },
    { sq: 9, num: 3, x2: 6 },
  ],
};

describe('<Table />', () => {
  describe('renders', () => {
    const wrapper = shallow(
      <Table
        {...props}
      />,
    );

    it('with display headings in the right order', () => {
      wrapper.find('th').forEach((th, i) => {
        expect(th.text()).toEqual(props.headings[i].label);
      });
    });

    it('with data in the same order as the headings', () => {
      wrapper.find('tr').at(1).find('td').forEach((td, i) => {
        expect(Number(td.text())).toEqual(props.data[0][props.headings[i].key]);
      });
    });
  });
});
