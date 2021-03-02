import React from "react";
import {Link} from 'react-router-dom';

const StarsArticleItem = ({ id, name, information, image, btnlearn }) => {
  return (
    <>
      <div className="photo-star">
        <img src={image} alt="" width="100%" height="100%" />
      </div>
      <div className="name-star">
        <Link to={`/starblocks/${id}`}><h3>{name}</h3></Link>
        <p className="name">{information}</p>
      </div>
      <div className="learnmore-btn">
        <Link to={`/starblocks/${id}`}>
          <img src={btnlearn} alt="" />
        </Link>
      </div>
     
    </>
  );
};

export default StarsArticleItem;
