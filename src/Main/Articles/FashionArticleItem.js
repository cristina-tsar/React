import React from "react";
import {Link} from 'react-router-dom'

const FashionArticleItem = ({ id, image, text }) => {
  return (
    <>
      <a href="/" >
        <img className="fashion-photo" src={image} alt="" width="100%" height="100%" />
      </a>
      <Link to={`/fashions/${id}`} className="fashion-text">
        {text}
      </Link>
    </>
  );
};
export default FashionArticleItem;
