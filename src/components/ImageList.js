import React from "react";

const ImageList = props => {
  console.log(props.images);
  const imageDivs = props.images.map(image => <img src={image.urls.regular} />);
  return <div>{imageDivs}</div>;
};

export default ImageList;
