import React from 'react'

import StarsArticleItem from "./StarsArticleItem";
import starblocks from "./starblocks";
const Stars = () => {
  return (
    <div className="stars-block">
      {starblocks.map(({ id, name, information, image, btnlearn }) => (
        <div className="star-blocks-1" key={id}>
          <StarsArticleItem
            id={id}
            name={name}
            information={information}
            image={image}
            btnlearn={btnlearn}
          />
        </div>
      ))}
    </div>
  );
};
export default Stars;
