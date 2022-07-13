import React from 'react';
import renderer from 'react-test-renderer';
import Truncate from './index';

describe('<Truncate />', () => {
  it('Component successfully renders', () => {
    const tree = renderer.create(
      <Truncate>
        Learners, course teams, researchers, developers: the edX community includes groups with a range of reasons
        for using the platform and objectives to accomplish. To help members of each group learn about what edX
        offers, reach goals, and solve problems, edX provides a variety of information resources.
      </Truncate>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
