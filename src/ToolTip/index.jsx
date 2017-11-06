import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../Button';

import styles from './Tooltip.scss';

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props);

    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);

    this.state = {
      mouseOver: false,
    };
  }

  handleMouseOver() {
    this.setState({
      mouseOver: true,
    });
  }

  handleMouseOut() {
    this.setState({
      mouseOver: false,
    });
  }

  render() {
    // return (
    //   <div onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut} >
    //     <Button
    //       label={<span>Mouse over me for a tooltip!</span>}
    //     />
        // {this.state.mouseOver && <span className={classNames(styles['tooltip-inner'], styles['tooltip-bottom'])}>Tooltip text</span>}
    //   </div>
    // );
    return (
      <div className={classNames(styles.tooltip, styles.show)} role="tooltip" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
        {this.props.children}
        <Button
          label="Tooltip!"
        />
        <div className={classNames(styles['arrow'])} />
        {this.state.mouseOver && <div className={classNames(styles['tooltip-inner'])}>I am the tooltip!</div>}
      </div>
    );
  }
}


Tooltip.propTypes = {
  toolTipText: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  toolTipPosition: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

