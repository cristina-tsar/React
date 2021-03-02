import React from "react";

const StarsArticleItem = ({ name, information, image, btnlearn }) => {
  return (
    <>
      <div className="photo-star">
        <img src={image} alt="" width="100%" height="100%" />
      </div>
      <div className="name-star">
        <h3>{name}</h3>
        <p className="name">{information}</p>
      </div>
      <div className="learnmore-btn">
        <a href="/">
          <img src={btnlearn} alt="" />
        </a>
      </div>
    </>
  );
};

export default StarsArticleItem;
