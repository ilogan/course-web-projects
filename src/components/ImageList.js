import React from "react";
import "./ImageList.css";

import ImageCard from "./ImageCard";

const ImageList = props => {
  console.log(props.images);
  const imageDivs = props.images.map(image => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className="image-list">{imageDivs}</div>;
};

export default ImageList;
