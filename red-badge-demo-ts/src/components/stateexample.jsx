import React, { Component } from 'react';

class StateExample extends Component {
  constructor(props) {
    super(props);
    this.state = { currentTemp: '78', location: 'Indiana' };
  }
  handleClick = () => {
    this.setState({ currentTemp: '48' });
  };
  render() {
    const { currentTemp, location } = this.state;
    return (
      <div>
        The current temp is {currentTemp} in {location}.
        <button onClick={this.handleClick}>Click Me To Change Temp</button>
      </div>
    );
  }
}
export default StateExample;
