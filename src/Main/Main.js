import React from 'react'
import { Route } from "react-router-dom"

import Top from "./Articles/Top";
import Stars from "./Articles/Stars";
import Fashion from "./Articles/Fashion";

import TopPage from "./TopPage/TopPage"
import FashionPage from "./FashionPage/FashionPage"
import NewsPage from "./NewsPage/NewsPage"
import LifestylePage from "./LifeStylePage/LifeStylePage"
import BeauttyPage from "./BeautyPage/BeautyPage"
import ExclusivePage from "./ExclusivePage/ExclusivePage"
import { StarsPage } from './StarsPage/StarsPage';
import {PopularPage} from './PopularPage/PopularPage';
import {OnlyVoguePage} from './OnlyVoguePage/OnlyVoguePage'

const Main = () => {
  return (
    <main className="main">
      <div className="container main-container">
        <div className="row main-row">
          <div className="stars">
            <h1>...STARS...</h1>
            <Stars />
          </div>
          <div className="top-block">                      
            <Route path="/" exact render={() => <Top />}/>
            <Route path="/top" component={TopPage}/>
            <Route path="/fashion" component={FashionPage}/>
            <Route path="/news" component={NewsPage}/>
            <Route path="/lifestyle" component={LifestylePage}/>
            <Route path="/beauty" component={BeauttyPage}/>
            <Route path="/exclusive" component={ExclusivePage}/>
            <Route path="/starblocks/:id" component={StarsPage}/>
            <Route path="/tops/:id" component={PopularPage}/>
            <Route path="/fashions/:id" component={OnlyVoguePage}/>
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
            <Fashion/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main
