import React from 'react';
import ComponentUsage from './ComponentUsage';

import componentsUsage from '../../utils/componentsUsage';
import getEmptyMessage from '../../utils/getEmptyMessage';
import usagePropTypes from '../../utils/usagePropTypes';
import removeDotsFromKeys from '../../utils/removeDotsFromKey';

function ComponentsUsage({ data }: { data: string[] }) {
  const filteredComponentsUsage = removeDotsFromKeys(componentsUsage);

  return (
    <div className="pt-5 mb-5">
      {data.length ? data.sort().map(name => {
        if (filteredComponentsUsage[name]) {
          return (
            <ComponentUsage
              key={name}
              name={name}
              componentUsageInProjects={filteredComponentsUsage[name]}
            />
          );
        }
        return null;
      }) : getEmptyMessage('components')}
    </div>
  );
}

ComponentsUsage.propTypes = usagePropTypes;

export default ComponentsUsage;
