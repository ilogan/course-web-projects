// Common theme with connecting react to redux
import React, { Component } from "react";
import { connect } from "react-redux"; // 1) always import connect

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    // 3) this.props === {songs: state.songs} (i.e. this.props equals mapStateToProps value)
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  // 2) always mapStateToProps accepts some state and returning an object
  return { songs: state.songs };
};

// 4 pass mapStateToProps to connect and component to second set of parantheses
export default connect(mapStateToProps)(SongList);
