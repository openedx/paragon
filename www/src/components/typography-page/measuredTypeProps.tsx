import React from 'react';

const weightLabels: Record<string, string> = {
  200: 'Light',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'Medium',
  700: 'Bold',
  800: 'Black',
};

const measuredTypeProps = {
  properties: ['font-size', 'line-height', 'font-family', 'font-weight'],
  renderAfter: (measurements: { [x: string]: string; }) => {
    if (!measurements || Object.keys(measurements).length === 0) {
      return (
        <p className="m-0 text-muted">&nbsp;</p>
      );
    }
    const fontFamily = measurements['font-family']?.split(',')[0];
    const weight = weightLabels[measurements['font-weight']];
    // only one significant digit if needed
    const fontSize = Math.round(Number.parseFloat(measurements['font-size']) * 10) / 10;
    const lineHeight = Math.round(Number.parseFloat(measurements['line-height']) * 10) / 10;

    return (
      <p className="m-0 text-muted">
        <span className="mr-2">
          {fontFamily} {weight}
        </span>
        {fontSize}px / {lineHeight}px
      </p>
    );
  },
};

export default measuredTypeProps;
