import React from "react"
import TopArticleItem from "./TopArticleItem";
import tops from "./tops";


const Top = () => {
  return (
    <>
      <h1>...POPULAR...</h1>
        <div class="item-news">            
          {tops.map(({ id, image, title, className }) => (            
              <div className={className} key={id}>
                <TopArticleItem id ={id} image={image} title={title} />
              </div>            
          ))}
          
        </div>
    </>    
  );
};
export default Top;
