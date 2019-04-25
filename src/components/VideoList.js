import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
  const videoDivs = videos.map(video => (
    <VideoItem video={video} handleVideoSelect={handleVideoSelect} />
  ));
  return <div className="ui relaxed divided list">{videoDivs}</div>;
};

export default VideoList;
