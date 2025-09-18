import type { ReactNode, ReactElement } from 'react';
import { cloneElement, useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useCurrentTheme } from '../hooks';

export interface IMeasuredItem {
  properties: string[],
  renderBefore?: Function,
  renderAfter?: Function,
  children: ReactNode,
}

const initialMeasurements = {};

function MeasuredItem({
  properties,
  renderBefore,
  renderAfter,
  children,
}: IMeasuredItem) {
  const currentTheme = useCurrentTheme();
  const [measurements, setMeasurements] = useState(initialMeasurements);
  const itemRef = useRef();

  useEffect(
    () => {
      const measure = () => {
        if (!itemRef.current) {
          return;
        }
        const computedStyle = getComputedStyle(itemRef.current);
        const measurementsItems = properties.reduce((acc: { [x: string]: string; }, property: string) => {
          acc[property] = computedStyle.getPropertyValue(property);
          return acc;
        }, {});
        setMeasurements(measurementsItems);
      };
      const timeout = setTimeout(measure, 1000);
      return () => clearTimeout(timeout);
    },
    [currentTheme.name, properties],
  );

  return (<>
    {renderBefore?.(measurements)}
    {cloneElement(children as ReactElement, { ref: itemRef })}
    {renderAfter?.(measurements)}
  </>);
}

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
