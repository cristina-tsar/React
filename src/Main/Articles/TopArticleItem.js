import React from "react";
import {Link} from 'react-router-dom'

const TopArticleItem = ({id, image, title, className }) => {
  return (
    <>
      <div className={className}>
        <img src={image} alt="" width="100%" height="100%"/>
      </div>
      <Link to={`/tops/${id}`} className="title">{title}</Link>
    </>
  );
};
export default TopArticleItem;
