import React, { Component } from 'react';
import background from '../images/background.png';


class Welcome extends Component {
  render() {
    return (
      <div className="Welcome">
        <img src={background} className="App-background" alt="background" />
        <h1 className="Title">Félix Bourassa-Moreau</h1>
      </div>
    );
  }
}
export default Welcome;