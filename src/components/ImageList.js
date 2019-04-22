import React from "react";

const ImageList = props => {
  console.log(props.images);
  const imageDivs = props.images.map(({ description, id, urls }) => (
    <img key={id} src={urls.regular} alt={description} />
  ));
  return <div>{imageDivs}</div>;
};

export default ImageList;
