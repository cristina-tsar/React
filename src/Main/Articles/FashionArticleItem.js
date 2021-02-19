import React from "react";

const FashionsArticleItem = ({ image, text }) => {
  return (
    <>
      <a href="/" className="fashion-photo">
        <img src={image} alt="" width="100%" height="100%" />
      </a>
      <a href="/" className="fashion-text">
        {text}
      </a>
    </>
  );
};
export default FashionsArticleItem;
