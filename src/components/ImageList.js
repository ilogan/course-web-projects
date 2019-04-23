import React from "react";
import "./ImageList.css";

const ImageList = props => {
  console.log(props.images);
  const imageDivs = props.images.map(({ description, id, urls }) => (
    <img key={id} src={urls.regular} alt={description} />
  ));
  return <div className="image-list">{imageDivs}</div>;
};

export default ImageList;
