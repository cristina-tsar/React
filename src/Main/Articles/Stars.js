import React from 'react'

import StarsArticleItem from "./StarsArticleItem";
import starsblock from "./starsblock";
const Stars = () => {
  return (
    <div className="stars-block">
      {starsblock.map(({ id, name, information, image, btnlearn }) => (
        <div className="star-blocks-1" key={id}>
          <StarsArticleItem
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
