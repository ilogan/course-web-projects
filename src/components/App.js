import React from "react";

import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../apis/youtube";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  handleTermSubmit = async term => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({ videos: response.data.items });
  };

  handleVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar handleTermSubmit={this.handleTermSubmit} />
        <VideoList
          handleVideoSelect={this.handleVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
