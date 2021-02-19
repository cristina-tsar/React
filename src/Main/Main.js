import React from 'react'

import Top from "./Articles/Top";
import Stars from "./Articles/Stars";
import Fashion from "./Articles/Fashion";

const Main = () => {
  return (
    <main className="main">
      <div className="container main-container">
        <div className="row main-row">
          <div className="stars">
            <h1 className="star-title">...EXCLUSIVE...</h1>
            <Stars />
          </div>
          <div className="top-block">
            <h1>...TOP...</h1>
            <Top />
          </div>
          <div className="slider-block">
            <div className="slider">
              Slider
              <div className="soc-media">
                <div className="icon-share">
                  <a href="/">
                    <img src="img/share.png" alt="" srcset="" />
                  </a>
                </div>
                <div className="icon-face">
                  <a href="/">
                    <img src="img/facebook.png" alt="" srcset="" />
                  </a>
                </div>
                <div className="icon-insta">
                  <a href="/">
                    <img src="img/insta.png" alt="" srcset="" />
                  </a>
                </div>
                <div className="icon-youtube">
                  <a href="/">
                    <img src="img/youtube.png" alt="" srcset="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="news">
            <h1>...FASHION...</h1>
            <Fashion />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main
