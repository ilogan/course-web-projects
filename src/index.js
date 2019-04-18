import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      long: null
    };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      err => console.log(err)
    );
    return (
      <div>
        <div>Latitude: {this.state.lat}</div>
        <div>Longitude: {this.state.long}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
