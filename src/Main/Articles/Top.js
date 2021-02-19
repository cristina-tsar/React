import React from "react"
import TopArticleItem from "./TopArticleItem";
import tops from "./tops";

const Top = () => {
  return (
    <div class="item-news">
      {tops.map(({ id, image, title }) => (
        <>
          <div className="news-1 fashion" key={id}>
            <TopArticleItem image={image} title={title} />
          </div>
        </>
      ))}
    </div>
  );
};
export default Top;
