import React from 'react';
import PropTypes from 'prop-types';

export default class MeasuredItem extends React.Component {
  constructor(props) {
    super(props);

    const initialMeasurements = props.properties.reduce((acc, property) => {
      acc[property] = null;
      return acc;
    }, {});

    this.state = initialMeasurements;
    this.item = React.createRef();
  }

  componentDidMount() {
    // Needs a moment to render children to DOM first.
    setTimeout(this.measure.bind(this), 10);
  }

  measure() {
    const computedStyle = getComputedStyle(this.item.current);
    const measurements = this.props.properties.reduce((acc, property) => {
      acc[property] = computedStyle.getPropertyValue(property);
      return acc;
    }, {});

    this.setState(measurements);
  }

  render() {
    return (
      <>
        {this.props.renderBefore ? this.props.renderBefore(this.state) : null}
        {React.cloneElement(this.props.children, { ref: this.item })}
        {this.props.renderAfter ? this.props.renderAfter(this.state) : null}
      </>
    );
  }
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
