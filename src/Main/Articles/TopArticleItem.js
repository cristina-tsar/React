import React from "react";

const TopArticleItem = ({ image, title }) => {
  return (
    <>
      <div className="new-block-1">
        <img src={image} alt="" />
      </div>
      <a className="title">{title}</a>
    </>
  );
};
export default TopArticleItem;
