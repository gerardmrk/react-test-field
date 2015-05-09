import React from 'react';

class Main extends React.Component {
  getInitialState() {
    return {
      focused: 0
    };
  }
  clicked(index) {
    this.setState({ focused: index });
  }
  render() {
    return <div>
    </div>;
  }
}
