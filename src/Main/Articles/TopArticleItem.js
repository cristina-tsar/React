import React from "react";

const TopArticleItem = ({ image, title, className }) => {
  return (
    <>
      <div className={className}>
        <img src={image} alt="" />
      </div>
      <a className="title">{title}</a>
    </>
  );
};
export default TopArticleItem;
