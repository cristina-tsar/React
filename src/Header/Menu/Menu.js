import React, {Component} from 'react';
import {Link} from "react-router-dom";


const Menu = () => {
    return (
      <div className="menu">
        <nav className='navigation hidden-menu'>
          <Link to="/">HOME</Link>
          <Link to="/fashion">FASHION</Link>
          <Link to="/news">NEWS</Link>
          <Link to="/lifestyle">LIFE STYLE</Link>
          <Link to="/beauty" className="second-flor" href="/">
            BEAUTY
          </Link>
          <Link to="/top" className="second-flor-2" href="/">
            TOP
          </Link>
          <Link to="exclusive" className="second-flor-3" href="/">
            EXCLUSIVE
          </Link>
        </nav>
        <div className='mobile-menu'>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    );
}
    

export default Menu
  