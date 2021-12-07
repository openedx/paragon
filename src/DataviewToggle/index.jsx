import React from 'react';
import PropTypes from 'prop-types';
import DataviewToggleButton from './DataviewToggleButton';

const DataviewToggle = ({ children }) => (
  <>
    <div>
      These are my children:
      <div className="mt-2 container">
        {children}
      </div>
    </div>
  </>
);

DataviewToggle.propTypes = {
  children: PropTypes.node.isRequired,
};

DataviewToggle.Button = DataviewToggleButton;

export default DataviewToggle;
