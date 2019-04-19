import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = { lat: null, lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    if (this.state.errorMessage && (!this.state.lat || !this.state.long)) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && (this.state.lat || this.state.long)) {
      return (
        <div>
          <div>Latitude: {this.state.lat}</div>
          <div>Longitude: {this.state.long}</div>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
