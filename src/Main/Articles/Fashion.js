import React from 'react'
import FashionArticleItem from "./FashionArticleItem";
import fashions from "./fashions";

const News = () => {
  return (
    <div className="fashion-block">
      {fashions.map(({ id, text, image }) => (
        <div className="block-f-1" key={id}>
          <FashionArticleItem text={text} image={image} />
        </div>
      ))}
    </div>
  );
};

export default News;
