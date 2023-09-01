import React from 'react';
import ComponentUsage from './ComponentUsage';

import componentsUsage from '../../utils/componentsUsage';
import getEmptyMessage from '../../utils/getEmptyMessage';
import usagePropTypes from '../../utils/usagePropTypes';

function UtilsUsage({ data }: { data: string[] }) {
  return (
    <div className="pt-5 mb-5">
      {data.length ? data.sort().map(name => (
        <ComponentUsage
          key={name}
          name={name}
          componentUsageInProjects={componentsUsage[name]}
        />
      )) : getEmptyMessage('utils')}
    </div>
  );
}

UtilsUsage.propTypes = usagePropTypes;

export default UtilsUsage;
