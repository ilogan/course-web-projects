import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videoDivs = videos.map(video => <VideoItem video={video} />);
  return <div className="ui relaxed divided list">{videoDivs}</div>;
};

export default VideoList;
