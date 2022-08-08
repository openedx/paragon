import React, {
  useContext,
  useState,
  useRef,
  useEffect,
} from 'react';
import PropTypes from 'prop-types';

import { SettingsContext } from '../context/SettingsContext';

export interface IMeasuredItem {
  properties: Array<any>,
  renderBefore?: Function,
  renderAfter?: Function,
  children: React.ReactNode,
}

const initialMeasurements = {};

const MeasuredItem = ({
  properties,
  renderBefore,
  renderAfter,
  children,
}: IMeasuredItem) => {
  const { theme } = useContext(SettingsContext);
  const [measurements, setMeasurements] = useState(initialMeasurements);
  const itemRef = useRef<Element>();

  useEffect(
    () => {
      const measure = () => {
        const computedStyle = getComputedStyle(itemRef.current as Element);
        const measurements = properties.reduce((acc, property) => {
          acc[property] = computedStyle.getPropertyValue(property);
          return acc;
        }, {});
        setMeasurements(measurements);
      };
      // Needs a moment to finish switching theme and re-render children to DOM first.
      setMeasurements(initialMeasurements);
      const timeout = setTimeout(measure, 1000);
      return () => clearTimeout(timeout);
    },
    [theme, properties],
  );

  return (
    <>
      {renderBefore ? renderBefore(measurements) : null}
      {React.cloneElement(children as React.ReactElement, { ref: itemRef })}
      {renderAfter ? renderAfter(measurements) : null}
    </>
  );
};

MeasuredItem.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.string),
  renderBefore: PropTypes.func,
  renderAfter: PropTypes.func,
  children: PropTypes.node.isRequired,
};

MeasuredItem.defaultProps = {
  properties: [],
  renderBefore: undefined,
  renderAfter: undefined,
};

export default MeasuredItem;
