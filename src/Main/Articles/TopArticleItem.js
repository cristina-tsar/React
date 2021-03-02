import React from "react";

const TopArticleItem = ({ image, title, className }) => {
  return (
    <>
      <div className={className}>
        <img src={image} alt="" width="100%" height="100%"/>
      </div>
      <a className="title">{title}</a>
    </>
  );
};
export default TopArticleItem;
