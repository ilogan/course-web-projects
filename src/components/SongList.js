// Common theme with connecting react to redux
import React, { Component } from "react";
import { connect } from "react-redux"; // 1) always import connect

class SongList extends Component {
  render() {
    // 3) this.props === {songs: state.songs} (i.e. this.props equals mapStateToProps value)
    return <div>SongList</div>;
  }
}

const mapStateToProps = state => {
  // 2) always mapStateToProps accepts some state and returning an object
  return { songs: state.songs };
};

// 4 pass mapStateToProps to connect and component to second set of parantheses
export default connect(mapStateToProps)(SongList);
