import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  return !song ? (
    <div>Select a song</div>
  ) : (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: {song.title}
        <br />
        Duration: {song.duration}
      </p>
    </div>
  );
};

// state refers to the react reducer keys
const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
