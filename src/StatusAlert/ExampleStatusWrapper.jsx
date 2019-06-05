import React from 'react';


class ExampleStatusWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
    this.toggleAlert = this.toggleAlert.bind(this);
  }

  toggleAlert() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    const children = React.Children.map(this.props.children, child => React.cloneElement(child, {
      open: this.state.open,
      onClose: this.toggleAlert,
    }));

    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ExampleStatusWrapper;
