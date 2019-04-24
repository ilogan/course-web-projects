import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  const videoDivs = videos.map(video => <VideoItem />);
  return <div>{videoDivs}</div>;
};

export default VideoList;
